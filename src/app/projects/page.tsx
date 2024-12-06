'use client';
import styles from '../components/Projects.module.css';
import Image from 'next/image';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Manifesto Space',
      technologies: 'Vue.js 3 | Tailwind CSS',
      description: 'A dynamic web platform that showcases space-themed manifestos. Built with Vue.js 3 and styled with Tailwind CSS, this project features:',
      features: [
        '• Advanced navbar with parallax scrolling effects',
        '• Smooth state transitions and page animations',
        '• Interactive exhibition navigation system',
        '• Responsive design with mobile-first approach',
        '• Custom scroll-triggered animations'
      ],
      image: '/assets/thumbnail-proj1.jpg', 
      link: 'https://manifesto-space.com/'
    },
    {
      title: 'Magic Noodle',
      technologies: 'Laravel | MySQL | JavaScript',
      description: 'A full-stack restaurant website with a robust admin system built using Laravel and MySQL. Features a dynamic menu management system and bilingual content support:',
      features: [
        '• Responsive design for all devices',
        '• Interactive hero banner with JavaScript carousel',
        '• MySQL database integration for dynamic content',
        '• RESTful API endpoints',
        '• Bilingual support with database-driven translations (EN/CN)'
      ],
      image: '/assets/thumbnail-proj2.jpg',
      link: 'https://magicnoodle.ca/'
    },
    {
      title: 'Flip-O-Rama',
      technologies: 'Vue.js 3 | JavaScript | CSS',
      description: 'A memory card matching game built with Vue.js 3 Composition API. Designed and implemented from scratch with engaging animations and game mechanics:',
      features: [
        '• Custom game logic using Vue.js 3 Composition API',
        '• Responsive game board with CSS Grid layout',
        '• Interactive card flip animations',
        '• Score tracking and game state management',
        '• Deployed and hosted on Netlify'
      ],
      image: '/assets/thumbnail-proj3.jpg', 
      link: 'https://flip-o-rama-jo.netlify.app/'
    },
    {
      title: 'ARealMe Quiz Website',
      technologies: 'Figma | HTML | CSS',
      description: 'Designed the user interface for a popular quiz platform featuring personality tests and knowledge assessments. Focused on creating an engaging and intuitive user experience:',
      features: [
        '• Created responsive UI designs for mobile and desktop',
        '• Designed intuitive quiz navigation system',
        '• Developed visual hierarchy for quiz content',
        '• Implemented consistent design language',
        '• Enhanced user engagement through visual design'
      ],
      image: '/assets/thumbnail-proj4.jpg', 
      link: 'https://www.arealme.com/'
    },
  ];

  const ProjectGrid = () => (
    <div className={styles.gridContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <div className={styles.projectImage}>
            <Image src={project.image} alt={project.title} width={100} height={100} />
          </div>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectTech}>{project.technologies}</p>
          <p className={styles.projectDescription}>{project.description}</p>
          <ul className={styles.featuresList}>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <a href={project.link} className={styles.viewProject}>
            View Project →
          </a>
        </div>
      ))}
    </div>
  );

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
                Whether it&apos;s designing wireframes or implementing frontend interfaces, I blend creativity with technical skills to achieve an optimal
                user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className={styles.arrowIcon}>
        <span className={styles.bouncingArrow}>
          <Image src="/down-arrow.png" alt="Scroll Down" width={100} height={100} />
        </span>
      </div>

      {/* Projects Grid Section */}
      <ProjectGrid />
    </section>
  );
};

export default Projects;
