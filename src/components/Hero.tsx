import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import { Zap, Code, Cpu, Home, Users, FileText, Crown, Mail } from 'lucide-react';
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
    { id: 'members', label: 'Members', icon: Crown },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <section id="hero" className="relative h-screen flex flex-col overflow-hidden">
      {/* Navbar - Reduced Height for Mobile */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-md border-b border-slate-800/30">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-10 sm:h-12 md:h-16 lg:h-20">
            {/* Left Logo - Karunya University */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              <div className="relative w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md sm:rounded-lg overflow-hidden border-2 border-cyan-500/50 hover:border-cyan-500/80 transition-colors duration-300
                mx-2 xs:mx-3 sm:mx-0
              ">
                <img 
                  src={karunyaLogo} 
                  alt="Karunya University Logo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
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
              <div className="relative w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md sm:rounded-lg overflow-hidden border-2 border-purple-500/50 hover:border-purple-500/80 transition-colors duration-300
                mx-2 xs:mx-3 sm:mx-0
              ">
                <img 
                  src={atomLogo} 
                  alt="Atom Club Logo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            {/* <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-1.5 rounded-lg hover:bg-slate-800/50 transition-colors ml-1"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 xs:w-5 xs:h-5" /> : <Menu className="w-4 h-4 xs:w-5 xs:h-5" />}
            </button> */}
          </div>
        </div>

        {/* Compact Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
            <div className="px-2 py-2 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
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
      
      {/* Main Hero Content - Improved Mobile Padding */}
      <div className="flex-1 flex items-center justify-center w-full px-4 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-16 lg:pt-20">
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
          {/* Department Name - Better Mobile Padding */}
          <div className="mb-3 sm:mb-3 md:mb-4">
            <div className="inline-block bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-full px-4 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-1.5 md:py-2">
              <span className="text-cyan-400 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider">
                <span className="sm:hidden">DATA SCIENCE & CYBER SECURITY</span>
                <span className="hidden sm:inline">DIVISION OF DATA SCIENCE AND CYBER SECURITY</span>
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

          {/* Main heading - Larger on Mobile */}
          <div className="relative mb-2 sm:mb-3 md:mb-4 lg:mb-6">
            {/* Mobile Stacked Layout with Larger Font */}
            <div className="sm:hidden py-8">
              <h1 className="font-bold heading-font leading-none">
                <div className="gradient-text text-6xl xs:text-7xl">INNOVATE-X</div>
              </h1>
            </div>
            
            {/* Desktop Inline Layout */}
            <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-2 sm:mb-3 lg:mb-4 heading-font leading-none">
              <span className="gradient-text">INNOVATE</span>
              <span className="text-cyan-400">-X</span>
            </h1>
            
            {/* Subtitle - More Compact on Mobile */}
            <div className="relative mt-3 sm:mt-0">
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-3 lg:mb-4 text-slate-300 font-medium tracking-wide leading-relaxed">
                WHERE INNOVATION MEETS TECHNOLOGY
              </p>
              <div className="w-16 xs:w-20 sm:w-20 md:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
            </div>
          </div>
          
          {/* Enhanced Countdown Timer - Reduced Spacing */}
          <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8 py-3">
            <CountdownTimer />
          </div>
          
          {/* AI/ML Bootcamp Announcement - Scrolling Text */}
          <div className="mb-4 sm:mb-6 overflow-hidden bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-500/30 rounded-xl py-2 sm:py-3">
            <div className="whitespace-nowrap animate-scroll">
              <span className="text-blue-300 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                🚀 UPCOMING: AI/ML BOOTCAMP - Dive deep into Machine Learning & Artificial Intelligence | 21st July - 25th July | Registered Team Must Attend !
              </span>
            </div>
          </div>
          
          {/* Event Info - Compact for Mobile */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
            {/* Registration Closing Notice - More Compact */}
            <div className="mb-2 sm:mb-4">
              {/* <div className="inline-block bg-red-900/40 backdrop-blur-sm border border-red-500/50 rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2">
                <span className="text-red-400 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="sm:hidden ">CLOSES MONDAY</span>
                  <span className="hidden sm:inline">REGISTRATION CLOSES ON MONDAY</span>
                </span>
              </div> */}
            </div>
            
            {/* Event Features - Mobile Stack with Better Space Utilization */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-y-4 xs:gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 text-slate-400 max-w-xs xs:max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base">Registration Closed</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-400 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base">48 Hour Hackathon</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-400 rounded-full"></div>
                <span className="text-xs sm:text-sm md:text-base">AI & Cyber Security</span>
              </div>
            </div>
            
            {/* Mobile-only CTA Button */}
            {/* <div className="sm:hidden pt-3">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2.5 rounded-xl font-semibold text-sm tracking-wider shadow-lg">
                REGISTER NOW
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;