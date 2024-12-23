import React from 'react';
import { useSpring } from '@react-spring/web';
import { Sparkles } from 'lucide-react';
import { AnimatedText, AnimatedElement, AnimatedButton } from '../ui/AnimatedElement';
import { StyledText } from '../ui/StyledText';
import { ParallaxBackground } from './ParallaxBackground';
import { FloatingElements } from './FloatingElements';
import { AimlLogo } from '../ui/AimlLogo';

// ... rest of imports

export default function Hero() {
  // ... existing code

  return (
    <div 
      className="relative hero-grid min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <ParallaxBackground xy={xy} />
      <div className="absolute inset-0">
        <div className="honeycomb-pattern animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedElement delay={0.2}>
          <AimlLogo className="h-41 w-41 text-purple-400 mx-auto mb-6 animate-float" />
        </AnimatedElement>

        <AnimatedText 
          className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          stagger={0.1}
        >
          <StyledText variant="highlight">AI/ML HUB</StyledText>
        </AnimatedText>

        <AnimatedElement delay={0.4} className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Welcome to the <StyledText variant="underline">AIML Hub at JIIT</StyledText>! 
            A space for <StyledText variant="highlight" color="pink">innovation</StyledText>, 
            <StyledText variant="highlight" color="yellow">learning</StyledText>, and
            <StyledText variant="highlight">collaboration</StyledText> in Artificial Intelligence 
            and Machine Learning.
          </p>
        </AnimatedElement>

        {/* ... rest of the component */}
      </div>
    </div>
  );
}