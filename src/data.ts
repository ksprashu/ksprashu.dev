import { Project, BlogPost, Achievement, Experience } from './types';

export const personalInfo = {
  name: 'Prashanth Subrahmanyam',
  nickname: 'ksprashu',
  title: 'JAPAC Developer Relations Lead, Google Cloud',
  specialties: ['Generative AI', 'AI Agents', 'AI Assisted Engineering', 'Cloud Architecture'],
  location: 'Bengaluru, India (JAPAC Region)',
  email: 'ksprashanth82@gmail.com',
  github: 'https://github.com/ksprashu',
  linkedin: 'https://linkedin.com/in/ksprashu',
  medium: 'https://medium.com/@ksprashu',
  twitter: 'https://twitter.com/ksprashu',
  bio: `I lead Developer Relations and Developer Advocacy for Google Cloud across the JAPAC (Japan & Asia-Pacific) region. I am deeply passionate about enabling developers, startup builders, and enterprise architects to harness the power of Generative AI, construct resilient AI Agent ecosystems, and implement AI-assisted software engineering pipelines. 

With years of experience in cloud infrastructure, software engineering, and community building, I actively write, speak, and code at the intersection of AI and Cloud. My daily mission is to demystify complex LLM paradigms, design cutting-edge RAG systems, and build robust frameworks that turn raw AI capability into production-grade systems.`,
  avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=ksprashu&backgroundColor=0f172a'
};

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'JAPAC DevRel Leadership',
    description: 'Empowering over 1.2M+ developers, startup builders, and system architects across APAC on Google Cloud, Gemini, and GenAI technologies.',
    metric: '1.2M+ Devs',
    iconName: 'Globe'
  },
  {
    id: 'ach-2',
    title: 'GenAI & AI Agents Workshops',
    description: 'Designed and conducted developer bootcamps and deep-dive hands-on labs training 15,000+ engineers on Vertex AI, Gemini, and multi-agent systems.',
    metric: '15k+ Trained',
    iconName: 'Cpu'
  },
  {
    id: 'ach-3',
    title: 'Speaker & Tech Evangelist',
    description: 'Delivered keynote presentations and technical talks at Open Source India, Google Cloud Next, major DevFests, and JAPAC tech symposia.',
    metric: '50+ Keynotes',
    iconName: 'Mic'
  },
  {
    id: 'ach-4',
    title: 'Frameworks & Boilerplates Creator',
    description: 'Authored widely adapted enterprise blueprints for LangGraph and Vertex AI orchestrations, boosting cloud-native developer starting speed.',
    metric: '1,000+ Stars',
    iconName: 'Code'
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Google',
    role: 'Developer Relations Lead, Google Cloud (JAPAC)',
    period: '2023 - Present',
    location: 'Bengaluru, India',
    description: 'Directing technical advocacy, community strategies, and developer enablement programs across JAPAC with a strategic focus on Generative AI platforms.',
    bullets: [
      'Orchestrated Developer Relations programs across 12 countries in Japan, Asia-Pacific, and South Asia.',
      'Designed technical advocacy tracks focusing on Gemini 1.5, Vertex AI Studio, Vector Search, and Cloud SQL databases.',
      'Partnered with enterprise engineering divisions to successfully transition experimental LLM architectures into reliable microservices.',
      'Produced open-source notebooks, SDK examples, and boilerplate templates that set best-practices for Gemini API integrations.'
    ]
  },
  {
    id: 'exp-2',
    company: 'Google',
    role: 'Staff Developer Advocate, Cloud Platforms',
    period: '2020 - 2023',
    location: 'Bengaluru, India',
    description: 'Led technical advocacy for Google Cloud’s application engineering, serverless, and cloud-native databases portfolios in JAPAC.',
    bullets: [
      'Pioneered early developer outreach for Google Kubernetes Engine (GKE), Cloud Run, and Cloud SQL.',
      'Published architectural patterns on multi-region hybrid microservices that became core documentation standards.',
      'Cultivated an expansive network of Google Developer Experts (GDEs) specialized in Cloud technologies.',
      'Maintained active collaborations with open-source communities representing Kubernetes, Docker, and Node.js.'
    ]
  },
  {
    id: 'exp-3',
    company: 'Leading Enterprise Tech Companies',
    role: 'Principal Architect & Technical Evangelist',
    period: 'Before 2020',
    location: 'Bengaluru, India',
    description: 'Acted as a principal cloud architect and developer evangelist, specializing in large-scale system designs, containerization, and backend engineering.',
    bullets: [
      'Designed distributed, low-latency microservices architectures processing millions of daily transactions.',
      'Conducted containerization migrations for traditional enterprise applications, reducing compute overhead by 40%.',
      'Regular contributor and active maintainer of several open-source dev-tool configurations.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Vertex AI Agents Boilerplate',
    description: 'A comprehensive, production-ready starter kit for orchestrating complex multi-agent systems using Google Cloud Vertex AI, Gemini 1.5, and LangGraph.',
    longDescription: 'Moving beyond single-prompt chatbots requires orchestrating multiple AI agents that have specialized tools, state preservation, and clear execution graphs. This project provides a robust, production-grade template using LangGraph and Python, designed to be deployed instantly on Cloud Run. It includes local testing configurations, structured output validation, and complete CI/CD workflow assets.',
    tags: ['Gemini 1.5 Pro', 'LangGraph', 'Vertex AI', 'Python', 'Cloud Run'],
    githubUrl: 'https://github.com/ksprashu/vertex-ai-agents-boilerplate',
    stars: 245,
    forks: 48,
    category: 'AI Agents'
  },
  {
    id: 'proj-2',
    title: 'Enterprise RAG Architectures',
    description: 'Reference implementations and deployable code blueprints for high-throughput, low-latency Retrieval-Augmented Generation (RAG) using Google Cloud databases.',
    longDescription: 'This repository contains complete code-level blueprints for building advanced RAG search systems. It covers dense passage retrieval, hybrid keyword-semantic searching, and secondary reranking. Supports dual backend options using Cloud SQL PostgreSQL with pgvector or AlloyDB, fully integrated with Vertex AI Embeddings and Gemini models.',
    tags: ['Vertex AI Vector Search', 'pgvector', 'FastAPI', 'BigQuery', 'Python'],
    githubUrl: 'https://github.com/ksprashu/enterprise-rag-architectures',
    stars: 312,
    forks: 64,
    category: 'GenAI'
  },
  {
    id: 'proj-3',
    title: 'AI-Assisted CI/CD Software Engineering',
    description: 'Custom Gemini-powered review agent integrated into GitHub Actions to execute automated semantic code audits, static security checks, and PR summaries.',
    longDescription: 'Transforming code reviews with generative AI. This action listens to pull request creation events, fetches diff metadata, and calls Gemini to conduct a dual audit: checking for logical syntax bugs and reviewing code compliance against standard security benchmarks. It comments on specific code lines, providing detailed optimization proposals directly inside GitHub.',
    tags: ['GitHub Actions', 'Gemini API', 'TypeScript', 'Node.js', 'Docker'],
    githubUrl: 'https://github.com/ksprashu/ai-assisted-engineering-actions',
    stars: 189,
    forks: 31,
    category: 'Cloud Architecture'
  },
  {
    id: 'proj-4',
    title: 'Multimodal Media Semantic Search',
    description: 'A web dashboard demonstrating instant natural-language queries and semantic analysis across video, audio, and visual media files.',
    longDescription: 'Leveraging the advanced multi-modal embeddings of Vertex AI to index large visual assets. The application allows users to upload a video, transcribes audio and logs key frames, and generates high-dimensional embeddings. Users can search with conversational questions (e.g. "show the scene where they discuss the budget plan") and jump directly to the exact timestamp.',
    tags: ['React', 'Vertex AI Embeddings', 'Python', 'TailwindCSS', 'Cloud Storage'],
    githubUrl: 'https://github.com/ksprashu/multimodal-semantic-search',
    stars: 156,
    forks: 23,
    category: 'GenAI'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Demystifying AI Agents: From Prompts to Production-Grade Systems',
    date: 'July 2026',
    readTime: '8 min read',
    category: 'AI Agents',
    summary: 'Moving past simple chatbots. Discover the state management, tool-routing systems, and human-in-the-loop validation patterns required to deploy self-healing multi-agent applications.',
    content: `AI Agents represent the next major evolution in software. While a standard chatbot responds directly to queries, an Agent can strategize, use search engines, read databases, and trigger external API actions to accomplish high-level objectives. 

However, building reliable agents requires addressing core engineering challenges:
1. **State Persistence**: Agents need to remember conversational history and progress across long-running async tasks.
2. **Tool Routing & Fallbacks**: Ensuring the agent handles faulty tool outputs or timeouts gracefully without entering infinite crash loops.
3. **Human-in-the-Loop (HITL)**: Setting up strict approval gates for highly sensitive actions, like database writes or financial transactions.

In this deep dive, we walk through constructing a production-grade agent using LangGraph and the Gemini API. We analyze how representing agent loops as Directed Acyclic Graphs (DAGs) gives developers deterministic control over the execution path while leaving the model free to reason inside the nodes. We'll also examine testing techniques, cost optimization, and evaluating agent confidence before triggering actions.`,
    tags: ['AI Agents', 'LangGraph', 'Gemini API', 'Enterprise Software']
  },
  {
    id: 'blog-2',
    title: 'Retrieval-Augmented Generation (RAG) at Scale on Google Cloud',
    date: 'May 2026',
    readTime: '12 min read',
    category: 'GenAI',
    summary: 'An architect’s guide comparing Cloud SQL (pgvector), AlloyDB, and Vertex AI Vector Search for hosting high-throughput vector queries with strict latency SLAs.',
    content: `RAG has become the industry standard for bridging private enterprise knowledge with large language models. But as your dataset scales from 1,000 documents to 10,000,000, standard semantic search begins to break under latency overhead and precision issues.

To construct an enterprise-grade RAG engine, developers must look beyond simple vector matches:
- **Hybrid Search**: Fusing dense vector searches (which capture semantic meaning) with sparse keyword searches (such as BM25, which capture specific alphanumeric codes or product SKU matches).
- **Reciprocal Rank Fusion (RRF)**: A mathematical strategy to combine rankings from keyword and vector queries.
- **Semantic Reranking**: Utilizing a secondary cross-encoder model to re-evaluate the top 20 retrieved documents, ensuring the most contextually relevant information sits at the top before LLM generation.

We compare Google Cloud’s vector storage portfolio, explaining when to use the lightweight Cloud SQL pgvector, the high-performance AlloyDB Omni, or the planetary-scale, sub-10ms Vertex AI Vector Search. Complete code setups and indexing parameters (IVF, HNSW) are included.`,
    tags: ['RAG', 'Vector Search', 'Cloud SQL', 'AlloyDB', 'Databases']
  },
  {
    id: 'blog-3',
    title: 'Unlocking Multi-Modal Capabilities with Gemini 1.5 Pro',
    date: 'March 2026',
    readTime: '10 min read',
    category: 'GenAI',
    summary: 'How to utilize Gemini’s 2-million token context window to perform direct audits across complete source code trees, hours of video, and massive audio assets.',
    content: `For years, natural language processing has been limited by small context windows. Developers were forced to split files, summarize documents recursively, or discard important metadata. Gemini 1.5 Pro changes this completely with its massive 2-million token context window.

This native capability lets you feed complete engineering environments, hours of video, or legal documentation books directly to the model:
- **Direct Code Tree Analysis**: Feed a zip file of an entire 1.5-million-line codebase, allowing the model to answer architectural questions, trace security flows, and identify cross-file refactoring needs.
- **Video Semantic Extraction**: Pass a 3-hour video recording, prompting Gemini to extract specific quotes, identify physical activities, or generate time-stamped visual indices.
- **Unified Multimodal Context**: Combining text, audio, and visual logs in a single query to provide unmatched contextual understanding.

In this guide, we analyze the performance of Gemini 1.5 Pro’s "needle in a haystack" retrieval capabilities and demonstrate optimal prompt designs for massive multi-modal assets.`,
    tags: ['Gemini 1.5 Pro', 'Multimodal', 'Context Window', 'Google Cloud']
  }
];

export const skills = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Bash', 'SQL', 'HTML/CSS'],
  ai: ['Gemini API', 'Vertex AI Studio', 'LangChain', 'LangGraph', 'LlamaIndex', 'Vector Databases', 'Prompt Engineering', 'RAG Design'],
  cloud: ['Google Cloud (GCP)', 'Kubernetes (GKE)', 'Cloud Run', 'Cloud SQL', 'BigQuery', 'Terraform', 'CI/CD Pipelines', 'Serverless Arch']
};
