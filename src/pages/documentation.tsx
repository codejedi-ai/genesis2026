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
            <p className={styles.subtitle}>Learn how to use and develop with DarcOS</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Getting Started</h2>
              <div className={styles.docGrid}>
                <div className={styles.docCard}>
                  <h3>Quick Start Guide</h3>
                  <p>Get up and running with DarcOS in minutes</p>
                  <a href="#" className={styles.docLink}>Read Guide →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Installation</h3>
                  <p>Step-by-step installation instructions</p>
                  <a href="#" className={styles.docLink}>Install Now →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>First Program</h3>
                  <p>Write your first WLP4P program</p>
                  <a href="#" className={styles.docLink}>Start Coding →</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>WLP4P Language Reference</h2>
              <div className={styles.docGrid}>
                <div className={styles.docCard}>
                  <h3>Language Basics</h3>
                  <p>Core language features and syntax</p>
                  <a href="#" className={styles.docLink}>Learn Syntax →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Memory Management</h3>
                  <p>Understanding pointers and memory semantics</p>
                  <a href="#" className={styles.docLink}>Memory Guide →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Procedures</h3>
                  <p>Function definitions and calling conventions</p>
                  <a href="#" className={styles.docLink}>Procedures →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Standard Library</h3>
                  <p>Built-in functions and utilities</p>
                  <a href="#" className={styles.docLink}>API Reference →</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>System Programming</h2>
              <div className={styles.docGrid}>
                <div className={styles.docCard}>
                  <h3>Kernel Development</h3>
                  <p>Building kernel modules and drivers</p>
                  <a href="#" className={styles.docLink}>Kernel Guide →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Device Drivers</h3>
                  <p>Writing hardware abstraction layers</p>
                  <a href="#" className={styles.docLink}>Driver Dev →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>System Calls</h3>
                  <p>Understanding the system call interface</p>
                  <a href="#" className={styles.docLink}>Syscalls →</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Advanced Topics</h2>
              <div className={styles.docGrid}>
                <div className={styles.docCard}>
                  <h3>Formal Verification</h3>
                  <p>Proving correctness of DarcOS components</p>
                  <a href="#" className={styles.docLink}>Verification →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Porting Guide</h3>
                  <p>Adapting DarcOS to new hardware platforms</p>
                  <a href="#" className={styles.docLink}>Porting →</a>
                </div>
                <div className={styles.docCard}>
                  <h3>Performance Tuning</h3>
                  <p>Optimizing DarcOS for specific workloads</p>
                  <a href="#" className={styles.docLink}>Optimization →</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Community Resources</h2>
              <div className={styles.community}>
                <div className={styles.communityCard}>
                  <h3>GitHub Repository</h3>
                  <p>Source code, issues, and contributions</p>
                  <a href="https://github.com/darcos" className={styles.communityLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                  </a>
                </div>
                <div className={styles.communityCard}>
                  <h3>Discussion Forum</h3>
                  <p>Community discussions and support</p>
                  <a href="#" className={styles.communityLink}>Join Discussion →</a>
                </div>
                <div className={styles.communityCard}>
                  <h3>Contributing Guide</h3>
                  <p>How to contribute to DarcOS development</p>
                  <a href="#" className={styles.communityLink}>Contribute →</a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
