import React, { useState } from 'react';
import { Brain, Shield, Clock, Zap, ArrowRight, Target, Code, Lightbulb, Sparkles, Star, Hexagon } from 'lucide-react';
import { problems, problemStatementsConfig } from '../data/problemStatementsData';

const ProblemStatements = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const getDomainIcon = (domain: string) => {
    return domain === 'AI' ? Brain : Shield;
  };

  const getDomainColor = (domain: string) => {
    return domain === 'AI' ? 'text-purple-400' : 'text-cyan-400';
  };

  const getDomainBgColor = (domain: string) => {
    return domain === 'AI' ? 'bg-purple-400' : 'bg-cyan-400';
  };

  const getDomainGradient = (domain: string) => {
    return domain === 'AI' 
      ? 'from-purple-500/20 via-purple-400/10 to-transparent' 
      : 'from-cyan-500/20 via-cyan-400/10 to-transparent';
  };

  const getDomainAccent = (domain: string) => {
    return domain === 'AI' ? 'purple' : 'cyan';
  };

  // Coming Soon Component
  const ComingSoonContent = () => (
    <div className="text-center py-20">
      <div className="cyber-card p-12 max-w-3xl mx-auto">
        <Clock className="w-16 h-16 text-cyan-400 mx-auto mb-6 icon-glow" />
        <h3 className="text-3xl font-bold text-white mb-6 heading-font">
          <span className="gradient-text">COMING SOON</span>
        </h3>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          {problemStatementsConfig.comingSoonMessage}
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Actual Content Component with Redesigned Layout
  const ActualContent = () => (
    <>
      {/* Interactive Domain Filter */}
      <div className="flex justify-center mb-16">
        <div className="cyber-card p-2 bg-slate-900/50 backdrop-blur-sm">
          <div className="flex space-x-1">
            {['All', 'AI', 'Cyber Security'].map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain === 'All' ? null : domain)}
                className={`px-6 py-3 rounded-lg font-medium ${
                  selectedDomain === domain || (selectedDomain === null && domain === 'All')
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Statistics */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="cyber-card p-8 bg-slate-900/90 backdrop-blur-sm border border-purple-500/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Brain className="w-8 h-8 text-purple-400 icon-glow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white heading-font">AI Challenges</h3>
                <p className="text-purple-300 text-sm">Artificial Intelligence Domain</p>
              </div>
            </div>
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold text-purple-400 tabular-nums">
              {problems.filter(p => p.domain === 'AI').length}
            </span>
            <span className="text-slate-400 text-sm">Problems Available</span>
          </div>
        </div>

        <div className="cyber-card p-8 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Shield className="w-8 h-8 text-cyan-400 icon-glow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white heading-font">Security Challenges</h3>
                <p className="text-cyan-300 text-sm">Cyber Security Domain</p>
              </div>
            </div>
            <Target className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold text-cyan-400 tabular-nums">
              {problems.filter(p => p.domain === 'Cyber Security').length}
            </span>
            <span className="text-slate-400 text-sm">Problems Available</span>
          </div>
        </div>
      </div>

      {/* Problems Grid with Hexagonal Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {problems
          .filter(problem => !selectedDomain || problem.domain === selectedDomain)
          .map((problem, index) => {
            const IconComponent = getDomainIcon(problem.domain);
            const domainColor = getDomainColor(problem.domain);
            const domainBgColor = getDomainBgColor(problem.domain);
            const domainGradient = getDomainGradient(problem.domain);
            const domainAccent = getDomainAccent(problem.domain);
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index} 
                className={`relative group cursor-pointer transition-all duration-700 ${
                  isHovered ? 'scale-105 z-10' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                  transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {/* Animated Background Glow */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${domainGradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-700`}></div>
                
                {/* Main Card */}
                <div className="relative cyber-card p-8 bg-slate-900/95 backdrop-blur-sm border-2 border-slate-800/50 group-hover:border-slate-600/50 transition-all duration-700 h-full">
                  {/* Floating Hexagon */}
                  <div className="absolute -top-4 -right-4 opacity-20 group-hover:opacity-40 transition-all duration-700">
                    <Hexagon className={`w-12 h-12 ${domainColor} animate-spin`} style={{ animationDuration: '8s' }} />
                  </div>

                  {/* Problem Number with Animated Circle */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-60 transition-all duration-700">
                    <div className="relative">
                      <div className={`absolute inset-0 w-10 h-10 rounded-full ${domainBgColor} animate-ping opacity-30`}></div>
                      <div className={`relative w-10 h-10 rounded-full ${domainBgColor} flex items-center justify-center`}>
                        <span className="text-sm font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Domain Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`relative p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-all duration-500`}>
                      <div className={`absolute inset-0 bg-${domainAccent}-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                      <IconComponent className={`relative w-6 h-6 ${domainColor} icon-glow`} />
                    </div>
                    <div>
                      <span className={`text-sm font-semibold ${domainColor} tracking-wider`}>
                        {problem.domain}
                      </span>
                      <div className={`w-12 h-0.5 ${domainBgColor} mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </div>

                  {/* Problem Title */}
                  <h3 className="text-xl font-bold text-white mb-4 heading-font group-hover:text-cyan-400 transition-colors duration-500 leading-tight">
                    {problem.title}
                  </h3>

                  {/* Problem Description */}
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-500">
                    {problem.description}
                  </p>

                  {/* Interactive Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <Star className={`w-4 h-4 ${domainColor} group-hover:animate-pulse`} />
                      <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        Challenge Available
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect Wave */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Enhanced Call to Action with Particle Effects */}
      <div className="text-center">
        <div className="relative cyber-card p-16 max-w-5xl mx-auto bg-slate-900/95 backdrop-blur-sm border-2 border-slate-800/50 overflow-hidden">
          {/* Animated Particle Background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Floating Icons */}
          <div className="absolute top-8 left-8 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
            <Code className="w-12 h-12 text-purple-400" />
          </div>
          <div className="absolute top-8 right-8 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
            <Lightbulb className="w-12 h-12 text-yellow-400" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <Target className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="absolute bottom-8 right-8 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-12 h-12 text-purple-400" />
          </div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <Zap className="w-20 h-20 text-yellow-400 mx-auto mb-6 icon-glow animate-fade" />
              <h3 className="text-4xl font-bold text-white mb-4 heading-font">
                Ready to <span className="gradient-text">Innovate</span>?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join the next generation of innovators. Choose your domain, assemble your team, and create solutions that will shape the future of technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-4 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105">
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="tracking-wider">START YOUR JOURNEY</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Registration Open</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-600"></div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span>{problems.length} Challenges Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section id="problems" className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font">
            <span className="gradient-text">PROBLEM</span> STATEMENTS
          </h2>
          <div className="cyber-divider mx-auto"></div>
          <p className="text-xl text-slate-300 mt-8 max-w-3xl mx-auto">
            Choose your challenge and build solutions that matter. Each problem is designed to push the boundaries of innovation.
          </p>
        </div>

        {/* Conditional Rendering based on configuration */}
        {problemStatementsConfig.showActualData ? <ActualContent /> : <ComingSoonContent />}
      </div>
    </section>
  );
};

export default ProblemStatements;