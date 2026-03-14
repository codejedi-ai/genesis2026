# AuraFlow — System Design Diagram & Architecture

> **Project:** AuraFlow (Dreamwell Hackathon — "Reel It Back")
> **Purpose:** AI-powered influencer-brand matching platform for influencer marketing managers
> **Last Updated:** 2026-03-14

---

## 1. High-Level Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          AuraFlow Platform                                  │
│                                                                             │
│  ┌──────────┐    ┌──────────────┐    ┌──────────────────────────────────┐   │
│  │          │    │              │    │         INFERENCE LAYER           │   │
│  │   USER   │───▶│   FRONTEND   │───▶│                                  │   │
│  │          │    │   (Next.js)  │    │  ┌────────────┐  ┌───────────┐  │   │
│  │          │◀───│              │◀───│  │Brand Agent │  │Influencer │  │   │
│  └──────────┘    └──────────────┘    │  │            │  │  Agent    │  │   │
│                         │            │  └─────┬──────┘  └─────┬─────┘  │   │
│                         │            │        │               │        │   │
│                         ▼            │        ▼               ▼        │   │
│                  ┌──────────────┐    │  ┌──────────────────────────┐   │   │
│                  │   BACKEND    │───▶│  │   MultiModal Inference   │   │   │
│                  │  (Next.js    │    │  │  (Ollama / VertexAI /    │   │   │
│                  │   Server +   │    │  │   Cohere / OpenAI)       │   │   │
│                  │   FastAPI)   │    │  └──────────────────────────┘   │   │
│                  └──────────────┘    └──────────────────────────────────┘   │
│                                                      │                      │
│                                                      ▼                      │
│                                      ┌──────────────────────────────┐       │
│                                      │          DATA LAYER          │       │
│                                      │                              │       │
│                                      │  ┌────────────┐ ┌────────┐  │       │
│                                      │  │ Influencer │ │ Brands │  │       │
│                                      │  │    DB      │ │   DB   │  │       │
│                                      │  │ (Pinecone) │ │(Pinec.)│  │       │
│                                      │  └────────────┘ └────────┘  │       │
│                                      │                              │       │
│                                      │  ┌────────┐ ┌────────────┐  │       │
│                                      │  │Airtable│ │  Notion    │  │       │
│                                      │  └────────┘ └────────────┘  │       │
│                                      └──────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Detailed Component Diagram (from Application Infrastructure Canvas)

The canvas file maps the following flow:

```
┌──────────┐   "Asks the Question:     ┌──────────────┐              ┌──────────────────────────┐
│          │    Connects the source"    │              │              │                          │
│   USER   │──────────────────────────▶│   FRONTEND   │─────────────▶│       BACKEND            │
│          │                           │   (Next.js)  │              │  - Form request for      │
│          │◀──────────────────────────│              │              │    brand type             │
│          │  "Replies with influencers│              │              │  - API Auth Layer         │
└──────────┘   user/company seeks"     └──────────────┘              │  - Next.js Server        │
                                                                     └───────┬──────────────────┘
                                                                             │
                                           ┌─────────────────────────────────┼─────────────────────┐
                                           │                                 │                     │
                                           ▼                                 ▼                     ▼
                              ┌─────────────────────┐         ┌──────────────────┐    ┌────────────────────┐
                              │  Intelect/Inference  │         │  Open Source Dev  │    │  Branding Model    │
                              │                      │         │  Philosophy       │    │                    │
                              │  - Pull influencers  │         │                   │    │  - Trained on      │
                              │    & brands          │         │  "Our preferences │    │    brand identity   │
                              │  - FastAPI +         │         │   reflected by    │    │    data             │
                              │    Ollama model      │         │   the LLMs"       │    │                    │
                              └──────────┬───────────┘         └───────────────────┘    └────────┬───────────┘
                                         │                                                       │
                                         ▼                                                       ▼
                              ┌─────────────────────┐                                 ┌─────────────────────┐
                              │  Influencer Database │                                 │   Brands Database   │
                              │  (Pinecone:          │                                 │   (Pinecone:        │
                              │   meta3-hackathon)   │                                 │    dreamwell-       │
                              └──────────────────────┘                                 │    hackathon)       │
                                                                                       └─────────────────────┘
```

### Brand Agent Data Sources

```
┌──────────────────────────┐        ┌─────────────────────────┐
│  MultiModal Inference    │◀───────│  Brainstorming Journal  │
│                          │◀───────│  Notion                 │
│  "Different models       │◀───────│  Airtable               │
│   trained with different │        └─────────────────────────┘
│   datasets from          │
│   different cultures     │
│   → reflects cultural    │
│     preferences & biases"│
└──────────────────────────┘
```

### Influencer Agent Data Sources

```
┌──────────────────────────┐        ┌─────────────────────────┐
│  MultiModal Inference    │◀───────│  Brainstorming Journal  │
│  (Influencer-specific)   │◀───────│  Notion                 │
│                          │◀───────│  Airtable               │
└──────────────────────────┘        └─────────────────────────┘
```

