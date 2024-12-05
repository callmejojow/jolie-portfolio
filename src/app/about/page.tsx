'use client';
import styles from '../components/About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.avatarContainer}>
        <img src="/assets/avatar.png" alt="Avatar" className={styles.avatar} />
      </div>
      <div className={styles.introContainer}>
        <h2 className={styles.title}>Who I Am</h2>
        <p className={styles.introText}>
          Hi, I'm Jolie. I'm a passionate web developer with experience in creating dynamic and interactive web applications. 
          My journey has taken me from learning the basics to exploring advanced concepts, constantly evolving my skills to 
          create more robust and user-friendly applications. Welcome to my portfolio, and feel free to explore my projects 
          and get to know more about me!
        </p>
      </div>
    </section>
  );
};

export default About;
