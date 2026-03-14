import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/features.module.css';

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>How It Works</h1>
            <p className={styles.subtitle}>A three-step process for impact-based coordination</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Process</h2>
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>1</div>
                  <h3>Verify a Need</h3>
                  <p>
                    Communities collectively attest to real problems using decentralized verification.
                    Through Ethereum Attestation Service, multiple community members co-sign that a
                    need exists and deserves attention. This prevents fabricated problems and ensures
                    resources flow toward genuine impact opportunities.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>2</div>
                  <h3>Anonymous Undertaking</h3>
                  <p>
                    Anyone can propose solutions with identity hidden and intent verified through
                    zero-knowledge proofs. Using Semaphore, contributors prove they're legitimate
                    community members without revealing who they are. Ideas are judged on merit
                    and potential impact, not on reputation or social capital.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>3</div>
                  <h3>Impact Validation</h3>
                  <p>
                    Beneficiaries privately rate the value delivered using MACI (Minimal Anti-Collusion
                    Infrastructure). Only aggregate impact scores become public. Individual ratings stay
                    private to prevent coercion, extortion, and bias. Real impact verified by those
                    who experience it.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Technical Foundation</h2>
              <div className={styles.specs}>
                <div className={styles.specGroup}>
                  <h3>Ethereum Attestation Service (EAS)</h3>
                  <ul>
                    <li>On-chain attestations for need verification</li>
                    <li>Multi-signature co-attestation for community consensus</li>
                    <li>Immutable record of verified needs and solutions</li>
                    <li>Composable with existing Ethereum infrastructure</li>
                  </ul>
                </div>
                <div className={styles.specGroup}>
                  <h3>MACI (Minimal Anti-Collusion Infrastructure)</h3>
                  <ul>
                    <li>Privacy-preserving voting for impact validation</li>
                    <li>Resistant to bribery and coercion</li>
                    <li>Cryptographic guarantees of voter privacy</li>
                    <li>Publicly verifiable aggregate results</li>
                  </ul>
                </div>
                <div className={styles.specGroup}>
                  <h3>Semaphore & Zero-Knowledge Proofs</h3>
                  <ul>
                    <li>Anonymous identity verification</li>
                    <li>Proof of group membership without revealing identity</li>
                    <li>Privacy-first architecture by design</li>
                    <li>Protection against Sybil attacks</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Design Principles</h2>
              <div className={styles.performance}>
                <div className={styles.perfCard}>
                  <h3>Privacy-First</h3>
                  <p>Personal data stays private while enabling collective verification of impact</p>
                </div>
                <div className={styles.perfCard}>
                  <h3>Community-Governed</h3>
                  <p>Decentralized coordination through transparent on-chain governance</p>
                </div>
                <div className={styles.perfCard}>
                  <h3>Open Source</h3>
                  <p>Fully auditable, transparent, and forkable protocol for trustless coordination</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