---

## 3. Data Flow Sequence

```
  User                Frontend           Backend (API)        Inference           Vector DB
   │                    │                    │                    │                   │
   │  Submit brand      │                    │                    │                   │
   │  form (values,     │                    │                    │                   │
   │  mission, emotion) │                    │                    │                   │
   │───────────────────▶│                    │                    │                   │
   │                    │  POST /ask_        │                    │                   │
   │                    │  deepseek_         │                    │                   │
   │                    │  influencer        │                    │                   │
   │                    │───────────────────▶│                    │                   │
   │                    │                    │  Embed query       │                   │
   │                    │                    │  (Ollama llama3    │                   │
   │                    │                    │   or OpenAI)       │                   │
   │                    │                    │───────────────────▶│                   │
   │                    │                    │                    │  Similarity       │
   │                    │                    │                    │  search (k=10,    │
   │                    │                    │                    │  threshold=0.5)   │
   │                    │                    │                    │──────────────────▶│
   │                    │                    │                    │                   │
   │                    │                    │                    │◀─── Matching docs │
   │                    │                    │                    │                   │
   │                    │                    │  For each result:  │                   │
   │                    │                    │  Cohere Command-A  │                   │
   │                    │                    │  structures into   │                   │
   │                    │                    │  InfluencerMatch   │                   │
   │                    │                    │  JSON schema       │                   │
   │                    │                    │◀───────────────────│                   │
   │                    │                    │                    │                   │
   │                    │◀───────────────────│                    │                   │
   │                    │  JSON response:    │                    │                   │
   │                    │  [{name, platform, │                    │                   │
   │                    │    followers,       │                    │                   │
   │                    │    vibeScore, ...}] │                    │                   │
   │◀───────────────────│                    │                    │                   │
   │  Display matched   │                    │                    │                   │
   │  influencers       │                    │                    │                   │
```

---

## 4. Technology Stack

### Frontend
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| Framework       | ICE.js 3 (React 18)                       |
| Language        | TypeScript                                |
| Styling         | CSS Modules                               |
| Routing         | ICE.js defineRoutes                       |
| Deployment      | Netlify                                   |
| Pages           | Home, About, Features, Analysis, Documentation, Download, API-Test |

### Backend — Agent Variant A (LlamaIndex)
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| API Framework   | FastAPI (Python)                          |
| LLM (Embeddings)| Ollama (llama3, local)                   |
| LLM (Structuring)| Cohere Command-A (command-a-03-2025)    |
| Vector Store    | Pinecone (index: `meta3-hackathon`)       |
| Orchestration   | LangChain + LangChain-Pinecone            |
| Endpoints       | `/health`, `/ask_deepseek_influencer`, `/ask_deepseek_brand` |

### Backend — Agent Variant B (VertexAI)
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| API Framework   | FastAPI (Python)                          |
| LLM (Embeddings)| OpenAI `text-embedding-3-large`           |
| LLM (Generation)| Google VertexAI Gemini Pro                |
| Vector Store    | Pinecone (index: `dreamwell-hackathon`)   |
| Orchestration   | LangChain + LangChain-Pinecone + LangChain-Google-VertexAI |
| Endpoints       | `/`, `/query`                              |

### Smart Contracts (Experimental)
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| Framework       | Hardhat 3                                 |
| Language        | Solidity (via Ethers.js v6)               |
| Purpose         | "Impact Commons" — labor valued by impact |

### Infrastructure
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| Hosting         | Netlify (frontend) + local/cloud (API)    |
| Vector DB       | Pinecone (AWS us-east-1, cosine metric)   |
| CI/CD Config    | netlify.toml                              |
| Google Cloud    | Dreamwell-Hackathon project (YouTube API, VertexAI) |

---

## 5. API Schema

### BrandForm / InfluencerForm (Input)
```json
{
  "brand": "string",
  "influencer": "string",
  "brandValues": ["string"],
  "missionStatement": "string",
  "targetEmotion": "string"
}
```

### InfluencerMatch (Output — per result)
```json
{
  "name": "string",
  "platform": "string",
  "followers": "string",
  "engagement": "string",
  "niche": "string",
  "details": "string",
  "values": ["string"],
  "vibeScore": 0.0,
  "audienceAlignment": 0.0,
  "contentStyle": "string"
}
```

---

## 6. Key Databases (Pinecone Indexes)

| Index Name             | Purpose                                   | Embedding Model            |
|------------------------|-------------------------------------------|----------------------------|
| `meta3-hackathon`      | Influencer profiles & content data        | Ollama llama3              |
| `dreamwell-hackathon`  | Brand profiles & campaign data            | OpenAI text-embedding-3-large |

Both use cosine similarity with a default score threshold of 0.5 for retrieval.

---

