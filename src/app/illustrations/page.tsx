'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../components/Illustrations.module.css';

interface DribbbleShot {
  id: number;
  title: string;
  images: {
    hidpi: string | null;
    normal: string;
  };
  html_url: string;
}

const Illustrations: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [shots, setShots] = useState<DribbbleShot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const fetchShots = async () => {
      if (!isMounted) return;
      
      try {
        const response = await fetch('/api/dribbble');
        
        if (!response.ok) {
          throw new Error('Failed to fetch illustrations');
        }
        
        const data = await response.json();
        setShots(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load illustrations');
        console.error('Error fetching Dribbble shots:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShots();
  }, [isMounted]);

  // Always render the skeleton during SSR
  if (!isMounted) {
    return (
      <section className={styles.illustrationsContainer}>
        <h1 className={styles.sectionTitle}>My Illustrations</h1>
        <div className={styles.gallery}>
          {[...Array(6)].map((_, index) => (
            <div key={index} className={`${styles.imageWrapper} ${styles.skeleton}`} />
          ))}
        </div>
      </section>
    );
  }

  if (loading) {
    return <div className={styles.loading}>Loading illustrations...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section className={styles.illustrationsContainer}>
      <h1 className={styles.sectionTitle}>My Illustrations</h1>
      <div className={styles.gallery}>
        {shots.map((shot) => (
          <a 
            key={shot.id} 
            href={shot.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.imageWrapper}
          >
            <Image 
              src={shot.images.hidpi || shot.images.normal}
              alt={shot.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.shotImage}
              priority={shot.id === shots[0]?.id}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Illustrations;
