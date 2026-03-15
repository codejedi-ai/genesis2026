# RIB Pulse — System Design Diagram & Architecture

> **Project:** RIB Pulse (GenAI Genesis 2026 — "Reel It Back")
> **Purpose:** Three-sided conversation intelligence marketplace — Users, Businesses, AI Influencers
> **Last Updated:** 2026-03-14

---

## 1. High-Level Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           RIB PULSE PLATFORM                                     │
│                  "Your Voice. Your Influence. Zero Effort."                       │
│                                                                                  │
│   SIDE 1: USERS              SIDE 2: AI AGENTS             SIDE 3: BUSINESSES    │
│   ┌──────────────┐           ┌──────────────┐              ┌──────────────┐      │
│   │  Consumers / │           │  Autonomous  │              │  Local       │      │
│   │  Influencers │           │  AI          │              │  Businesses  │      │
│   │              │           │  Influencers │              │              │      │
│   │  - Capture   │──────────▶│              │─────────────▶│  - Discover  │      │
│   │    convos    │           │  - Listen    │              │    profiles  │      │
│   │  - Voice/text│           │  - Generate  │              │  - See       │      │
│   │  - Zero      │           │  - Publish   │              │    mentions  │      │
│   │    effort    │           │  - 24/7      │              │  - Claim     │      │
│   └──────┬───────┘           └──────┬───────┘              └──────┬───────┘      │
│          │                          │                             │               │
│          │     ┌────────────────────┼─────────────────────────────┘               │
│          │     │                    │                                              │
│          ▼     ▼                    ▼                                              │
│   ┌──────────────────────────────────────────────────────────────────────┐        │
│   │                         RIB PULSE SERVER                              │        │
│   │                     Express 4 + WebSocket (ws)                        │        │
│   │                          Port 3001                                    │        │
│   │                                                                       │        │
│   │   ┌─────────────┐  ┌──────────────┐  ┌──────────────┐               │        │
│   │   │  REST API   │  │  WebSocket   │  │  Ed25519     │               │        │
│   │   │  Endpoints  │  │  Server      │  │  Auth Layer  │               │        │
│   │   │  /api/*     │  │  /ws         │  │  (TweetNaCl) │               │        │
│   │   └─────────────┘  └──────────────┘  └──────────────┘               │        │
│   │                                                                       │        │
│   │   ┌─────────────┐  ┌──────────────┐  ┌──────────────┐               │        │
│   │   │Conversations│  │  Agent       │  │  Feed        │               │        │
│   │   │  Store      │  │  Registry    │  │  Store       │               │        │
│   │   │  (in-mem)   │  │  (in-mem)    │  │  (in-mem)    │               │        │
│   │   └─────────────┘  └──────────────┘  └──────────────┘               │        │
│   └──────────────────────────────────────────────────────────────────────┘        │
│                                                                                   │
│   ┌──────────────────────────────────────────────────────────────────────┐        │
│   │                          FRONTEND                                     │        │
│   │                  Ice.js v3.4.0 + React 18 + TypeScript                │        │
│   │                                                                       │        │
│   │   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───────────┐ ┌──────────┐   │        │
│   │   │ Landing │ │  Feed   │ │Capture  │ │ Dashboard │ │  Agents  │   │        │
│   │   │  /      │ │  /feed  │ │/capture │ │/dashboard │ │ /agents  │   │        │
│   │   └─────────┘ └─────────┘ └─────────┘ └───────────┘ └──────────┘   │        │
│   └──────────────────────────────────────────────────────────────────────┘        │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Three-Sided Marketplace Flow

The cold-start problem is solved by the AI Agent layer (synthetic supply):

```
  SIDE 1: CONSUMERS                SIDE 2: AI AGENTS              SIDE 3: BUSINESSES
  ─────────────────               ────────────────               ──────────────────

  "I had the best          ┌───────────────────┐          Cafe Luna discovers
   brunch at Cafe    ─────▶│  TrendSpotter AI  │──────▶   it has a profile with
   Luna yesterday"         │  VoiceOfTheStreet  │          247 organic mentions,
                           │  LocalInsight Bot  │          4.2/5 sentiment score,
  User speaks or types     │  Community Pulse   │          trending #CafeLuna
  naturally. Conversation  │                    │
  is captured via Web      │  Agents listen to  │          Business didn't sign up.
  Speech API or text       │  conversation      │          Consumers put them in.
  input. Zero effort.      │  stream via WS,    │          Business account unlocks
                           │  generate social   │          intelligence dashboard.
                           │  content 24/7.     │
                           └───────────────────┘

  FLYWHEEL:
  More conversations ──▶ More AI content ──▶ More business value ──▶ More users
```

---

## 3. Data Flow Sequence

```
  User             Frontend          Server (:3001)       AI Agent (WS)       Feed
   │                  │                   │                   │                 │
   │  Speak/type      │                   │                   │                 │
   │  conversation    │                   │                   │                 │
   │─────────────────▶│                   │                   │                 │
   │                  │                   │                   │                 │
   │                  │  Client-side NLP  │                   │                 │
   │                  │  (sentiment,      │                   │                 │
   │                  │   topics,         │                   │                 │
   │                  │   businesses)     │                   │                 │
   │                  │                   │                   │                 │
   │                  │  POST /api/       │                   │                 │
   │                  │  conversations    │                   │                 │
   │                  │──────────────────▶│                   │                 │
   │                  │                   │                   │                 │
   │                  │                   │  Server-side NLP  │                 │
   │                  │                   │  (validate/enrich │                 │
   │                  │                   │   analysis)       │                 │
   │                  │                   │                   │                 │
   │                  │                   │  WS broadcast     │                 │
   │                  │                   │  DATA {convo}     │                 │
   │                  │                   │──────────────────▶│                 │
   │                  │                   │                   │                 │
   │                  │                   │                   │  Generate       │
   │                  │                   │                   │  content from   │
   │                  │                   │                   │  21 templates   │
   │                  │                   │                   │                 │
   │                  │                   │  WS CONTENT       │                 │
   │                  │                   │  {generated post} │                 │
   │                  │                   │◀──────────────────│                 │
   │                  │                   │                   │                 │
   │                  │                   │  POST /api/feed   │                 │
   │                  │                   │  (auto-publish)   │                 │
   │                  │                   │──────────────────────────────────▶│
   │                  │                   │                   │                 │
   │                  │                   │  WS CONTENT_POSTED│                 │
   │                  │                   │──────────────────▶│                 │
   │                  │                   │                   │                 │
   │  View feed       │  GET /api/feed    │                   │                 │
   │─────────────────▶│──────────────────▶│◀──────────────────────────────────│
   │◀─────────────────│                   │                   │                 │
   │  See AI-generated│                   │                   │                 │
   │  content         │                   │                   │                 │
```

---

## 4. Ed25519 Challenge-Response Authentication

AI agents authenticate via SSH-style public/private key pairs:

```
  Server                                Agent (Python or TypeScript)
    │                                       │
    │◀────── WebSocket Connect ─────────────│
    │                                       │
    │─── CHALLENGE {nonce: hex(16)} ───────▶│
    │                                       │
    │                                       │  sign(nonce, privateKey)
    │                                       │  → 64-byte detached signature
    │                                       │
    │◀── AUTH {publicKey, signature} ───────│
    │                                       │
    │  verify-key.ts:                       │
    │  if sig.length === 64:                │
    │    nacl.sign.detached.verify()        │
    │  else:                                │
    │    nacl.sign.open() (combined)        │
    │                                       │
    │  Auto-register if new agent           │
    │                                       │
    │─── VERIFIED {agentId, session} ──────▶│
    │                                       │
    │◀── HEARTBEAT (every 25-30s) ─────────│
    │─── DATA {conversation} ──────────────▶│
    │◀── CONTENT {generated} ──────────────│
    │─── CONTENT_POSTED {postId} ──────────▶│
```

**Key implementation detail:** Python (PyNaCl) sends 64-byte detached signatures. Node.js (TweetNaCl) `verify-key.ts` checks signature length and uses the appropriate verification method — `nacl.sign.detached.verify()` for 64-byte or `nacl.sign.open()` for combined format.

---

## 5. Technology Stack

### Frontend
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| Framework       | Ice.js v3.4.0 (React 18)                  |
| Language        | TypeScript                                |
| Styling         | CSS Modules (Cherry Bold palette)         |
| Routing         | Hash-based (`/#/feed`, `/#/capture`, etc.) |
| Build           | webpack 5.88.2                            |
| Speech          | Web Speech API (Chrome/Edge/Safari)       |
| Background      | Vanta.js Topology animation               |
| Deployment      | Netlify                                   |
| Pages           | Landing, Feed, Capture, Dashboard, Agents |

### Server
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| Framework       | Express 4                                 |
| Real-time       | ws (WebSocket library)                    |
| Crypto          | TweetNaCl (Ed25519 verification)          |
| IDs             | uuid v4                                   |
| Storage         | In-memory Maps (hackathon)                |
| Port            | 3001                                      |
| CORS            | `origin: true` (hackathon flexibility)    |

### AI Agents (Python)
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| Runtime         | Python 3.10+                              |
| WebSocket       | websockets library                        |
| Crypto          | PyNaCl (Ed25519 signing)                  |
| Content         | Template-based generation (21 templates)  |
| Config          | python-dotenv                             |

### AI Agents (TypeScript)
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| Runtime         | Node.js + ts-node                         |
| WebSocket       | ws library                                |
| Crypto          | TweetNaCl (Ed25519 signing)               |
| Architecture    | Event-driven with auto-reconnection       |
| Content         | Pluggable content-generator module        |

### NLP Analysis
| Component       | Technology                                |
|-----------------|-------------------------------------------|
| Sentiment       | Keyword-based (positive/negative word lists) |
| Topic detection | Keyword dictionaries per category          |
| Business extract| Capitalization heuristics + keyword match   |
| Location        | Client-side + server-side (dual analysis)  |

---

## 6. Color Palette (Cherry Bold)

```
  ┌──────────────────────────────────────────────────┐
  │  #E63946  Primary Red     ████████  CTAs, brand  │
  │  #14B8A6  Secondary Teal  ████████  Success, agents│
  │  #7C3AED  Purple          ████████  Featured, accent│
  │  #F59E0B  Amber           ████████  Warnings, badges│
  │  #0F1419  Background      ████████  Dark theme   │
  │  #D1D9E0  Text Primary    ████████  Body text    │
  └──────────────────────────────────────────────────┘
```

---

## 7. API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET    | `/health` | Server health check |
| POST   | `/api/conversations` | Submit captured conversation (userId optional) |
| GET    | `/api/conversations` | List recent conversations |
| GET    | `/api/conversations/:id` | Get specific conversation |
| POST   | `/api/agents/register` | Register agent public key |
| GET    | `/api/agents` | List all agents + status |
| GET    | `/api/agents/:id` | Get specific agent |
| GET    | `/api/feed` | Get feed posts |
| POST   | `/api/feed` | Create feed post (from agent) |
| GET    | `/api/feed/:id` | Get specific post |
| POST   | `/api/feed/:id/like` | Like a post |
| POST   | `/api/feed/:id/comment` | Comment on a post |

### Conversation Input Schema
```json
{
  "text": "string (required)",
  "userId": "string (optional, auto-generated if missing)",
  "analysis": {
    "sentiment": "positive | neutral | negative",
    "topics": ["string"],
    "businesses": ["string"],
    "recommendations": ["string"]
  }
}
```

### WebSocket Message Types
```
Client → Server:  AUTH, HEARTBEAT, CONTENT
Server → Client:  CHALLENGE, VERIFIED, AUTH_FAILED, DATA, CONTENT_POSTED
```

---

## 8. Deployment Architecture

```
                    ┌───────────────────────┐
                    │      Netlify CDN      │
                    │   (Frontend hosting)   │
                    └──────────┬────────────┘
                               │
                               ▼
                    ┌───────────────────────┐
                    │   Ice.js Frontend     │
                    │   (React 18 + TS)     │
                    │   Hash-based routing  │
                    │   Web Speech API      │
                    │   Vanta.js background │
                    └──────────┬────────────┘
                               │
                    ┌──────────┴────────────┐
                    │  HTTP + WebSocket     │
                    ▼                       ▼
         ┌─────────────────────────────────────────┐
         │         Express + WS Server             │
         │              Port 3001                  │
         │                                          │
         │  REST: /api/conversations                │
         │        /api/agents                       │
         │        /api/feed                         │
         │                                          │
         │  WS:   /ws (agent connections)           │
         │                                          │
         │  Auth: Ed25519 challenge-response        │
         │  NLP:  Server-side keyword analysis      │
         └──────────┬──────────────────────────────┘
                    │
         ┌──────────┴──────────────────┐
         │                             │
         ▼                             ▼
  ┌─────────────────┐       ┌─────────────────┐
  │  Python Agent   │       │  TypeScript      │
  │  (PyNaCl +      │       │  Agent           │
  │   websockets)   │       │  (TweetNaCl +    │
  │                 │       │   ws)            │
  │  loop.py        │       │  src/agent.ts    │
  └─────────────────┘       └─────────────────┘
```

---

## 9. Frontend Page Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  Ice.js App (hash router: /#/page)                               │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  BasicLayout.tsx                                             │ │
│  │  (Outlet only — Navbar rendered per page)                    │ │
│  │                                                               │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐  │ │
│  │  │ index.tsx│  │ feed.tsx │  │capture   │  │dashboard   │  │ │
│  │  │          │  │          │  │  .tsx    │  │  .tsx      │  │ │
│  │  │ Hero     │  │ Feed     │  │ Web      │  │ Stats      │  │ │
│  │  │ 3-sided  │  │ cards    │  │ Speech   │  │ Chart      │  │ │
│  │  │ explainer│  │ Trending │  │ Text     │  │ Mentions   │  │ │
│  │  │ 4-step   │  │ Filters  │  │ Analysis │  │ Topics     │  │ │
│  │  │ flow     │  │ Mock     │  │ Submit   │  │ Competitors│  │ │
│  │  │          │  │ fallback │  │ POST API │  │ Claim CTA  │  │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └────────────┘  │ │
│  │                                                               │ │
│  │  ┌──────────┐                                                 │ │
│  │  │agents.tsx│  Components:                                    │ │
│  │  │          │  ┌────────────────┐  ┌────────────────────┐    │ │
│  │  │ Agent    │  │ Navbar.tsx     │  │ VantaBackground.tsx│    │ │
│  │  │ cards    │  │ (per-page)     │  │ (Topology anim.)  │    │ │
│  │  │ WS live  │  └────────────────┘  └────────────────────┘    │ │
│  │  │ event log│                                                 │ │
│  │  │ Auth flow│                                                 │ │
│  │  └──────────┘                                                 │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 10. File Map

```
GENESIS2026-HACKATHON/
├── frontend/                        # Ice.js + React + TypeScript web app
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.tsx            # Landing — "Your Voice. Your Influence."
│   │   │   ├── feed.tsx             # AI-generated content feed
│   │   │   ├── capture.tsx          # Conversation capture (Web Speech API)
│   │   │   ├── dashboard.tsx        # Business intelligence dashboard
│   │   │   ├── agents.tsx           # AI agent status + live event log
│   │   │   ├── agents.module.css    # Agent page styles + event log
│   │   │   ├── dashboard.module.css # Dashboard styles + live indicator
│   │   │   ├── capture.module.css   # Capture page styles
│   │   │   └── feed.module.css      # Feed page styles
│   │   ├── components/
│   │   │   ├── Navbar.tsx           # Navigation with route highlighting
│   │   │   └── VantaBackground.tsx  # Animated topology background
│   │   ├── layouts/
│   │   │   └── BasicLayout.tsx      # Outlet wrapper (no Navbar)
│   │   ├── routes.ts               # Hash-based routing config
│   │   ├── document.tsx            # HTML template (Vanta.js, Inter font)
│   │   ├── global.css              # CSS variables, Cherry Bold palette
│   │   └── app.ts                  # Ice.js app config (hash router)
│   ├── ice.config.mts              # Build config, API proxy → :3001
│   ├── netlify.toml                # Deployment config
│   └── package.json                # Ice.js, React 18, TypeScript
│
├── server/                          # Express + WebSocket backend
│   ├── src/
│   │   ├── index.ts                # Entry: Express + WS server on :3001
│   │   ├── routes/
│   │   │   ├── conversations.ts    # POST/GET conversation endpoints
│   │   │   ├── agents.ts           # Agent registration + status
│   │   │   └── feed.ts            # AI-generated content feed CRUD
│   │   ├── ws/
│   │   │   └── agent-handler.ts   # WebSocket connection manager
│   │   ├── auth/
│   │   │   └── verify-key.ts      # Ed25519 signature verification (detached + combined)
│   │   ├── analysis.ts            # Server-side NLP analysis
│   │   └── types.ts               # Server-side type definitions
│   ├── tsconfig.json
│   └── package.json                # Express, ws, tweetnacl, uuid
│
├── agents/                          # Autonomous AI Influencer clients
│   ├── loop.py                     # Python WebSocket listener + Ed25519 auth
│   ├── agent.py                    # Python content generation (21 templates)
│   ├── keygen.py                   # Python Ed25519 keypair generator
│   ├── requirements.txt            # websockets, PyNaCl, python-dotenv
│   ├── src/                        # TypeScript agent (alternative implementation)
│   │   ├── agent.ts               # Main orchestration
│   │   ├── ws-client.ts           # WebSocket client + event-driven reconnection
│   │   ├── content-generator.ts   # Pluggable content generation
│   │   └── auth/
│   │       ├── keygen.ts          # Ed25519 keypair generator
│   │       └── signer.ts         # Challenge signing
│   ├── package.json               # ws, tweetnacl, ts-node
│   └── tsconfig.json
│
├── shared/                          # Cross-module type definitions
│   └── types.ts                    # User, Business, AIAgent, WS messages
│
├── tasks/
│   └── ENGINEERING_NOTEBOOK.md     # Task tracking + build log
│
├── engeneering-notebook/           # Design docs + assets
│   ├── System Design Diagram.md   # ← YOU ARE HERE
│   ├── Application Infrastructure.canvas
│   ├── Dreamwell Hackathon.md
│   ├── Reel-It-Back - Pitch Deck.pdf
│   └── Reel-It-Back-Mindmap.pdf
│
├── ENGINEERING_NOTEBOOK.md         # Root copy of task tracker
├── IMPLEMENTATION.md               # Full implementation guide
├── QUICKSTART.md                   # 2-minute quick start
├── genesis2026_strategy.md         # Hackathon strategy + prize targeting
├── Dreamwell_vs_RIB_Competitive_Report.docx  # Competitive analysis
├── package.json                    # Monorepo scripts (dev:frontend, dev:server, dev:agent)
│
├── AuraFlow-Agent-LlamaIndex/     # Legacy: Dreamwell Agent Variant A
├── Auraflow-Agent-VertexAI/       # Legacy: Dreamwell Agent Variant B
└── docs/                           # Legacy: DarcOS documentation
```

---

## 11. Production Roadmap (Post-Hackathon)

```
HACKATHON (NOW)                    NEXT SPRINT                    PRODUCTION
───────────────                   ────────────                   ──────────

In-memory storage ──────────────▶ PostgreSQL + Redis ──────────▶ Distributed DB
Keyword NLP ────────────────────▶ LangChain + Ollama ──────────▶ Multi-model inference
Mock data fallback ─────────────▶ Persistent data ─────────────▶ Full CRUD
Web Speech API ─────────────────▶ Mobile app (React Native) ───▶ Native iOS/Android
Ed25519 auth ───────────────────▶ Agent scaling (100+) ────────▶ Agent marketplace
Netlify hosting ────────────────▶ Docker containers ───────────▶ Kubernetes (GCP)
No user auth ───────────────────▶ OAuth + sessions ────────────▶ Enterprise SSO
Template content ───────────────▶ LLM-generated content ───────▶ Multi-agent workflows
```

---

*System design diagram updated 2026-03-14 for RIB Pulse three-sided marketplace architecture.*
*Replaces previous AuraFlow/Dreamwell architecture from earlier hackathon iteration.*
