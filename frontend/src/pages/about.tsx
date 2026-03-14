import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/about.module.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>Philosophy</h1>
            <p className={styles.subtitle}>Building an economy that values impact over profit</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Core Principle</h2>
              <p className={styles.sectionBody}>
                Just because a problem is profitable doesn't mean it's more worth solving. True value
                lies in impact—not income. Impact Commons reimagines economic coordination around
                this fundamental truth: labor should be valued by its verified social impact, not by
                its ability to generate profit for shareholders.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Philanthropy as Investment</h2>
              <p className={styles.sectionBody}>
                Philanthropy isn't charity—it's investment in shared resilience. When we support
                work that addresses real human and ecological needs, we're not giving handouts;
                we're building the foundation for collective thriving. Impact Commons creates
                infrastructure for recognizing and coordinating this kind of value creation.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Core Values</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <h3>Labor is Care</h3>
                  <p>
                    The work that sustains communities, heals ecosystems, and supports human
                    flourishing deserves recognition—not because it's profitable, but because
                    it matters. Care work, community organizing, ecological restoration: these
                    are forms of labor that create real value.
                  </p>
                </div>
                <div className={styles.card}>
                  <h3>Non-Monetary Returns</h3>
                  <p>
                    Recognition, access, and influence earned through verified impact are more
                    meaningful than wealth extracted from scarcity. Reputation becomes access.
                    Demonstrated impact creates opportunities. Value flows to those who create it.
                  </p>
                </div>
                <div className={styles.card}>
                  <h3>Privacy & Dignity</h3>
                  <p>
                    Impact verification must never compromise human dignity. Anonymous undertaking
                    and private ratings protect both contributors and beneficiaries from coercion,
                    bias, and exploitation.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Building a New Economic Layer</h2>
              <p className={styles.sectionBody}>
                Impact Commons isn't trying to replace markets or governments—it's building a
                complementary economic layer that enables coordination around shared needs without
                requiring profit extraction. A space where communities can recognize and reward
                impact directly, where solving urgent problems is valued regardless of market
                demand, and where labor creates lasting value beyond financial returns.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
