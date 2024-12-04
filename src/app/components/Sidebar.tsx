import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <nav className={styles.sidebarNav}>
        <ul>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#resume">Resume</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="#hobbies">Hobbies</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
