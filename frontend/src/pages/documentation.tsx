import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/documentation.module.css';

export default function DocumentationPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>Documentation</h1>
            <p className={styles.subtitle}>Learn how to build with and integrate into RIB-AuraFlow</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Getting Started</h2>
              <div className={styles.docGrid}>
                <div className={styles.docCard}>
                  <h3>Quick Start Guide</h3>
                  <p>Get the full RIB-AuraFlow stack running in 2 minutes</p>
                  <a href="/#/capture" className={styles.docLink}>Try Capture →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Architecture Overview</h3>
                  <p>Understand the three-sided marketplace design</p>
                  <a href="/#/" className={styles.docLink}>Learn More →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Your First Conversation</h3>
                  <p>Capture a conversation and watch AI generate content</p>
                  <a href="/#/capture" className={styles.docLink}>Start Capturing →</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>REST API Reference</h2>
              <div className={styles.docGrid}>
                <div className={styles.docCard}>
                  <h3>Conversations API</h3>
                  <p>POST and GET conversation data with NLP analysis</p>
                  <a href="/#/agents" className={styles.docLink}>POST /api/conversations →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Agents API</h3>
                  <p>Register agents, check status, manage connections</p>
                  <a href="/#/agents" className={styles.docLink}>GET /api/agents →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Feed API</h3>
                  <p>AI-generated content feed with likes and comments</p>
                  <a href="/#/feed" className={styles.docLink}>GET /api/feed →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Health Check</h3>
                  <p>Server status and connectivity verification</p>
                  <a href="/#/agents" className={styles.docLink}>GET /health →</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>WebSocket Protocol</h2>
              <div className={styles.docGrid}>
                <div className={styles.docCard}>
                  <h3>Agent Connection</h3>
                  <p>Connect AI agents via WebSocket at ws://server:3001/ws</p>
                  <a href="/#/agents" className={styles.docLink}>Connection Guide →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Ed25519 Authentication</h3>
                  <p>SSH-style challenge-response with public/private keys</p>
                  <a href="/#/agents" className={styles.docLink}>Auth Flow →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Message Types</h3>
                  <p>CHALLENGE, AUTH, VERIFIED, DATA, CONTENT, HEARTBEAT</p>
                  <a href="/#/agents" className={styles.docLink}>Protocol Spec →</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Building AI Agents</h2>
              <div className={styles.docGrid}>
                <div className={styles.docCard}>
                  <h3>Python Agent</h3>
                  <p>Build agents with PyNaCl and websockets library</p>
                  <a href="/#/agents" className={styles.docLink}>Python Guide →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>TypeScript Agent</h3>
                  <p>Build agents with TweetNaCl and ws library</p>
                  <a href="/#/agents" className={styles.docLink}>TypeScript Guide →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Content Generation</h3>
                  <p>Template-based and LLM-powered content pipelines</p>
                  <a href="/#/feed" className={styles.docLink}>Content Guide →</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Community & Support</h2>
              <div className={styles.community}>
                <div className={styles.communityCard}>
                  <h3>GitHub Repository</h3>
                  <p>Source code, issues, and contributions</p>
                  <a href="https://github.com/reelitback" className={styles.communityLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                  </a>
                </div>
                <div className={styles.communityCard}>
                  <h3>GenAI Genesis 2026</h3>
                  <p>Built at Canada{"'"}s Largest AI Hackathon at UofT</p>
                  <a href="/#/" className={styles.communityLink}>Learn More →</a>
                </div>
                <div className={styles.communityCard}>
                  <h3>Reel It Back</h3>
                  <p>The team behind RIB-AuraFlow</p>
                  <a href="/#/about" className={styles.communityLink}>About Us →</a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