## 7. MultiModal Inference Philosophy

The system is designed around the principle that different AI models trained on different datasets by people from different cultures will reflect cultural preferences and biases. By leveraging multiple models (Ollama/llama3, Cohere Command-A, Google Gemini Pro, OpenAI), the platform aims to surface culturally diverse influencer-brand matchings rather than relying on a single model's worldview.

Future vision: user preferences and needs would be reflected by the LLMs themselves — identity encapsulated as the LLM.

---

## 8. Deployment Architecture

```
                    ┌───────────────────────┐
                    │      Netlify CDN      │
                    │  uw-rizzlers.netlify  │
                    │       .app            │
                    └──────────┬────────────┘
                               │
                               ▼
                    ┌───────────────────────┐
                    │   ICE.js Frontend     │
                    │   (React 18 + TS)     │
                    │   + Netlify Functions  │
                    └──────────┬────────────┘
                               │
                    ┌──────────┴────────────┐
                    │                       │
                    ▼                       ▼
         ┌───────────────────┐   ┌───────────────────┐
         │  FastAPI Server   │   │  FastAPI Server   │
         │  (LlamaIndex      │   │  (VertexAI        │
         │   Agent)          │   │   Agent)          │
         │  Port 8000        │   │  Port 8000        │
         └────────┬──────────┘   └────────┬──────────┘
                  │                        │
         ┌───────┴────────┐       ┌───────┴────────┐
         │                │       │                │
         ▼                ▼       ▼                ▼
  ┌─────────────┐  ┌──────────┐  ┌─────────────┐  ┌──────────────┐
  │  Ollama     │  │ Cohere   │  │ OpenAI      │  │ Google       │
  │  (llama3)   │  │ Command-A│  │ Embeddings  │  │ VertexAI     │
  │  local      │  │ API      │  │ API         │  │ Gemini Pro   │
  └─────────────┘  └──────────┘  └─────────────┘  └──────────────┘
         │                                │
         └───────────┬────────────────────┘
                     ▼
          ┌─────────────────────┐
          │  Pinecone (AWS)     │
          │  - meta3-hackathon  │
          │  - dreamwell-       │
          │    hackathon        │
          └─────────────────────┘
```

---

## 9. External Integrations

| Service          | Purpose                                    | Status        |
|------------------|--------------------------------------------|---------------|
| YouTube Data API | Scrape influencer channel metadata          | Configured    |
| Pinecone         | Vector similarity search for matching       | Active        |
| Ollama (llama3)  | Local LLM embeddings & inference            | Active        |
| Cohere           | Structured JSON output (Command-A)          | Active        |
| OpenAI           | Text embeddings (text-embedding-3-large)    | Active        |
| Google VertexAI  | Gemini Pro for recommendation generation    | Active        |
| Notion           | Brainstorming & journaling (Brand + Influencer agents) | Integrated |
| Airtable         | Structured data for both agent types        | Integrated    |
| Netlify          | Frontend hosting + serverless functions     | Deployed      |
| Google Cloud     | Project: dreamwell-hackathon                | Configured    |

---

## 10. File Map

```
GENESIS2026-HACKATHON/
├── engeneering-notebook/          # This notebook
│   ├── Application Infrastructure.canvas   # Obsidian canvas (source of this diagram)
│   ├── System Design Diagram.md            # ← YOU ARE HERE
│   ├── Dreamwell Hackathon.md              # Agent design notes
│   ├── Hackathon Theme - *.md              # Hackathon brief & requirements
│   ├── Reel-It-Back - Pitch Deck.pdf       # Pitch deck
│   └── Reel-It-Back-Mindmap.pdf            # Project mindmap
├── AuraFlow-Agent-LlamaIndex/     # Agent Variant A
│   ├── main.py                    # FastAPI app (Ollama + Pinecone + Cohere)
│   ├── model.py                   # Pinecone vector model wrapper
│   ├── agent/
│   │   ├── get_influencer_match.py   # Cohere-powered JSON structuring
│   │   └── pinecone_client.py        # Low-level Pinecone operations
│   └── ollama.ipynb               # Experimentation notebook
├── Auraflow-Agent-VertexAI/       # Agent Variant B
│   ├── main.py                    # FastAPI app (OpenAI embed + Gemini Pro)
│   └── influencer_service.py      # VertexAI query + retrieval service
├── src/                           # ICE.js frontend source
│   ├── routes.ts                  # Page routing config
│   ├── pages/                     # UI pages (index, about, features, analysis, etc.)
│   ├── components/                # Reusable React components
│   └── layouts/                   # BasicLayout wrapper
├── contracts/                     # Hardhat smart contracts
├── docs/
│   └── processor-evolution-analysis.md  # DarcOS/DARCY128 analysis
├── scripts/                       # Build/deploy scripts
├── netlify.toml                   # Netlify deployment config
└── package.json                   # Node dependencies (ICE.js, React 18, Hardhat)
```
