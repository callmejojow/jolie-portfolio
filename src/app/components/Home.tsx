import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.placeholderAnimation}>
        {/* Placeholder for animation */}
        <p>Animation placeholder (e.g., girl walking)</p>
      </div>
      <div className={styles.introText}>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Jolie! This is my personal portfolio where I showcase my skills,
          projects, and interests. Feel free to explore and learn more about me!
        </p>
      </div>
    </section>
  );
};

export default Home;
