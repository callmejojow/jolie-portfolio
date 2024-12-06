'use client';
import styles from '../components/Hobbies.module.css';

const Hobbies: React.FC = () => {
  const hobbies = [
    { name: 'Piano', id: 'piano' },
    { name: 'Digital Art', id: 'digital-art' },
    { name: 'Gardening', id: 'gardening' },
    { name: 'Reading', id: 'reading' },
    { name: 'Musical', id: 'musical' }
  ];

  return (
    <section className={styles.hobbiesContainer}>
      <div className={styles.keywordsContainer}>
        {hobbies.map((hobby) => (
          <a
            key={hobby.id}
            href={`#${hobby.id}`}
            className={`${styles.keyword} ${styles[hobby.id]}`}
          >
            {hobby.name}
          </a>
        ))}
      </div> 

      {hobbies.map((hobby) => (
        <div key={hobby.id} id={hobby.id} className={styles.placeholderBox}>
          <h2 className={styles.placeholderTitle}>{hobby.name}</h2>
          <p className={styles.placeholderText}>
            This is a placeholder for an introduction to {hobby.name}. Here you can add more details about why you love this hobby, what it means to you, or any other fun facts.
          </p>
        </div>
      ))}
    </section>
  );
};

export default Hobbies;
