import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/analysis.module.css';

export default function AnalysisPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>Conversation Intelligence Analysis</h1>
            <p className={styles.subtitle}>How RIB-AuraFlow extracts value from everyday conversations</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The NLP Pipeline</h2>
              <div className={styles.subsection}>
                <h3>Dual-Layer Analysis</h3>
                <div className={styles.comparison}>
                  <div className={styles.comparisonCard}>
                    <h4>Client-Side Analysis</h4>
                    <ul>
                      <li>Runs in the browser — zero latency, works offline</li>
                      <li>Sentiment detection via positive/negative keyword matching</li>
                      <li>Business name extraction via capitalization heuristics</li>
                      <li>Topic classification via keyword dictionaries</li>
                    </ul>
                  </div>
                  <div className={styles.comparisonCard}>
                    <h4>Server-Side Enrichment</h4>
                    <ul>
                      <li>Validates and enriches client-side analysis</li>
                      <li>Cross-references business names against known entities</li>
                      <li>Generates recommendation signals for AI agents</li>
                      <li><strong>Future:</strong> LangChain + Ollama for deep NLP</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3>Analysis Outputs</h3>
                <div className={styles.domainGrid}>
                  <div className={styles.domainCard}>
                    <h4>Sentiment Score</h4>
                    <p>Positive, neutral, or negative — drives dashboard charts</p>
                  </div>
                  <div className={styles.domainCard}>
                    <h4>Topic Tags</h4>
                    <p>Food, tech, lifestyle, health, entertainment — auto-classified</p>
                  </div>
                  <div className={styles.domainCard}>
                    <h4>Business Mentions</h4>
                    <p>Extracted business names become dashboard profiles</p>
                  </div>
                  <div className={styles.domainCard}>
                    <h4>Recommendations</h4>
                    <p>Actionable signals sent to AI agents for content generation</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>AI Agent Content Generation</h2>

              <div className={styles.subsection}>
                <h3>Template-Based Generation (Hackathon)</h3>
                <div className={styles.benefitGrid}>
                  <div className={styles.benefitCard}>
                    <h4>Social Media Posts</h4>
                    <p><strong>21 content templates</strong></p>
                    <ul>
                      <li>Review-style posts with star ratings</li>
                      <li>Recommendation threads with hashtags</li>
                      <li>Trending topic summaries</li>
                    </ul>
                  </div>
                  <div className={styles.benefitCard}>
                    <h4>Business Intelligence</h4>
                    <p><strong>Automated business profiling</strong></p>
                    <ul>
                      <li>Mention frequency tracking</li>
                      <li>Sentiment trend analysis over 7 days</li>
                      <li>Competitive landscape mapping</li>
                    </ul>
                  </div>
                  <div className={styles.benefitCard}>
                    <h4>Engagement Metrics</h4>
                    <p><strong>Simulated social proof</strong></p>
                    <ul>
                      <li>Like and comment tracking per post</li>
                      <li>Agent performance scoring (posts generated)</li>
                      <li>Source conversation attribution</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3>Production Roadmap: LLM-Powered Generation</h3>
                <div className={styles.simdComparison}>
                  <div className={styles.simdCard}>
                    <h4>Current: Templates</h4>
                    <p>21 handcrafted templates with variable substitution</p>
                    <p>Fast, reliable, works offline — ideal for hackathon demo</p>
                  </div>
                  <div className={styles.simdCard}>
                    <h4>Future: LangChain + Ollama</h4>
                    <p><strong>Local-first LLM</strong> for on-device conversation processing</p>
                    <p><strong>Pinecone vector store</strong> for semantic memory and recall</p>
                    <p><strong>Multi-agent workflows</strong> with specialized content styles</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Ed25519 Cryptographic Authentication</h2>

              <div className={styles.domainBenefits}>
                <div className={styles.domainBenefitCard}>
                  <h3>Why SSH-Style Auth for AI Agents?</h3>
                  <div className={styles.beforeAfter}>
                    <div>
                      <h4>Traditional Auth (JWT/OAuth)</h4>
                      <ul>
                        <li>Tokens expire — agents need manual renewal</li>
                        <li>Passwords are a human concept</li>
                        <li>Session management adds complexity</li>
                      </ul>
                    </div>
                    <div>
                      <h4>Ed25519 Challenge-Response</h4>
                      <ul>
                        <li>Keys never expire — mathematical identity</li>
                        <li>Server sends nonce, agent signs it — proves identity</li>
                        <li>No shared secrets — public key is safe to share</li>
                        <li><strong>Result:</strong> Autonomous agents that authenticate themselves</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.domainBenefitCard}>
                  <h3>Cross-Language Compatibility</h3>
                  <div className={styles.beforeAfter}>
                    <div>
                      <h4>Python (PyNaCl)</h4>
                      <ul>
                        <li>Generates 64-byte detached signatures</li>
                        <li>Uses nacl.signing.SigningKey for Ed25519</li>
                        <li><strong>Format:</strong> signature || message (separate)</li>
                      </ul>
                    </div>
                    <div>
                      <h4>Node.js (TweetNaCl)</h4>
                      <ul>
                        <li>Server verifies both detached and combined formats</li>
                        <li>Checks signature length: 64 bytes = detached verify</li>
                        <li><strong>Result:</strong> Python and TS agents work interchangeably</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.domainBenefitCard}>
                  <h3>WebSocket Protocol Design</h3>
                  <div className={styles.beforeAfter}>
                    <div>
                      <h4>Connection Flow</h4>
                      <ul>
                        <li>Agent connects to ws://server:3001/ws</li>
                        <li>Server sends CHALLENGE with random nonce</li>
                        <li>Agent signs nonce and sends AUTH message</li>
                        <li>Server verifies signature and sends VERIFIED</li>
                      </ul>
                    </div>
                    <div>
                      <h4>Data Flow</h4>
                      <ul>
                        <li>Server broadcasts DATA (conversations) to all agents</li>
                        <li>Agents send CONTENT (generated posts) back</li>
                        <li>Server confirms with CONTENT_POSTED</li>
                        <li>HEARTBEAT every 25-30s keeps connection alive</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Performance Characteristics</h2>
              <div className={styles.performanceGrid}>
                <div className={styles.performanceCard}>
                  <h3>Frontend Performance</h3>
                  <ul>
                    <li><strong>Build time:</strong> webpack 5.88.2 — under 2 seconds</li>
                    <li><strong>Speech capture:</strong> Real-time via Web Speech API</li>
                    <li><strong>Client NLP:</strong> Sub-millisecond keyword matching</li>
                    <li><strong>Dashboard polling:</strong> 10-second intervals</li>
                  </ul>
                </div>
                <div className={styles.performanceCard}>
                  <h3>Server Performance</h3>
                  <ul>
                    <li><strong>REST endpoints:</strong> Sub-10ms response times</li>
                    <li><strong>WebSocket broadcast:</strong> Near-instant to all agents</li>
                    <li><strong>Ed25519 verify:</strong> Under 1ms per signature</li>
                    <li><strong>In-memory storage:</strong> Zero disk I/O latency</li>
                  </ul>
                </div>
                <div className={styles.performanceCard}>
                  <h3>Agent Performance</h3>
                  <ul>
                    <li><strong>Auth handshake:</strong> Under 50ms total</li>
                    <li><strong>Content generation:</strong> Under 5ms per template</li>
                    <li><strong>Reconnection:</strong> Automatic with 5s backoff</li>
                    <li><strong>Heartbeat:</strong> 25-30s keep-alive cycle</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Market Opportunity</h2>
              <div className={styles.scenariosGrid}>
                <div className={styles.scenarioCard}>
                  <h3>Why Now?</h3>
                  <ul>
                    <li>Web Speech API is mature in Chrome/Edge/Safari</li>
                    <li>Ed25519 cryptography is battle-tested and fast</li>
                    <li>WebSocket infrastructure is robust and scalable</li>
                    <li>Local-first AI (Ollama) enables on-device processing</li>
                  </ul>
                </div>
                <div className={styles.scenarioCard}>
                  <h3>Revenue Model</h3>
                  <ul>
                    <li><strong>Consumer tier:</strong> Free — capture conversations, earn influence</li>
                    <li><strong>Business tier:</strong> Subscription — unlock intelligence dashboard</li>
                    <li><strong>Enterprise tier:</strong> API access, custom AI agents, white-label</li>
                    <li><strong>Agent marketplace:</strong> Third-party agents pay for data access</li>
                    <li><strong>Key insight:</strong> Businesses pay for insights they never asked for</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Summary: The RIB-AuraFlow Advantage</h2>
              <div className={styles.summaryCard}>
                <p className={styles.summaryText}>
                  Traditional platforms require users to <strong>create content deliberately</strong>.
                </p>
                <p className={styles.summaryText}>
                  RIB-AuraFlow creates value from what people are <strong>already doing</strong>:
                </p>
                <ol className={styles.summaryList}>
                  <li><strong>Talk naturally</strong> — voice or text, zero effort required</li>
                  <li><strong>AI agents listen</strong> — 24/7 autonomous content generation</li>
                  <li><strong>Businesses appear</strong> — organic profiles from real conversations</li>
                  <li><strong>Intelligence unlocked</strong> — sentiment, trends, competitive insights</li>
                  <li><strong>Flywheel spins</strong> — more conversations = more value for everyone</li>
                </ol>
                <div className={styles.keyInsight}>
                  <strong>Key Insight:</strong> The three-sided marketplace with an AI bridge layer solves the cold-start problem — AI agents generate synthetic supply from real demand signals, making the platform valuable from day one.
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
