import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.introText}>
        <h1>Hello! I am Jolie Wang.</h1>
        <div className={styles.scrollContainer}>
          <p>
            Software Engineer | Microsoft D365 Business Central Solution Developer | Graphic Designer | Freelance Illustrator 
          </p>
        </div>
      </div>
    </section>
  );
}
