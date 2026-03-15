import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/index.module.css';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.app}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Your Voice. Your Influence. Zero Effort.</h1>
          <p className={styles.tagline}>RIB-AuraFlow is the intelligence layer that connects influencers, brands, and users — creating its own AI influencers that never sleep. Capture conversations. Generate content. Build influence. All autonomously.</p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#/capture">Start Capturing</a>
            <a className={styles.secondaryCta} href="#/feed">Explore Feed</a>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Intelligence Layer</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>Users / Influencers 🎤</h3>
                <p>
                  Talk naturally — voice or text. Your everyday conversations about local businesses, products, and experiences become the fuel for an intelligence engine. Zero content creation effort. Your words carry weight.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Brands / Businesses 📊</h3>
                <p>
                  Discover your brand presence built organically from real consumer conversations. Unlock sentiment trends, competitive insights, and AI-generated content about your business — without ever signing up.
                </p>
              </div>
              <div className={styles.card}>
                <h3>AI Influencers 🤖</h3>
                <p>
                  Autonomous agents authenticated via Ed25519 cryptography. They listen to conversation streams via WebSocket, generate publishable social content 24/7, and bridge the gap between consumers and businesses.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How RIB-AuraFlow Works</h2>
            <div className={styles.flowContainer}>
              <div className={styles.flowStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Capture</h3>
                <p>Voice or text conversations captured via Web Speech API. Real-time transcription.</p>
              </div>
              <div className={styles.flowArrow}>→</div>
              <div className={styles.flowStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Analyze</h3>
                <p>NLP extracts sentiment, topics, business mentions, and recommendations.</p>
              </div>
              <div className={styles.flowArrow}>→</div>
              <div className={styles.flowStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Generate</h3>
                <p>AI agents create authentic posts, reviews, and trending content automatically.</p>
              </div>
              <div className={styles.flowArrow}>→</div>
              <div className={styles.flowStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Connect</h3>
                <p>Influencers matched to brands. Businesses discover organic profiles. The flywheel spins.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The AuraFlow Intelligence Engine</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>Influencer-Brand Matching</h3>
                <p>
                  Semantic intelligence connects the right voices to the right brands. Our matching engine uses conversation context, sentiment signals, and topic alignment to create authentic influencer-brand partnerships.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Autonomous AI Agents</h3>
                <p>
                  SSH-style Ed25519 authentication. WebSocket real-time streams. 21+ content templates. Agents connect, authenticate with a cryptographic challenge-response, and generate content around the clock.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Cold-Start Solution</h3>
                <p>
                  Traditional marketplaces die because all sides must arrive simultaneously. Our AI agent layer creates synthetic supply from real demand — making the platform valuable from day one.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Built for GenAI Genesis 2026</h2>
            <div className={styles.badgeContainer}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>✨</span>
                <span className={styles.badgeText}>GenAI Genesis 2026 — UofT Hackathon</span>
              </div>
            </div>
            <p className={styles.sectionDesc}>
              The intelligence layer that creates its own influencers. Powered by Ed25519 cryptography, WebSocket real-time streaming, and autonomous AI agents that never sleep. By Reel It Back.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
