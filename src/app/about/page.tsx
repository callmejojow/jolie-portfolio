'use client';
import styles from '../components/About.module.css';
import Image from 'next/image';
const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.avatarContainer}>
        <Image 
          src="/assets/avatar.png" 
          alt="Avatar" 
          width={500}
          height={500}
          className={styles.avatar}
          priority
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
        />
      </div>
      <div className={styles.introContainer}>
        <h2 className={styles.title}>Who I Am</h2>
        <p className={styles.introText}>
          Hi, I&apos;m Jolie. I&apos;m a passionate software developer with experience in building full-stack applications and business solutions. My journey has taken 
          me from art to technology, and my love for creating and innovating continues to this day. Welcome to my portfolio—feel free to explore my projects 
          and get to know me better!
        </p>
      </div>
    </section>
  );
};

export default About;
