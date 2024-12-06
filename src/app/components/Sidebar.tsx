'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    onClose();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current &&
          !sidebarRef.current.contains(event.target as Node) &&
          isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (isOpen) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [isOpen, onClose]);

  return (
    <div ref={sidebarRef} className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <nav className={styles.sidebarNav}>
        <ul>
          <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link href="/projects" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link href="/hobbies" onClick={handleLinkClick}>Hobbies</Link></li>
          <li><Link href="/illustrations" onClick={handleLinkClick}>Illustrations</Link></li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
