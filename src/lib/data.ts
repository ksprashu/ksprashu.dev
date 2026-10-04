import { readFileSync, existsSync } from 'node:fs';
import { load as yamlLoad } from 'js-yaml';
const yaml = { load: yamlLoad };
import { marked } from 'marked';

import { pathToFileURL } from 'node:url';
const root = pathToFileURL(process.cwd() + '/');
const read = (p: string) => readFileSync(new URL(p, root), 'utf8');
const y = <T>(p: string): T => yaml.load(read(p)) as T;
const feed = <T>(name: string, fallback: T): T => {
  const f = new URL(`data/feeds/${name}.json`, root);
  return existsSync(f) ? (JSON.parse(readFileSync(f, 'utf8')) as T) : fallback;
};

export type Link = { label: string; url: string; icon: string };
export type Talk = {
  date: string | number; event: string; title?: string; place?: string; kind?: string;
  video?: string; slides?: string; link?: string;
};
export type Post = { title: string; url: string; date: string; tags: string[]; image?: string | null; excerpt?: string };
export type Repo = { name: string; url: string; description: string | null; stars: number; language: string | null; created: string };
export type Video = { title: string; id: string; url: string; thumb: string; date: string };

export const profile = y<{
  name: string; handle: string; role: string; org: string; location: string; thesis: string; intro: string; links: Link[];
}>('data/profile.yaml');
export const now = marked.parse(read('data/now.md')) as string;
export const journey = y<{ org: string; role: string; period: string; points: string[] }[]>('data/journey.yaml');
export const impact = y<{ title: string; text: string }[]>('data/impact.yaml');

export const talks = y<Talk[]>('data/talks.yaml').map((t) => ({ ...t, date: String(t.date) }));
export const posts = feed<{ items: Post[] }>('medium', { items: [] }).items;
export const github = feed<{ publicRepos?: number; items: Repo[]; recent: Repo[] }>('github', { items: [], recent: [] });
export const talkVideos = feed<{ items: Video[] }>('youtube-talks', { items: [] }).items;

export const hasHeadshot = existsSync(new URL('public/headshot.jpg', root));
export const hasAvatar = existsSync(new URL('public/avatar.png', root));

export const fmtDate = (d: string, opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }) => {
  const parts = String(d).split('-');
  if (parts.length === 1) return parts[0];
  const date = new Date(parts.length === 2 ? `${d}-01T00:00:00Z` : d);
  return date.toLocaleDateString('en-GB', { ...opts, timeZone: 'UTC' });
};
