import React from 'react';
import { AimlLogo } from './ui/AimlLogo';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative mb-8">
        <AimlLogo className="h-36 w-36 text-purple-400 animate-pulse" />
      </div>

      {/* Magic Circle Animation */}
      <div className="magic-circle">
        <div className="rotating-sphere"></div>
        <div className="outer-symbols"></div>
        <div className="middle-ring"></div>
        <div className="inner-ring"></div>
        <div className="inner-ring-glow"></div>
        <div className="inner-ring-small"></div>
        <div className="inner-ring-extra"></div>
      </div>

      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-8">
        AI/ML HUB
      </h2>

      {/* Inline Styles */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background: radial-gradient(circle, #1e0331, #310652, #55098c);
            overflow: hidden;
          }

          .magic-circle {
            position: relative;
            width: 200px;
            height: 200px;
            border-radius: 50%;
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

          .inner-ring-small {
            position: absolute;
            width: 100px;
            height: 100px;
            border: 2px dotted rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            animation: rotate-small 7s infinite linear reverse;
          }

          .inner-ring-extra {
            position: absolute;
            width: 80px;
            height: 80px;
            border: 2px dashed rgba(150, 80, 255, 0.5);
            border-radius: 50%;
            animation: rotate-extra 6s infinite ease-in-out;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes rotate-3d {
            0% {
              transform: rotateX(0deg) rotateY(0deg);
            }
            100% {
              transform: rotateX(360deg) rotateY(360deg);
            }
          }

          @keyframes rotate-glow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes rotate-small {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes rotate-extra {
            0% {
              transform: rotateX(0deg) rotateY(0deg);
            }
            100% {
              transform: rotateX(360deg) rotateY(180deg);
            }
          }

          @keyframes rotate-shiny {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
