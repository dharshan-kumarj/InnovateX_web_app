import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import { Zap, Code, Cpu, Menu, X, Home, Users, FileText, Trophy, Mail } from 'lucide-react';
import { theme } from '../theme';
import karunyaLogo from '../assets/images/Logo/karunya.jpeg';
import atomLogo from '../assets/images/Logo/Atom.png';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'problems', label: 'Problems', icon: FileText },
    { id: 'events', label: 'Events', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Enhanced Navbar - Fully Responsive */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-md border-b border-slate-800/30">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Left Logo - Karunya University */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              <div className="relative w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md sm:rounded-lg overflow-hidden border-2 border-cyan-500/50 hover:border-cyan-500/80 transition-colors duration-300">
                <img 
                  src={karunyaLogo} 
                  alt="Karunya University Logo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
              {/* <div className="text-white hidden sm:block">
                <div className="text-xs sm:text-sm lg:text-base font-bold">KARUNYA</div>
                <div className="text-xs lg:text-sm text-slate-400">UNIVERSITY</div>
              </div> */}
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Logo - Atom */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              {/* <div className="text-white text-right hidden sm:block">
                <div className="text-xs sm:text-sm lg:text-base font-bold">ATOM</div>
                <div className="text-xs lg:text-sm text-slate-400">CLUB</div>
              </div> */}
              <div className="relative w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md sm:rounded-lg overflow-hidden border-2 border-purple-500/50 hover:border-purple-500/80 transition-colors duration-300">
                <img 
                  src={atomLogo} 
                  alt="Atom Club Logo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            {/* <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors ml-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-1 sm:space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>
      
      {/* Main Hero Content - Fully Responsive */}
      <div className="flex-1 flex items-center justify-center w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-16 sm:pt-20 lg:pt-24">
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
          {/* Department Name */}
          <div className="mb-3 sm:mb-4 md:mb-6">
            <div className="inline-block bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3">
              <span className="text-cyan-400 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider">
                DIVISION OF DATA SCIENCE AND CYBER SECURITY
              </span>
            </div>
          </div>

          {/* Floating Technical Icons - Hidden on mobile/tablet */}
          <div className="hidden 2xl:block absolute -top-20 -left-20 opacity-20">
            <div className="w-24 h-24 border-2 border-cyan-400 rounded-full flex items-center justify-center">
              <Zap className="w-12 h-12 text-cyan-400 icon-glow" />
            </div>
          </div>
          <div className="hidden 2xl:block absolute -top-10 -right-16 opacity-20">
            <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center">
              <Code className="w-8 h-8 text-purple-400 icon-glow" />
            </div>
          </div>
          <div className="hidden 2xl:block absolute -bottom-10 left-1/4 opacity-20">
            <div className="w-20 h-20 border-2 border-emerald-400 rounded-full flex items-center justify-center">
              <Cpu className="w-10 h-10 text-emerald-400 icon-glow" />
            </div>
          </div>

          {/* Main heading with comprehensive responsive design */}
          <div className="relative mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-2 sm:mb-3 lg:mb-4 heading-font leading-none">
              <span className="gradient-text">INNOVATE</span>
              <span className="text-cyan-400">-X</span>
            </h1>
            
            {/* Subtitle with comprehensive responsive styling */}
            <div className="relative">
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-3 lg:mb-4 text-slate-300 font-medium tracking-wide leading-relaxed">
                WHERE INNOVATION MEETS TECHNOLOGY
              </p>
              <div className="w-12 xs:w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
            </div>
          </div>
          
          {/* Enhanced Countdown Timer - Fully Responsive */}
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            <CountdownTimer />
          </div>
          
          {/* Event Info - Fully Responsive */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            <div className="flex flex-col xs:flex-row items-center justify-center space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base">Registration Open</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base">48 Hour Hackathon</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-400 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base">AI & Cyber Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;