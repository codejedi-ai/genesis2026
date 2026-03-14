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
            <h1 className={styles.title}>Processor Evolution Analysis</h1>
            <p className={styles.subtitle}>Understanding the theoretical benefits of 128-bit architecture</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The 32-bit to 64-bit Revolution</h2>
              <div className={styles.subsection}>
                <h3>Memory Addressing Capabilities</h3>
                <div className={styles.comparison}>
                  <div className={styles.comparisonCard}>
                    <h4>32-bit Limitation</h4>
                    <ul>
                      <li>Maximum addressable memory: 4 GB (2³² bytes)</li>
                      <li>By early 2000s, this became a severe bottleneck</li>
                      <li>Servers and workstations needed more RAM</li>
                    </ul>
                  </div>
                  <div className={styles.comparisonCard}>
                    <h4>64-bit Breakthrough</h4>
                    <ul>
                      <li>Theoretical maximum: 16 Exabytes (2⁶⁴ bytes)</li>
                      <li>Practical implementations: 256 TB to 4 PB</li>
                      <li><strong>Impact:</strong> Enabled modern big data, databases, scientific computing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3>Application Domains Transformed</h3>
                <div className={styles.domainGrid}>
                  <div className={styles.domainCard}>
                    <h4>Database Systems</h4>
                    <p>Could cache entire indices in memory</p>
                  </div>
                  <div className={styles.domainCard}>
                    <h4>Video Editing</h4>
                    <p>Real-time 4K processing became feasible</p>
                  </div>
                  <div className={styles.domainCard}>
                    <h4>Scientific Computing</h4>
                    <p>Molecular dynamics, climate modeling</p>
                  </div>
                  <div className={styles.domainCard}>
                    <h4>Virtual Machines</h4>
                    <p>Run multiple OS instances with adequate RAM</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Hypothetical 128-bit Revolution</h2>
              
              <div className={styles.subsection}>
                <h3>Native 128-bit Data Types</h3>
                <div className={styles.benefitGrid}>
                  <div className={styles.benefitCard}>
                    <h4>Scientific Computing</h4>
                    <p><strong>Quad-precision floating point</strong> (128-bit IEEE 754)</p>
                    <ul>
                      <li>113-bit mantissa (vs 53-bit in double)</li>
                      <li>Critical for: Climate modeling, particle physics, astronomy</li>
                      <li>Example: Simulating galaxy collisions over billions of years</li>
                    </ul>
                  </div>
                  <div className={styles.benefitCard}>
                    <h4>Financial Systems</h4>
                    <p><strong>128-bit fixed-point arithmetic</strong></p>
                    <ul>
                      <li>No rounding errors in currency calculations</li>
                      <li>Handle quadrillions of monetary units precisely</li>
                      <li>Example: Central bank digital currencies, high-frequency trading</li>
                    </ul>
                  </div>
                  <div className={styles.benefitCard}>
                    <h4>Cryptography</h4>
                    <p><strong>Native 128-bit block operations</strong></p>
                    <ul>
                      <li>AES-128/192/256 encryption in fewer cycles</li>
                      <li>SHA-256/512 acceleration</li>
                      <li>Post-quantum cryptography algorithms</li>
                      <li>Example: Single-cycle AES round operations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.subsection}>
                <h3>SIMD and Vector Processing</h3>
                <div className={styles.simdComparison}>
                  <div className={styles.simdCard}>
                    <h4>32-bit to 64-bit</h4>
                    <p>Could pack 2x 32-bit values per register</p>
                  </div>
                  <div className={styles.simdCard}>
                    <h4>64-bit to 128-bit</h4>
                    <p><strong>Pack 4x 32-bit integers</strong> or <strong>2x 64-bit integers</strong></p>
                    <p><strong>4x single-precision floats</strong> or <strong>2x double-precision floats</strong></p>
                    <p><strong>Benefit:</strong> 2-4x throughput for parallel data</p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Specific Domain Benefits</h2>
              
              <div className={styles.domainBenefits}>
                <div className={styles.domainBenefitCard}>
                  <h3>Artificial Intelligence / Machine Learning</h3>
                  <div className={styles.beforeAfter}>
                    <div>
                      <h4>Current Challenge</h4>
                      <ul>
                        <li>Neural networks use FP16 or FP32</li>
                        <li>Batch processing requires multiple operations</li>
                      </ul>
                    </div>
                    <div>
                      <h4>128-bit Advantage</h4>
                      <ul>
                        <li>Process <strong>8x FP16 values</strong> in one instruction</li>
                        <li>Process <strong>4x FP32 values</strong> in one instruction</li>
                        <li>Native support for BF16 (bfloat16) - 8 values at once</li>
                        <li><strong>Impact:</strong> 2-4x faster inference and training</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.domainBenefitCard}>
                  <h3>Cryptography</h3>
                  <div className={styles.beforeAfter}>
                    <div>
                      <h4>AES Encryption</h4>
                      <ul>
                        <li>Native 128-bit block size</li>
                        <li><strong>Current (64-bit):</strong> Multiple operations per block</li>
                        <li><strong>128-bit:</strong> Single load, single encrypt, single store</li>
                        <li><strong>Impact:</strong> 2-3x faster encryption/decryption</li>
                      </ul>
                    </div>
                    <div>
                      <h4>Post-Quantum Cryptography</h4>
                      <ul>
                        <li>Lattice-based schemes use 128-bit+ operations</li>
                        <li><strong>Impact:</strong> Native support for future-proof security</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.domainBenefitCard}>
                  <h3>Database and Big Data</h3>
                  <div className={styles.beforeAfter}>
                    <div>
                      <h4>UUID/GUID Operations</h4>
                      <ul>
                        <li>UUIDs are 128-bit</li>
                        <li><strong>Current:</strong> Stored as strings or two 64-bit values</li>
                        <li><strong>128-bit:</strong> Native comparison, hashing, indexing</li>
                        <li><strong>Impact:</strong> 50% faster UUID operations</li>
                      </ul>
                    </div>
                    <div>
                      <h4>IPv6 Addresses</h4>
                      <ul>
                        <li>IPv6 = 128-bit addresses</li>
                        <li><strong>Current:</strong> Stored as structs or byte arrays</li>
                        <li><strong>128-bit:</strong> Single register, single comparison</li>
                        <li><strong>Impact:</strong> Faster routing table lookups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Quantitative Performance Projections</h2>
              <div className={styles.performanceGrid}>
                <div className={styles.performanceCard}>
                  <h3>Memory-Intensive Workloads</h3>
                  <ul>
                    <li><strong>Database queries:</strong> 20-40% faster (fewer memory ops)</li>
                    <li><strong>Video encoding:</strong> 30-60% faster (SIMD benefits)</li>
                    <li><strong>Encryption:</strong> 100-200% faster (native block size)</li>
                  </ul>
                </div>
                <div className={styles.performanceCard}>
                  <h3>Compute-Intensive Workloads</h3>
                  <ul>
                    <li><strong>AI inference:</strong> 100-300% faster (8x FP16 SIMD)</li>
                    <li><strong>Scientific computing:</strong> 1000%+ faster (hardware quad-precision)</li>
                    <li><strong>Image processing:</strong> 50-100% faster (4-way SIMD)</li>
                  </ul>
                </div>
                <div className={styles.performanceCard}>
                  <h3>Niche Applications</h3>
                  <ul>
                    <li><strong>Cryptographic signing:</strong> 150-250% faster</li>
                    <li><strong>UUID generation/comparison:</strong> 200-400% faster</li>
                    <li><strong>Genomic analysis:</strong> 100-200% faster</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>When Would 128-bit Actually Matter?</h2>
              <div className={styles.scenariosGrid}>
                <div className={styles.scenarioCard}>
                  <h3>Scenarios Where 128-bit is Overkill</h3>
                  <ul>
                    <li>General web browsing</li>
                    <li>Office applications</li>
                    <li>Most gaming (GPU handles wide operations)</li>
                    <li>Mobile devices (power consumption)</li>
                  </ul>
                </div>
                <div className={styles.scenarioCard}>
                  <h3>Scenarios Where 128-bit Shines</h3>
                  <ul>
                    <li><strong>Data Centers:</strong> Encryption, compression, database ops</li>
                    <li><strong>Scientific Supercomputers:</strong> Simulation, modeling</li>
                    <li><strong>AI Training Clusters:</strong> Matrix operations at scale</li>
                    <li><strong>Financial Systems:</strong> High-precision calculations</li>
                    <li><strong>Network Infrastructure:</strong> IPv6 routing, packet processing</li>
                    <li><strong>Genomics Research:</strong> Sequence analysis</li>
                    <li><strong>Video Production:</strong> 8K+ editing, effects rendering</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Summary: Why 128-bit Now?</h2>
              <div className={styles.summaryCard}>
                <p className={styles.summaryText}>
                  The jump from 32-bit to 64-bit was driven by <strong>memory limitations</strong>.
                </p>
                <p className={styles.summaryText}>
                  The jump from 64-bit to 128-bit is driven by:
                </p>
                <ol className={styles.summaryList}>
                  <li><strong>Native cryptographic block sizes</strong> (AES, post-quantum)</li>
                  <li><strong>SIMD parallelism</strong> (4x FP32, 8x FP16)</li>
                  <li><strong>High-precision computation</strong> (quad-precision float)</li>
                  <li><strong>Data structure efficiency</strong> (UUIDs, IPv6, vectors)</li>
                  <li><strong>AI/ML workloads</strong> (neural network operations)</li>
                </ol>
                <div className={styles.keyInsight}>
                  <strong>Key Insight:</strong> 128-bit is not about addressing more memory—it's about processing data more efficiently in parallel and with higher precision.
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
