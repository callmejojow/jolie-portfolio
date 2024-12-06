'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../components/Hobbies.module.css';

// Separate data into its own constant
const HOBBIES_DATA = [
  { 
    names: ['Piano', '钢琴', 'ピアノ'],
    id: 'piano',
    image: {
      src: '/assets/piano-photo.jpg',
      alt: 'Playing piano',
      priority: true // First image loads immediately
    },
    description: 'I started playing piano at the age of 6 and have been passionate about classical music ever since. My favorite composers are Chopin and Debussy. Piano is my best friend in my life and it lifts me up when I need help.'
  },
  { 
    names: ['Digital Art', '数字艺术', 'デジタルアート'],
    id: 'digital-art',
    image: {
      src: '/assets/digital-art-photo.jpg',
      alt: 'Digital artwork creation',
      priority: false
    },
    description: 'Digital art allows me to blend traditional artistic techniques with modern technology. I specialize in character design illustrations with iPad and Procreate. You can see my works on Dribbble.'
  },
  { 
    names: ['Gardening', '园艺', 'ガーデニング'],
    id: 'gardening',
    image: {
      src: '/assets/gardening-photo.jpg',
      alt: 'Gardening',
      priority: false
    },
    description: 'I have a small garden in the front yard of my house. From perennial shrubs to flowering trees, I set up the garden from scratch. It\'s like Animal Crossing in real life, and also a peaceful hobby that connects me with nature.'
  },
  { 
    names: ['Reading', '阅读', '読書'],
    id: 'reading',
    image: {
      src: '/assets/reading-photo.jpg',
      alt: 'Reading',
      priority: false
    },
    description: 'Books are my another gateway to different worlds and perspectives. I particularly enjoy detective fictions and philosophical literature. My favorite book is "A Room of One\'s Own" by Virginia Woolf.'
  },
  { 
    names: ['Musical', '音乐剧', 'ミュージカル'],
    id: 'musical',
    image: {
      src: '/assets/musical-photo.jpg',
      alt: 'Musical performance',
      priority: false
    },
    description: 'The combination of storytelling, music, and performance in musicals captivates me. Going to the theatre or singing the tracks in the car, I enjoy musicals anytime and anywhere. My favorites include Les Misérables, Mozart!, and Elisabeth.'
  },
  {
    names: ['Journal', '手帐', 'ジャーナル'],
    id: 'journal',
    image: {
      src: '/assets/journal-photo.jpg',
      alt: 'Journal',
      priority: false
    },
    description: 'I keep a journal to record my thoughts and feelings. It\'s a way to reflect on my experiences and to inspire myself. I write about my daily life, my resolutions, and my dreams. I also keep track of my children\'s growth and memories.'
  }
];

// Separate Polaroid component for better organization
const PolaroidBox = ({ hobby }: { hobby: typeof HOBBIES_DATA[0] }) => (
  <div id={hobby.id} className={styles.polaroidBox}>
    <div className={styles.imageWrapper}>
      <Image 
        src={hobby.image.src} 
        alt={hobby.image.alt} 
        fill
        sizes="(max-width: 480px) 92vw, (max-width: 768px) 85vw, 800px"
        className={styles.polaroidPhoto}
        priority={hobby.image.priority}
        loading={hobby.image.priority ? 'eager' : 'lazy'}
        quality={85} // Adjust quality for better performance
      />
    </div>
    <p className={styles.polaroidText}>
      {hobby.description}
    </p>
  </div>
);

// Separate Keywords component
const Keywords = ({ hobbies }: { hobbies: typeof HOBBIES_DATA }) => {
  const [keywordStyles, setKeywordStyles] = useState<{ [key: string]: React.CSSProperties }>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const calculateStyles = () => {
      const newStyles: { [key: string]: React.CSSProperties } = {};
      
      hobbies.forEach(hobby => {
        hobby.names.forEach((_, index) => {
          const key = `${hobby.id}-${index}`;
          newStyles[key] = {
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
            margin: `${Math.random() * (window.innerWidth <= 480 ? 0.5 : window.innerWidth <= 768 ? 1 : 2)}rem`
          };
        });
      });
      
      setKeywordStyles(newStyles);
    };

    calculateStyles();
  }, [hobbies]);

  // Return simple version during SSR
  if (!isMounted) {
    return (
      <div className={styles.keywordsContainer}>
        {hobbies.map((hobby) => (
          hobby.names.map((name, index) => (
            <a
              key={`${hobby.id}-${index}`}
              href={`#${hobby.id}`}
              className={`${styles.keyword} ${styles[hobby.id]}`}
            >
              {name}
            </a>
          ))
        ))}
      </div>
    );
  }

  // Return version with random styles after mounting
  return (
    <div className={styles.keywordsContainer}>
      {hobbies.map((hobby) => (
        hobby.names.map((name, index) => {
          const key = `${hobby.id}-${index}`;
          return (
            <a
              key={key}
              href={`#${hobby.id}`}
              className={`${styles.keyword} ${styles[hobby.id]}`}
              style={keywordStyles[key] || {}}
            >
              {name}
            </a>
          );
        })
      ))}
    </div>
  );
};

const Hobbies: React.FC = () => {
  return (
    <section className={styles.hobbiesContainer}>
      <Keywords hobbies={HOBBIES_DATA} />
      {HOBBIES_DATA.map((hobby) => (
        <PolaroidBox key={hobby.id} hobby={hobby} />
      ))}
    </section>
  );
};

export default Hobbies;
