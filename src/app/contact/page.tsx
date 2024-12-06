'use client';
import styles from '../components/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <h1 className={styles.sectionTitle}>Contact Me</h1>
      
      <div className={styles.contactInfo}>
        <a href="https://www.linkedin.com/in/jolie-wang" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          <img src="/assets/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:jingwangjolie@gmail.com" className={styles.contactLink}>
          <img src="/assets/email.png" alt="Email" />
        </a>
        <a href="https://github.com/callmejojow" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          <img src="/assets/github.png" alt="GitHub" />
        </a>
      </div>

      <form 
        className={styles.contactForm}
        action="https://formspree.io/f/mbljbqgd"
        method="POST"
      >
        <label htmlFor="name" className={styles.formLabel}>Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className={styles.formInput} 
        />

        <label htmlFor="email" className={styles.formLabel}>Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className={styles.formInput} 
        />

        <label htmlFor="message" className={styles.formLabel}>Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          required 
          className={styles.formTextarea}
        ></textarea>

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;