'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const animationRef = useRef<NodeJS.Timeout>();
  const hasStartedAnimation = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current || hasStartedAnimation.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    hasStartedAnimation.current = true;

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
    let index = 0;

    const typeText = () => {
      if (index <= text.length) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(text.slice(0, index), canvas.width / 2, 70);
        index++;
        animationRef.current = setTimeout(typeText, 100);
      }
    };

    typeText();

    const handleResize = () => {
      updateCanvas();
      ctx.fillText(text.slice(0, index), canvas.width / 2, 70);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isMounted]);

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