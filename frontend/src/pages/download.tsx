import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/download.module.css';

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>Join the Movement</h1>
            <p className={styles.subtitle}>Build the impact economy with us</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>For Developers</h2>
              <div className={styles.releaseCard}>
                <div className={styles.releaseInfo}>
                  <h3>Build with Us</h3>
                  <p className={styles.releaseDate}>Open Source Protocol Development</p>
                  <p className={styles.releaseDesc}>
                    Contribute to the Impact Commons protocol. We're building decentralized
                    infrastructure for impact verification, anonymous coordination, and
                    privacy-preserving validation. Built on Ethereum, EAS, MACI, and Semaphore.
                    All code is open source and welcomes contributors.
                  </p>
                </div>
                <div className={styles.downloadActions}>
                  <a href="https://github.com/impact-commons" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>View on GitHub</a>
                  <a href="#tech" className={styles.releaseNotes}>Technical Docs</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>For Communities</h2>
              <div className={styles.releaseCard}>
                <div className={styles.releaseInfo}>
                  <h3>Join a Pilot Program</h3>
                  <p className={styles.releaseDate}>Early Adopter Communities</p>
                  <p className={styles.releaseDesc}>
                    Are you part of a cooperative, DAO, eco-village, or regenerative community?
                    We're looking for pilot communities to experiment with impact-based coordination.
                    Help us test and refine the protocol while building new ways of recognizing
                    and rewarding value creation in your community.
                  </p>
                </div>
                <div className={styles.downloadActions}>
                  <a href="#contact" className={styles.downloadBtn}>Apply to Join</a>
                  <a href="#about" className={styles.releaseNotes}>Learn More</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>For Researchers</h2>
              <div className={styles.releaseCard}>
                <div className={styles.releaseInfo}>
                  <h3>Research Collaboration</h3>
                  <p className={styles.releaseDate}>Post-Capitalist Economics & Web3</p>
                  <p className={styles.releaseDesc}>
                    Academics and researchers studying alternative economic models, commons-based
                    peer production, regenerative economics, or cryptographic coordination mechanisms:
                    collaborate with us to study and document the impact economy in practice.
                  </p>
                </div>
                <div className={styles.downloadActions}>
                  <a href="#contact" className={styles.downloadBtn}>Get in Touch</a>
                  <a href="/documentation" className={styles.releaseNotes}>Read Whitepaper</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Who We're Looking For</h2>
              <div className={styles.requirements}>
                <div className={styles.reqCard}>
                  <h3>Ethical Technologists</h3>
                  <ul>
                    <li>Web3 developers interested in social impact</li>
                    <li>Privacy & cryptography enthusiasts</li>
                    <li>Open-source contributors</li>
                    <li>Protocol designers & researchers</li>
                  </ul>
                </div>
                <div className={styles.reqCard}>
                  <h3>Regenerative Communities</h3>
                  <ul>
                    <li>Worker cooperatives</li>
                    <li>Decentralized autonomous organizations (DAOs)</li>
                    <li>Eco-villages & intentional communities</li>
                    <li>Mutual aid networks</li>
                  </ul>
                </div>
                <div className={styles.reqCard}>
                  <h3>Post-Capitalist Thinkers</h3>
                  <ul>
                    <li>Alternative economics researchers</li>
                    <li>Commons-based production advocates</li>
                    <li>Social impact measurement experts</li>
                    <li>Community organizers</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Ways to Contribute</h2>
              <div className={styles.installMethods}>
                <div className={styles.methodCard}>
                  <h3>Protocol Development</h3>
                  <p>Build core infrastructure for impact verification</p>
                  <div className={styles.methodSteps}>
                    <span>1. Fork repository</span>
                    <span>2. Develop features</span>
                    <span>3. Submit pull request</span>
                  </div>
                  <a href="https://github.com/impact-commons" target="_blank" rel="noopener noreferrer" className={styles.methodBtn}>Start Contributing</a>
                </div>
                <div className={styles.methodCard}>
                  <h3>Community Testing</h3>
                  <p>Pilot the protocol in real communities</p>
                  <div className={styles.methodSteps}>
                    <span>1. Apply for pilot</span>
                    <span>2. Set up community</span>
                    <span>3. Provide feedback</span>
                  </div>
                  <a href="#contact" className={styles.methodBtn}>Apply Now</a>
                </div>
                <div className={styles.methodCard}>
                  <h3>Research & Documentation</h3>
                  <p>Study and document the impact economy</p>
                  <div className={styles.methodSteps}>
                    <span>1. Review protocol</span>
                    <span>2. Conduct research</span>
                    <span>3. Share findings</span>
                  </div>
                  <a href="#contact" className={styles.methodBtn}>Collaborate</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Stay Connected</h2>
              <div className={styles.help}>
                <div className={styles.helpCard}>
                  <h3>Newsletter</h3>
                  <p>Subscribe for updates on protocol development and the impact economy</p>
                  <a href="#newsletter" className={styles.helpLink}>Subscribe →</a>
                </div>
                <div className={styles.helpCard}>
                  <h3>Discussion Forum</h3>
                  <p>Join conversations about impact-based coordination</p>
                  <a href="https://github.com/impact-commons/discussions" target="_blank" rel="noopener noreferrer" className={styles.helpLink}>Join Forum →</a>
                </div>
                <div className={styles.helpCard}>
                  <h3>Community Chat</h3>
                  <p>Connect with other contributors and community members</p>
                  <a href="#contact" className={styles.helpLink}>Join Chat →</a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
