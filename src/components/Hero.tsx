import React from 'react';
import CountdownTimer from './CountdownTimer';
import { Zap, Code, Cpu } from 'lucide-react';
import { theme } from '../theme';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Floating icons */}
        <div className="absolute -top-10 -left-10 animate-bounce">
          <Zap className="w-8 h-8 text-cyan-400 icon-glow" />
        </div>
        <div className="absolute -top-5 -right-5 animate-pulse">
          <Code className="w-6 h-6 text-purple-400 icon-glow" />
        </div>
        <div className="absolute bottom-0 left-1/4 animate-pulse">
          <Cpu className="w-10 h-10 text-emerald-400 icon-glow" />
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 heading-font">
          <span className="gradient-text">INNOVATE</span>
          <span className="text-cyan-400">-X</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-slate-300 font-medium tracking-wide">
          WHERE INNOVATION MEETS TECHNOLOGY
        </p>
        
        {/* Motivational quote */}
        <blockquote className="text-lg md:text-xl italic mb-12 max-w-4xl mx-auto">
          <span className="text-purple-400 text-3xl">"</span>
          <span className="text-slate-200 font-light">
            The future belongs to those who understand that technology is not just about code,
            but about creating solutions that transform humanity
          </span>
          <span className="text-purple-400 text-3xl">"</span>
        </blockquote>
        
        {/* Countdown Timer */}
        <CountdownTimer />
        
        {/* CTA Button */}
        <div className="mt-12">
          <button className="cyber-button px-10 py-5 text-lg font-semibold tracking-wider">
            JOIN THE REVOLUTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;