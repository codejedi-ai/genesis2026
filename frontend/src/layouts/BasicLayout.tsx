import { Outlet } from 'ice';
import Navbar from '@/components/Navbar';
import styles from './BasicLayout.module.css';

const BasicLayout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default BasicLayout;
