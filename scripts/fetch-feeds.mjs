// Pulls live content into data/feeds/*.json. Run daily by GitHub Actions (and `npm run feeds` locally).
// Each source is independent: if one fails, its previous snapshot is kept and the build still succeeds.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { XMLParser } from 'fast-xml-parser';
import { load as yamlLoad } from 'js-yaml';
const yaml = { load: yamlLoad };

const root = new URL('../', import.meta.url);
const feedsDir = new URL('data/feeds/', root);
await mkdir(feedsDir, { recursive: true });

const profile = yaml.load(await readFile(new URL('data/profile.yaml', root), 'utf8'));
const featured = yaml.load(await readFile(new URL('data/featured-repos.yaml', root), 'utf8')) ?? [];
const xml = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });
const UA = { 'User-Agent': 'ksprashu.dev feed refresher (+https://ksprashu.dev)' };
const arr = (x) => (Array.isArray(x) ? x : x ? [x] : []);

async function get(url, headers = {}) {
  const res = await fetch(url, { headers: { ...UA, ...headers }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}

async function save(name, fn) {
  const file = new URL(`${name}.json`, feedsDir);
  try {
    const data = await fn();
    if (!data || (Array.isArray(data.items) && data.items.length === 0)) throw new Error('empty result');
    await writeFile(file, JSON.stringify({ fetchedAt: new Date().toISOString(), ...data }, null, 2) + '\n');
    console.log(`✓ ${name}`);
  } catch (err) {
    console.warn(`⚠ ${name}: ${err.message} — keeping previous snapshot`);
  }
}

// ---- Medium
await save('medium', async () => {
  const doc = xml.parse(await (await get(profile.medium_feed)).text());
  const items = arr(doc.rss?.channel?.item).map((i) => {
    const html = String(i['content:encoded'] ?? '');
    const img = html.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null;
    const text = html.replace(/<figure[\s\S]*?<\/figure>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return {
      title: String(i.title),
      url: String(i.link).split('?')[0],
      date: new Date(i.pubDate).toISOString(),
      tags: arr(i.category).map(String),
      image: img,
      excerpt: text.slice(0, 220).replace(/\s\S*$/, '') + '…',
    };
  });
  return { items };
});

// ---- YouTube (channel uploads + talks playlist)
const ytParse = async (url) => {
  const doc = xml.parse(await (await get(url)).text());
  return arr(doc.feed?.entry).map((e) => ({
    title: String(e.title),
    id: String(e['yt:videoId']),
    url: `https://www.youtube.com/watch?v=${e['yt:videoId']}`,
    thumb: `https://i.ytimg.com/vi/${e['yt:videoId']}/hqdefault.jpg`,
    date: new Date(e.published).toISOString(),
  }));
};
await save('youtube-talks', async () => ({
  items: await ytParse(`https://www.youtube.com/feeds/videos.xml?playlist_id=${profile.youtube.talks_playlist}`),
}));
await save('youtube-channel', async () => ({
  items: await ytParse(`https://www.youtube.com/feeds/videos.xml?channel_id=${profile.youtube.channel_id}`),
}));

// ---- GitHub
const gh = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
await save('github', async () => {
  const repos = [];
  for (let page = 1; page <= 5; page++) {
    const batch = await (await get(`https://api.github.com/users/${profile.github_user}/repos?per_page=100&page=${page}&type=owner`, gh)).json();
    repos.push(...batch);
    if (batch.length < 100) break;
  }
  const pick = (r) => ({
    name: r.name, url: r.html_url, description: r.description, stars: r.stargazers_count,
    language: r.language, created: r.created_at, pushed: r.pushed_at, topics: r.topics ?? [],
  });
  const own = repos.filter((r) => !r.fork && !r.archived && !r.private);
  const byName = new Map(own.map((r) => [r.name, r]));
  const featuredRepos = featured.map((n) => byName.get(n)).filter(Boolean).map(pick);
  const recent = own
    .filter((r) => !featured.includes(r.name) && r.name !== 'ksprashu.dev' && r.description)
    .sort((a, b) => b.created_at.localeCompare(a.created_at))
    .slice(0, 6)
    .map(pick);
  return { publicRepos: own.length, items: featuredRepos, recent };
});

// ---- Avatar (fallback photo if no public/headshot.jpg is provided)
try {
  const res = await get(`https://github.com/${profile.github_user}.png?size=400`);
  await writeFile(new URL('public/avatar.png', root), Buffer.from(await res.arrayBuffer()));
  console.log('✓ avatar');
} catch (err) {
  console.warn(`⚠ avatar: ${err.message}`);
}
