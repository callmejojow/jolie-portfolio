import styles from './Header.module.css';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/"><img src="/assets/logo.svg" alt="Logo" /></a>
      </div>
      <button className={styles.pancakeIcon} onClick={onToggleSidebar}>
        ☰
      </button>
    </header>
  );
};

export default Header;
