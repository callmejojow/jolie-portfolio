'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const animationRef = useRef<NodeJS.Timeout>();
  const indexRef = useRef(0);

  useEffect(() => {
    setIsMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvas = () => {
      const windowWidth = window.innerWidth;
      canvas.width = Math.min(800, windowWidth - 40);
      canvas.height = 100;

      const fontSize = windowWidth <= 480 
        ? Math.floor(canvas.width / 15)
        : windowWidth <= 768 
          ? Math.floor(canvas.width / 12)
          : 64;

      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = '#c43727';
      ctx.textAlign = 'center';
    };

    updateCanvas();

    const text = "Hello! I am Jolie Wang";
    indexRef.current = 0;

    const typeText = () => {
      if (indexRef.current <= text.length) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(text.slice(0, indexRef.current), canvas.width / 2, 70);
        indexRef.current++;
        animationRef.current = setTimeout(typeText, 100);
      }
    };

    typeText();

    const handleResize = () => {
      updateCanvas();
      ctx.fillText(text.slice(0, indexRef.current), canvas.width / 2, 70);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.homeContainer}>
      <div className={styles.introSection}>
        {isMounted ? (
          <canvas ref={canvasRef} className={styles.typewriterCanvas}></canvas>
        ) : (
          <div className={styles.typewriterFallback}>
            Hello! I am Jolie Wang
          </div>
        )}
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