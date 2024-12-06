'use client';
import { useEffect, useRef } from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const updateCanvas = () => {
          // Get current window width
          const windowWidth = window.innerWidth;
          
          // Set responsive canvas width with padding
          canvas.width = Math.min(800, windowWidth - 40);
          canvas.height = 100;

          // Calculate font size based on canvas width
          let fontSize;
          if (windowWidth <= 480) {
            fontSize = Math.floor(canvas.width / 15); // Responsive font size for mobile
          } else if (windowWidth <= 768) {
            fontSize = Math.floor(canvas.width / 12); // Responsive font size for tablet
          } else {
            fontSize = 64; // Desktop size
          }

          ctx.font = `bold ${fontSize}px Arial`;
          ctx.fillStyle = '#c43727';
          ctx.textAlign = 'center';
        };

        // Initial setup
        updateCanvas();

        const text = "Hello! I am Jolie Wang";
        let index = 0;

        const typeText = () => {
          if (index <= text.length) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText(text.slice(0, index), canvas.width / 2, 70);
            index++;
            setTimeout(typeText, 100);
          }
        };

        typeText();

        // Handle window resize
        const handleResize = () => {
          updateCanvas();
          // Redraw current text
          ctx.fillText(text.slice(0, index), canvas.width / 2, 70);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }
    }
  }, []);

  return (
    <section className={styles.homeContainer}>
      <div className={styles.introSection}>
        <canvas ref={canvasRef} className={styles.typewriterCanvas}></canvas>
        <div className={styles.scrollContainer}>
          <p className={styles.introText}>
            Software Engineer | Graphic Designer | Freelance Illustrator
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;