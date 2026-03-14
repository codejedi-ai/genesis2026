import logo from '@/assets/logo.png';
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
          <img src={logo} alt="Impact Commons logo" className={styles.logo} />
          <h1 className={styles.title}>Impact Commons</h1>
          <p className={styles.acronym}>Labor valued by impact. Not by money.</p>
          <p className={styles.tagline}>A new economic layer where solving real human and ecological needs—not maximizing profit—drives recognition, access, and influence.</p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#about">Join the Movement</a>
            <a className={styles.secondaryCta} href="#how-it-works">Explore the Protocol</a>
          </div>
        </header>

        <main className={styles.main}>
          <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <p className={styles.sectionLead}>
              <strong>Today, markets decide what matters.</strong> If you can't pay, your problem is invisible.
              Just because a problem is profitable doesn't mean it's more worth solving. True value lies in
              impact—not income.
            </p>
            <p className={styles.sectionLead}>
              Our current economic system values labor based on profit potential, not social impact. This leaves
              critical human and ecological needs—clean water access, mental health support, ecosystem
              restoration, care work—systematically undervalued and underfunded. The most profitable problems
              aren't necessarily the most urgent ones humanity faces.
            </p>
            <p className={styles.sectionLead}>
              <strong>Impact Commons</strong> is a Web3-native protocol that replaces profit-driven incentives with
              verified social impact as the basis for recognizing labor and allocating resources. We're building
              an economic layer where solving real problems—not maximizing shareholder returns—drives influence,
              access, and recognition.
            </p>
          </section>

          <section id="how-it-works" className={styles.section}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>1. Verify a Need</h3>
                <p>
                  Communities co-attest real problems using decentralized verification. For example:
                  "Clean water access in Village X" or "Mental health support for community Y."
                  Needs are validated through collective attestation, not market demand.
                </p>
              </div>
              <div className={styles.card}>
                <h3>2. Anonymous Undertaking</h3>
                <p>
                  Anyone can propose solutions with their identity hidden and intent verified.
                  This prevents bias and ensures that ideas are judged on merit and potential impact,
                  not on who proposes them.
                </p>
              </div>
              <div className={styles.card}>
                <h3>3. Impact Validation</h3>
                <p>
                  Beneficiaries privately rate the actual value delivered. Only the average impact score
                  is made public. No extortion. No bias. Real impact verified by those who experience it.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Privacy-First Design</h3>
                <p>
                  Built with zero-knowledge proofs and privacy-preserving cryptography. Personal data
                  stays private while enabling collective verification of impact.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Community Governance</h3>
                <p>
                  Decentralized and community-governed through transparent on-chain coordination.
                  No central authority decides what matters—communities do.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Open Source</h3>
                <p>
                  Fully transparent, auditable, and forkable. Built on Ethereum Attestation Service,
                  MACI, and Semaphore for verifiable trust without centralized control.
                </p>
              </div>
            </div>
          </section>

          <section id="tech-stack" className={styles.section}>
            <h2 className={styles.sectionTitle}>Built on Web3</h2>
            <div className={styles.downloadGrid}>
              <div className={styles.downloadCard}>
                <h3>Ethereum Attestation Service</h3>
                <p>Verifiable on-chain attestations for needs, solutions, and impact validation</p>
              </div>
              <div className={styles.downloadCard}>
                <h3>MACI (Minimal Anti-Collusion Infrastructure)</h3>
                <p>Privacy-preserving voting and coordination resistant to bribery and coercion</p>
              </div>
              <div className={styles.downloadCard}>
                <h3>Semaphore & Zero-Knowledge Proofs</h3>
                <p>Anonymous identity verification and private impact ratings without exposing personal data</p>
              </div>
            </div>
          </section>

          <section id="philosophy" className={styles.section}>
            <h2 className={styles.sectionTitle}>Core Philosophy</h2>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                <p>"Philanthropy isn't charity—it's investment in shared resilience. When we value labor by its impact rather than its profit potential, we build economies that serve human and ecological needs."</p>
              </div>
              <div className={styles.testimonial}>
                <p>"Non-monetary returns create lasting value. Recognition, access, and influence earned through verified impact are more meaningful than wealth extracted from scarcity."</p>
              </div>
              <div className={styles.testimonial}>
                <p>"Labor is care. The work that sustains communities, heals ecosystems, and supports human flourishing deserves recognition—not because it's profitable, but because it matters."</p>
              </div>
            </div>
          </section>

          <section id="join" className={styles.section}>
            <h2 className={styles.sectionTitle}>Join the Movement</h2>
            <div className={styles.resourceLinks}>
              <div className={styles.resourceCard}>
                <h3>Build with Us</h3>
                <p>Developers: Contribute to the open-source protocol and help build the impact economy</p>
                <a href="https://github.com/impact-commons" target="_blank" rel="noopener noreferrer" className={styles.resourceBtn}>
                  View on GitHub
                </a>
              </div>
              <div className={styles.resourceCard}>
                <h3>Join a Pilot Community</h3>
                <p>For cooperatives, DAOs, and regenerative communities ready to experiment with impact-based coordination</p>
                <a href="#contact" className={styles.resourceBtn}>
                  Get Involved
                </a>
              </div>
              <div className={styles.resourceCard}>
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter for updates on the impact economy and protocol development</p>
                <a href="#newsletter" className={styles.resourceBtn}>
                  Subscribe
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}