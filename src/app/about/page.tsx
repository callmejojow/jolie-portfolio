'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../components/About.module.css';

interface DribbbleShot {
  id: string;
  title: string;
  images: {
    hidpi: string | null;
    normal: string;
    teaser: string;
  };
  html_url: string;
}

const Illustrations: React.FC = () => {
  const [shots, setShots] = useState<DribbbleShot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShots = async () => {
      try {
        const response = await fetch('/api/dribbble');

        if (!response.ok) {
          throw new Error(`Error fetching Dribbble shots: ${response.statusText}`);
        }

        const data = await response.json();
        setShots(data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load illustrations');
        setLoading(false);
      }
    };

    fetchShots();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <section className={styles.illustrationsContainer}>
      <h1 className={styles.sectionTitle}>My Illustrations</h1>
      <div className={styles.shotsGrid}>
        {shots.map((shot) => (
          <a key={shot.id} href={shot.html_url} target="_blank" rel="noopener noreferrer" className={styles.shotCard}>
            <Image
              src={shot.images.hidpi || shot.images.normal || shot.images.teaser}
              alt={shot.title}
              className={styles.shotImage}
              width={0}
              height={0}
            />
            <h2 className={styles.shotTitle}>{shot.title}</h2>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Illustrations;
