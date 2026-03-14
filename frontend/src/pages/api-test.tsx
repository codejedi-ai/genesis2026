import { useState } from 'react';
import Navbar from '@/components/Navbar';
import VantaBackground from '@/components/VantaBackground';
import styles from '@/styles/api-test.module.css';

interface ApiResponse {
  success?: boolean;
  message?: string;
  method?: string;
  timestamp?: string;
  data?: any;
  error?: string;
  count?: number;
}

export default function ApiTestPage() {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = async (endpoint: string, method: 'GET' | 'POST' = 'GET', body?: any, format?: string, acceptHeader?: string) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // Add Accept header for different formats
      if (acceptHeader) {
        options.headers = {
          ...options.headers,
          'Accept': acceptHeader,
        };
      }

      if (body) {
        options.body = JSON.stringify(body);
      }

      // Add format query parameter if specified
      const url = format ? `${endpoint}?format=${format}` : endpoint;
      const res = await fetch(url, options);
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      // Handle different response types
      const contentType = res.headers.get('content-type') || '';
      
      if (contentType.includes('application/json')) {
        const data = await res.json();
        setResponse(data);
      } else if (contentType.includes('text/plain')) {
        const text = await res.text();
        setResponse({ rawText: text, contentType: 'text/plain' });
      } else if (contentType.includes('application/xml') || contentType.includes('text/xml')) {
        const xml = await res.text();
        setResponse({ rawXml: xml, contentType: 'application/xml' });
      } else if (contentType.includes('text/html')) {
        const html = await res.text();
        setResponse({ rawHtml: html, contentType: 'text/html' });
      } else if (contentType.includes('text/csv')) {
        const csv = await res.text();
        setResponse({ rawCsv: csv, contentType: 'text/csv' });
      } else {
        // Fallback to text
        const text = await res.text();
        setResponse({ rawText: text, contentType: 'unknown' });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const testHelloWorld = () => callApi('/api/hello');
  const testHelloPost = () => callApi('/api/hello', 'POST', { test: 'data' });
  const testUsers = () => callApi('/api/users');
  const testUserById = () => callApi('/api/users?id=1');
  const testCreateUser = () => callApi('/api/users', 'POST', { 
    name: 'Test User', 
    email: 'test@example.com' 
  });

  // Format-specific tests for GET /api/hello
  const testHelloXml = () => callApi('/api/hello', 'GET', undefined, 'xml');
  const testHelloText = () => callApi('/api/hello', 'GET', undefined, 'text');
  const testHelloHtml = () => callApi('/api/hello', 'GET', undefined, 'html');
  const testHelloCsv = () => callApi('/api/hello', 'GET', undefined, 'csv');

  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>API Test Page</h1>
            <p className={styles.tagline}>Test Netlify Functions via ICE.js Proxy</p>
          
          <div className={styles.ctaRow}>
            <button onClick={testHelloWorld} className={styles.primaryCta}>
              Hello JSON
            </button>
            <button onClick={testHelloXml} className={styles.secondaryCta}>
              Hello XML
            </button>
            <button onClick={testHelloText} className={styles.primaryCta}>
              Hello Text
            </button>
            <button onClick={testHelloHtml} className={styles.secondaryCta}>
              Hello HTML
            </button>
            <button onClick={testHelloCsv} className={styles.primaryCta}>
              Hello CSV
            </button>
          </div>

          <div className={styles.ctaRow} style={{ marginTop: '1rem' }}>
            <button onClick={testHelloPost} className={styles.secondaryCta}>
              Hello POST (JSON)
            </button>
            <button onClick={testUsers} className={styles.primaryCta}>
              Get Users
            </button>
            <button onClick={testUserById} className={styles.secondaryCta}>
              Get User by ID
            </button>
            <button onClick={testCreateUser} className={styles.primaryCta}>
              Create User
            </button>
          </div>

          {loading && (
            <div style={{ marginTop: '2rem', color: '#00ffff', textAlign: 'center' }}>
              <div className={styles.spinner}></div>
              <p>Calling API...</p>
            </div>
          )}

          {error && (
            <div className={styles.errorContainer}>
              <h3 className={styles.responseTitle}>Error:</h3>
              <p>{error}</p>
            </div>
          )}

          {response && (
            <div className={styles.responseContainer}>
              <h3 className={styles.responseTitle}>API Response:</h3>
              {response.contentType && (
                <p className={styles.contentType}>
                  Content-Type: {response.contentType}
                </p>
              )}
              <pre className={styles.responsePre}>
                {response.rawText ? response.rawText :
                 response.rawXml ? response.rawXml :
                 response.rawHtml ? response.rawHtml :
                 response.rawCsv ? response.rawCsv :
                 JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}

          <div className={styles.endpointsContainer}>
            <h3 className={styles.endpointsTitle}>Available API Endpoints:</h3>
            <ul className={styles.endpointsList}>
              <li><code>GET /api/hello</code> - Returns hello world message (JSON)</li>
              <li><code>GET /api/hello?format=xml</code> - Returns XML format</li>
              <li><code>GET /api/hello?format=text</code> - Returns plain text</li>
              <li><code>GET /api/hello?format=html</code> - Returns HTML format</li>
              <li><code>GET /api/hello?format=csv</code> - Returns CSV format</li>
              <li><code>POST /api/hello</code> - Returns hello world message with received data (JSON only)</li>
              <li><code>GET /api/users</code> - Returns all users (JSON)</li>
              <li><code>GET /api/users?id=1</code> - Returns specific user by ID (JSON)</li>
              <li><code>POST /api/users</code> - Creates a new user (JSON)</li>
            </ul>
            <p className={styles.endpointsInfo}>
              <strong>Powered by:</strong> Netlify Functions (TypeScript, no CORS)<br/>
              <strong>Format Support:</strong> GET /api/hello supports multiple formats (json, xml, text, html, csv)<br/>
              <strong>Routing:</strong> /api/* automatically proxied to Netlify Functions
            </p>
          </div>
          </header>
        </div>
      </div>
    </>
  );
}
