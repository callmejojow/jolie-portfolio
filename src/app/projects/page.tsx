'use client';
import styles from '../components/Projects.module.css';

const Projects: React.FC = () => {
  const projects = Array.from({ length: 9 }, (_, index) => ({
    title: `Project ${index + 1}`,
    description: `This is a brief description of project ${index + 1}.`,
  }));

  return (
    <section className={styles.projectsContainer}>
      <div className={styles.overviewContainer}>
        <h2 className={styles.sectionTitle}>What I Do</h2>
        
        <div className={styles.cardsWrapper}>
          {/* First Card Group */}
          <div className={styles.cardGroup}>
            <h3 className={styles.cardTitle}>ERP Solutions and Custom Integrations</h3>
            <div className={styles.card}>
              <p className={styles.cardText}>
                With extensive experience as an ERP Developer, I specialize in developing, enhancing, and maintaining business ERP solutions. 
                Currently, I work with Microsoft Dynamics 365 Business Central, leading projects that streamline nationwide retail operations. 
                I customize ERP features, integrate 3rd-party APIs, and optimize systems for scalability and resource efficiency. My work has 
                notably included resolving critical e-commerce bottlenecks and leading ERP upgrades from Dynamics Nav to Dynamics 365.
              </p>
            </div>
          </div>

          {/* Second Card Group */}
          <div className={styles.cardGroup}>
            <h3 className={styles.cardTitle}>Community Engagement and Technology for Nonprofits</h3>
            <div className={styles.card}>
              <p className={styles.cardText}>
                As the Development Lead for Manifesto Space at the Asian Arts and Culture Trust (ACCT), I contributed to amplifying marginalized 
                voices by building a platform for curated exhibitions celebrating queer perspectives. This initiative was a key part of fostering 
                inclusivity and creating a safe space for the LGBTQ+ community to share their stories and art works. My efforts centered on enabling community
                expression and improving access to culturally significant content, ultimately empowering minorities through digital representation.
              </p>
            </div>
          </div>

          {/* Third Card Group */}
          <div className={styles.cardGroup}>
            <h3 className={styles.cardTitle}>Art X Tech</h3>
            <div className={styles.card}>
              <p className={styles.cardText}>
                My background in graphic design, UX/UI design, and web content editing plays a crucial role in my professional growth as a developer. 
                I understand how thoughtful design improves user experience and can greatly impact the success of a product. This multidisciplinary 
                experience allows me to create aesthetic, functional, and user-centric solutions that bridge the gap between technology and usability. 
                Whether it's designing wireframes or implementing frontend interfaces, I blend creativity with technical skills to achieve an optimal
                user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className={styles.arrowIcon}>
        <span className={styles.bouncingArrow}>
          <img src="/assets/down-arrow.png" alt="Scroll Down" />
        </span>
      </div>

      {/* Projects Grid Section */}
      <div className={styles.gridContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
