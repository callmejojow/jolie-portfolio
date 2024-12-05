'use client';
import { ReactNode, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import styles from './components/Layout.module.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <head>
        <title>Jolie Wang | Portfolio</title>
        <meta name="description" content="This is a portfolio website for Jolie Wang." />
      </head>
      <body className={styles.body}>
        <div className={styles.layout}>
          <Header onToggleSidebar={toggleSidebar} />
          {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />}
          <main className={styles.mainContent}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
