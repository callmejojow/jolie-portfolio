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
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#resume">Resume</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="#hobbies">Hobbies</Link></li>
        </ul>
      </nav>
    </div>
  );
}
