import type { ReactNode } from 'react';
import styles from './mainLayout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {

  return (
    <div className={styles.mainLayout}>
      <div style={{ display: 'flex' }}>
        <Header />
        <Sidebar />
      </div>
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;