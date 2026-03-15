import { Outlet } from 'ice';
import styles from './BasicLayout.module.css';

// NOTE: Navbar is rendered by each page individually (not here)
// to avoid double-rendering. Pages manage their own Navbar + VantaBackground.
const BasicLayout = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default BasicLayout;
