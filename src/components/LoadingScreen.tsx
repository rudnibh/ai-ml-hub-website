import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AimlLogo } from './ui/AimlLogo';

export default function LoadingScreen() {
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsZooming(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isZooming ? {
          scale: [1, 1.2, 15],
          opacity: [1, 1, 0],
        } : {}}
        transition={{
          duration: 1.5,
          times: [0, 0.7, 1],
          ease: "easeInOut"
        }}
        className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="relative mb-8">
          <motion.div
            animate={isZooming ? {
              scale: [1, 0.8],
              opacity: [1, 0]
            } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AimlLogo className="h-36 w-36 text-purple-400" />
          </motion.div>
        </div>

        <motion.div
          className="relative"
          animate={isZooming ? {
            scale: [1, 1.2],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="magic-circle">
            <motion.div
              className="rotating-sphere"
              animate={isZooming ? {
                scale: [1, 1.5],
                opacity: [1, 0.8]
              } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="outer-symbols"
              animate={isZooming ? { opacity: 0 } : {}}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="middle-ring"
              animate={isZooming ? { opacity: 0 } : {}}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="inner-ring"
              animate={isZooming ? { opacity: 0 } : {}}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="inner-ring-glow"
              animate={isZooming ? {
                scale: [1, 2],
                opacity: [1, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-8"
          animate={isZooming ? { opacity: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          AI/ML HUB
        </motion.h2>

        <style>
          {`
            .magic-circle {
              position: relative;
              width: 200px;
              height: 200px;
              display: flex;
              justify-content: center;
              align-items: center;
              perspective: 800px;
            }

            .rotating-sphere {
              position: absolute;
              width: 50px;
              height: 50px;
              background: radial-gradient(circle, rgba(170, 132, 255, 0.7), rgba(255, 255, 255, 0.9));
              border-radius: 50%;
              box-shadow: 0 0 20px 5px rgba(170, 132, 255, 0.6);
              animation: rotate-shiny 4s infinite linear;
            }

            .outer-symbols {
              position: absolute;
              width: 200px;
              height: 200px;
              border: 2px dashed rgba(255, 255, 255, 0.3);
              border-radius: 50%;
              animation: rotate 10s infinite linear reverse;
            }

            .middle-ring {
              position: absolute;
              width: 160px;
              height: 160px;
              border: 2px solid rgba(170, 132, 255, 0.5);
              border-radius: 50%;
              animation: rotate 8s infinite linear;
            }

            .inner-ring {
              position: absolute;
              width: 120px;
              height: 120px;
              border: 2px solid rgba(255, 255, 255, 0.7);
              border-radius: 50%;
              animation: rotate-3d 6s infinite linear reverse;
            }

            .inner-ring-glow {
              position: absolute;
              width: 140px;
              height: 140px;
              border: 2px solid rgba(200, 100, 255, 0.6);
              border-radius: 50%;
              box-shadow: 0 0 20px 10px rgba(200, 100, 255, 0.4);
              animation: rotate-glow 5s infinite linear;
            }

            @keyframes rotate {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            @keyframes rotate-3d {
              0% { transform: rotateX(0deg) rotateY(0deg); }
              100% { transform: rotateX(360deg) rotateY(360deg); }
            }

            @keyframes rotate-glow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            @keyframes rotate-shiny {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </motion.div>
    </AnimatePresence>
  );
}