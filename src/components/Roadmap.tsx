import React, { useState, useEffect } from 'react';
import { Brain, Shield, Code, Trophy, Calendar, User, Plane, MapPin, Clock, Sparkles, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const Roadmap = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleCard = (index: number | null) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const bootcampWeeks = [
    {
      week: 1,
      title: 'AI/ML Bootcamp',
      dates: 'July 21-25, 2025',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      speaker: {
        name: 'Dr. Vigneshwaran',
        title: 'AI Research Scientist',
        expertise: 'Neural Networks & Deep Learning'
      },
      description: 'Dive deep into the world of artificial intelligence and machine learning with cutting-edge techniques and real-world applications.',
      position: isMobile ? { x: '20%', y: '20%' } : { x: '15%', y: '65%' },
    },
    {
      week: 2,
      title: 'Cyber Security',
      dates: 'Aug 8-14, 2025',
      icon: Shield,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      speaker: {
        name: 'Marcus Rodriguez',
        title: 'Senior Security Engineer at Microsoft',
        expertise: 'Penetration Testing & Security Architecture'
      },
      description: 'Master the art of cybersecurity with hands-on experience in defensive and offensive security techniques.',
      position: isMobile ? { x: '80%', y: '35%' } : { x: '38%', y: '30%' },
    },
    {
      week: 3,
      title: 'Full Stack Dev',
      dates: 'Aug 15-21, 2025',
      icon: Code,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400',
      bgGradient: 'from-emerald-500/10 to-green-500/10',
      speaker: {
        name: 'Alex Thompson',
        title: 'Lead Developer at Netflix',
        expertise: 'React, Node.js & Cloud Architecture'
      },
      description: 'Build scalable, modern web applications from frontend to backend with industry best practices.',
      position: isMobile ? { x: '20%', y: '60%' } : { x: '62%', y: '50%' },
    },
    {
      week: 4,
      title: 'Hackathon',
      dates: 'Aug 22-24, 2025',
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
      speaker: {
        name: 'Team of Mentors',
        title: 'Industry Experts & Judges',
        expertise: 'Cross-domain Guidance & Evaluation'
      },
      description: '48-hour intensive coding marathon where you apply everything learned to build innovative solutions.',
      position: isMobile ? { x: '80%', y: '75%' } : { x: '85%', y: '25%' },
    }
  ];

  return (
    <section id="roadmap" className="py-12 sm:py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-yellow-500/5 rounded-full blur-lg animate-pulse delay-3000"></div>
        
        {/* Twinkling stars effect */}
        <div className="stars">
          <div className="star" style={{top: '10%', left: '20%'}}></div>
          <div className="star" style={{top: '25%', left: '15%'}}></div>
          <div className="star" style={{top: '15%', left: '30%'}}></div>
          <div className="star" style={{top: '35%', left: '80%'}}></div>
          <div className="star" style={{top: '45%', left: '70%'}}></div>
          <div className="star" style={{top: '60%', left: '85%'}}></div>
          <div className="star" style={{top: '75%', left: '25%'}}></div>
          <div className="star" style={{top: '85%', left: '45%'}}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 heading-font">
            <span className="gradient-text">TECH FLIGHT PATH</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6">
            Your 4-week journey through the tech cosmos
          </p>
          <div className="cyber-divider mx-auto"></div>
        </div>

        {/* DESKTOP VIEW - Flight Path Design */}
        <div className="hidden md:block">
          <div className="relative h-[400px] lg:h-[450px] mb-10">
            {/* Flight Path SVG */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="flightPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="33%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="66%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Desktop Flight Path */}
              <path 
                className="flight-path"
                d="M -30 350 Q 250 100 380 180 Q 500 240 620 300 Q 700 400 1100 150" 
                stroke="url(#flightPathGradient)" 
                strokeWidth="4" 
                fill="none"
                strokeDasharray="12,8"
                filter="url(#glow)"
              />
            </svg>

            {/* Animated Plane */}
            <div className="absolute z-30">
              <div className="plane-animation">
                <div className="plane-container">
                  <Plane className="w-6 h-6 text-white transform drop-shadow-md" />
                  <div className="absolute -left-6 top-1 w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 plane-trail1"></div>
                  <div className="absolute -left-4 top-1 w-6 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40 plane-trail2"></div>
                  <div className="absolute -left-3 top-1 w-4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 plane-trail3"></div>
                  
                  {/* Sparkle effect */}
                  <div className="plane-sparkle absolute -right-1 -top-1">
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Destination Points */}
            {bootcampWeeks.map((week, index) => (
              <div 
                key={week.week}
                className="absolute group destination-point"
                style={{ 
                  left: week.position.x, 
                  top: week.position.y,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 20
                }}
              >
                {/* Destination Marker */}
                <div className={`relative w-12 h-12 rounded-full border-2 border-current ${week.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-gray-900/80 marker-glow`}>
                  <week.icon className={`w-5 h-5 ${week.color}`} />
                  
                  {/* Pulsing Ring */}
                  <div className={`absolute inset-0 w-full h-full rounded-full border border-current ${week.color} animate-ping opacity-30`}></div>
                  
                  {/* Week Number Badge */}
                  <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-gray-900 text-xs font-bold ${week.bgColor} shadow-lg shadow-${week.color}/20`}>
                    {week.week}
                  </div>
                </div>

                {/* Info Card - positioned to avoid overlays */}
                <div className={`absolute ${
                    index % 2 === 0 
                      ? '-left-16 top-0' 
                      : '-right-16 top-0'
                  } w-72 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto z-40 info-card-container`}>
                  <div className={`cyber-card p-4 bg-gradient-to-br ${week.bgGradient} border border-gray-700 hover:border-current/40 backdrop-blur-md shadow-xl info-card`}>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-bold ${week.color}`}>WEEK {week.week}</span>
                      <div className="flex items-center text-xs text-slate-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        {week.dates}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white mb-2 heading-font">
                      {week.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed line-clamp-2">
                      {week.description}
                    </p>

                    {/* Speaker */}
                    <div className="flex items-center mb-3 border-t border-gray-700/50 pt-2 mt-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${week.bgColor}`}>
                        <User className="w-3 h-3 text-gray-900" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold">{week.speaker.name}</p>
                        <p className="text-slate-400 text-xs">{week.speaker.title}</p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center">
                        <Clock className={`w-3 h-3 ${week.color} mr-1`} />
                        <span className="text-slate-400">
                          {week.week === 4 ? '48h Sprint' : '7 Days'}
                        </span>
                      </div>
                      
                      {/* Expertise tag */}
                      <div className={`px-2 py-0.5 rounded-full ${week.bgColor}/20 ${week.color} text-xs`}>
                        <Zap className="w-2 h-2 inline mr-1" />
                        {week.speaker.expertise.split(' & ')[0]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW - Vertical Timeline Design */}
        <div className="block md:hidden relative">
          {/* Vertical timeline line with gradient */}
          <div className="absolute left-4 top-5 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-yellow-500 rounded-full"></div>
          
          {/* Flying plane animation along the vertical path */}
          <div className="absolute left-4 z-40 mobile-plane-animation">
            <div className="translate-x-[-50%]">
              <Plane className="w-5 h-5 text-white transform rotate-90 drop-shadow-md" />
              <div className="absolute -top-6 left-1 h-8 w-0.5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50 plane-trail1"></div>
              <div className="absolute -top-4 left-1 h-6 w-0.5 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-40 plane-trail2"></div>
              <div className="absolute -top-3 left-1 h-4 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 plane-trail3"></div>
              
              {/* Sparkle effect */}
              <div className="plane-sparkle absolute -bottom-1 -right-1">
                <Sparkles className="w-3 h-3 text-cyan-300" />
              </div>
            </div>
          </div>
          
          {/* Timeline entries */}
          <div className="space-y-6 pl-10 pr-2 py-4">
            {bootcampWeeks.map((week, index) => (
              <div 
                key={week.week}
                className={`mobile-timeline-card ${activeCard === index ? 'active' : ''}`}
                onClick={() => handleToggleCard(index)}
              >
                {/* Timeline node */}
                <div className="absolute left-4 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full ${week.bgColor} flex items-center justify-center z-20`}>
                    <week.icon className="w-4 h-4 text-gray-900" />
                  </div>
                  
                  {/* Pulsing ring */}
                  <div className={`absolute w-8 h-8 rounded-full border border-current ${week.color} animate-ping opacity-30`}></div>
                  
                  {/* Week indicator */}
                  <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center bg-gray-900 text-[10px] font-bold ${week.color} border border-current`}>
                    {week.week}
                  </div>
                </div>
                
                {/* Card content */}
                <div className={`cyber-card relative overflow-hidden transition-all duration-300 bg-gradient-to-br ${week.bgGradient} border border-gray-700 backdrop-blur-md ${activeCard === index ? 'shadow-lg' : 'shadow'}`}>
                  {/* Collapsed header */}
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center">
                      <h3 className="text-base font-bold text-white heading-font mr-2">
                        {week.title}
                      </h3>
                      <div className={`px-1.5 py-0.5 rounded-full ${week.bgColor}/20 ${week.color} text-[10px]`}>
                        W{week.week}
                      </div>
                    </div>
                    
                    <div className={`${activeCard === index ? 'rotate-180' : ''} transition-transform duration-300`}>
                      <ChevronDown className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Expandable content */}
                  <div className={`transition-all duration-300 origin-top ${activeCard === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="p-3 pt-0">
                      {/* Date info */}
                      <div className="flex items-center text-xs text-slate-300 mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {week.dates}
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                        {week.description}
                      </p>
                      
                      {/* Speaker */}
                      <div className="flex items-center mb-3 border-t border-gray-700/50 pt-2 mt-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${week.bgColor}`}>
                          <User className="w-3 h-3 text-gray-900" />
                        </div>
                        <div>
                          <p className="text-white text-xs font-bold">{week.speaker.name}</p>
                          <p className="text-slate-400 text-xs">{week.speaker.title}</p>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center">
                          <Clock className={`w-3 h-3 ${week.color} mr-1`} />
                          <span className="text-slate-400">
                            {week.week === 4 ? '48h Sprint' : '7 Days'}
                          </span>
                        </div>
                        
                        <div className={`px-2 py-0.5 rounded-full ${week.bgColor}/20 ${week.color} text-xs`}>
                          <Zap className="w-2 h-2 inline mr-1" />
                          {week.speaker.expertise.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to action */}
        <div className="text-center mt-8">
          <div className="cyber-card p-4 sm:p-6 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 border-2 border-cyan-400/30 max-w-2xl mx-auto hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 heading-font">
              Ready for Takeoff?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-5">
              Join thousands of developers in this transformative 4-week experience
            </p>
            <button className="cyber-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 relative overflow-hidden group">
              <span className="relative z-10 text-sm sm:text-base">BOARD NOW</span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>

      {/* CSS for Animations */}
      <style>{`
        /* Plane Animation */
        .plane-animation {
          animation: flightPath 18s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        .mobile-plane-animation {
          animation: verticalFlightPath 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        .plane-trail1 {
          animation: trailFade 2s linear infinite;
        }
        
        .plane-trail2 {
          animation: trailFade 1.5s linear infinite;
        }
        
        .plane-trail3 {
          animation: trailFade 1s linear infinite;
        }
        
        .plane-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .flight-path {
          animation: pathGlow 4s ease-in-out infinite;
        }
        
        .marker-glow {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .destination-point:hover .marker-glow {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }
        
        .info-card {
          transform: perspective(1000px) rotateY(0deg);
          transition: transform 0.5s ease, opacity 0.3s ease;
        }
        
        .info-card-container:hover .info-card {
          transform: perspective(1000px) rotateY(5deg);
        }
        
        /* Mobile Timeline Card */
        .mobile-timeline-card {
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .mobile-timeline-card.active {
          transform: scale(1.02);
        }
        
        /* Enhanced Star effect */
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 4s infinite;
          opacity: 0.7;
        }
        
        .star:nth-child(odd) {
          animation-delay: 1s;
        }
        
        .star:nth-child(3n) {
          animation-delay: 2s;
        }
        
        .star:nth-child(5n) {
          animation-delay: 3s;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        
        @keyframes pathGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3)); }
          50% { filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)); }
        }
        
        @keyframes trailFade {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.5; }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(15deg); }
        }
        
        /* Desktop flight path animation */
        @keyframes flightPath {
          0% { 
            transform: translate(150px, 390px) rotate(0deg); 
            opacity: 0;
            scale: 0.7;
          }
          5% { 
            opacity: 1; 
            scale: 1;
          }
          24% { 
            transform: translate(350px, 190px) rotate(-25deg); 
          }
          25% { 
            transform: translate(380px, 180px) rotate(-20deg); 
          }
          26% { 
            transform: translate(400px, 185px) rotate(-15deg); 
          }
          49% { 
            transform: translate(600px, 290px) rotate(15deg); 
          }
          50% { 
            transform: translate(620px, 300px) rotate(20deg); 
          }
          51% { 
            transform: translate(640px, 305px) rotate(25deg); 
          }
          74% { 
            transform: translate(830px, 170px) rotate(-10deg); 
          }
          75% { 
            transform: translate(850px, 150px) rotate(-15deg); 
          }
          76% { 
            transform: translate(860px, 145px) rotate(-20deg); 
          }
          95% { 
            transform: translate(850px, 150px) rotate(0deg); 
            opacity: 1;
            scale: 1;
          }
          100% { 
            transform: translate(850px, 150px) rotate(0deg); 
            opacity: 0;
            scale: 0.7;
          }
        }

        /* Vertical flight path for mobile timeline */
        @keyframes verticalFlightPath {
          0% { 
            transform: translateY(0); 
            opacity: 0;
            scale: 0.7;
          }
          5% { 
            opacity: 1; 
            scale: 1;
          }
          20% { 
            transform: translateY(60px); 
          }
          25% { 
            transform: translateY(60px); 
          }
          45% { 
            transform: translateY(180px); 
          }
          50% { 
            transform: translateY(180px); 
          }
          70% { 
            transform: translateY(300px); 
          }
          75% { 
            transform: translateY(300px); 
          }
          90% { 
            transform: translateY(420px); 
          }
          95% { 
            transform: translateY(420px); 
            opacity: 1;
          }
          100% { 
            transform: translateY(420px); 
            opacity: 0;
            scale: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default Roadmap;