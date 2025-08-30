import { useState, useEffect } from 'react';
import { Brain, Shield, Clock, Zap, ArrowRight, Target, Lightbulb, Sparkles, Star, Hexagon, X, FileText } from 'lucide-react';
import { problems, problemStatementsConfig } from '../data/problemStatementsData';

const ProblemStatements = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<any | null>(null);

  const openModal = (problem: any) => {
    setSelectedProblem(problem);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProblem(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProblem !== null) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProblem]);

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

  // Function to format text with bullet points
  const formatText = (text: string) => {
    // Split by bullet point indicators and clean up
    const parts = text.split(/[●•·]/).filter(part => part.trim() !== '');
    
    // If no bullet points found, return as paragraph
    if (parts.length <= 1) {
      return (
        <p className="text-slate-300 leading-relaxed whitespace-pre-line">
          {text.trim()}
        </p>
      );
    }

    // Format as bullet points
    return (
      <div className="space-y-3">
        {parts.map((part, index) => {
          const trimmedPart = part.trim();
          if (!trimmedPart) return null;
          
          // First part might be intro text before bullets
          if (index === 0 && !trimmedPart.includes(':') && trimmedPart.length > 100) {
            return (
              <p key={index} className="text-slate-300 leading-relaxed mb-4">
                {trimmedPart}
              </p>
            );
          }
          
          return (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-300 leading-relaxed flex-1">
                {trimmedPart}
              </p>
            </div>
          );
        })}
      </div>
    );
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
                onClick={() => openModal(problem)}
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

                  {/* Problem Description - Truncated */}
                  <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-500 line-clamp-3">
                    {problem.description.length > 120 
                      ? `${problem.description.substring(0, 120)}...` 
                      : problem.description
                    }
                  </p>

                  {/* Interactive Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <Star className={`w-4 h-4 ${domainColor} group-hover:animate-pulse`} />
                      <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        Click for full details
                      </span>
                    </div>
                    
                    {/* Click indicator */}
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-500 group-hover:text-slate-400">View More</span>
                      <ArrowRight className={`w-4 h-4 ${domainColor} transform group-hover:translate-x-1 transition-transform duration-300`} />
                    </div>
                  </div>

                  {/* Hover Effect Wave */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
                </div>
              </div>
            );
          })}
      </div>

      
    </>
  );

  return (
    <section id="problems" className="relative py-20 px-4">
      {/* Background Elements - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
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

      {/* Modal */}
      {selectedProblem !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl shadow-2xl animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-300 group"
            >
              <X className="w-5 h-5 text-slate-400 group-hover:text-white" />
            </button>

            {(() => {
              const IconComponent = getDomainIcon(selectedProblem.domain);
              const domainColor = getDomainColor(selectedProblem.domain);
              const domainBgColor = getDomainBgColor(selectedProblem.domain);
              const domainGradient = getDomainGradient(selectedProblem.domain);

              return (
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <div className={`p-4 bg-gradient-to-br ${domainGradient.replace('/20', '/30')} rounded-2xl`}>
                        <IconComponent className={`w-8 h-8 ${domainColor} icon-glow`} />
                      </div>
                      <div>
                        <span className={`text-sm font-semibold ${domainColor} tracking-wider`}>
                          {selectedProblem.domain}
                        </span>
                        <div className={`w-16 h-0.5 ${domainBgColor} mt-1`}></div>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 heading-font">
                      {selectedProblem.title}
                    </h2>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Description Section */}
                    <div className="space-y-6">
                      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <Sparkles className={`w-5 h-5 ${domainColor}`} />
                          <span>Description</span>
                        </h3>
                        <div className="text-slate-300 leading-relaxed">
                          {formatText(selectedProblem.description ?? '')}
                        </div>
                      </div>

                      {/* Challenge Section */}
                      <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <Target className="w-5 h-5 text-red-400" />
                          <span>Challenge</span>
                        </h3>
                        <div className="text-slate-300 leading-relaxed">
                          {formatText(selectedProblem.challenge ?? '')}
                        </div>
                      </div>
                    </div>

                    {/* Objective & Details */}
                    <div className="space-y-6">
                      {/* Objective Section */}
                      <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <Lightbulb className="w-5 h-5 text-green-400" />
                          <span>Objective</span>
                        </h3>
                        <div className="text-slate-300 leading-relaxed">
                          {formatText(selectedProblem.objective ?? '')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center mt-8 pt-6 border-t border-slate-700/50">
                    <button 
                      onClick={closeModal}
                      className="px-8 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:text-white rounded-xl font-semibold transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Modal Implementation */}
      {selectedProblem && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-2 sm:p-4">
          <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {(() => {
                    const IconComponent = getDomainIcon(selectedProblem.domain);
                    return (
                      <div className={`p-2 bg-slate-800/50 rounded-lg`}>
                        <IconComponent className={`w-5 h-5 ${getDomainColor(selectedProblem.domain)}`} />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                      {selectedProblem.title}
                    </h3>
                    <p className={`text-sm ${getDomainColor(selectedProblem.domain)} font-medium`}>
                      {selectedProblem.domain}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              {(() => {
                if (selectedProblem.domain === 'AI') {
                  // AI Layout - Only Title and Description
                  return (
                    <div className="space-y-6">
                      {/* Title Section */}
                      <div className="bg-gradient-to-r from-purple-900/20 via-purple-800/10 to-transparent rounded-lg p-4 sm:p-6 border border-purple-700/30">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-purple-500/20 rounded-lg">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-purple-400">Title</h4>
                        </div>
                        <h5 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                          {selectedProblem.title}
                        </h5>
                      </div>

                      {/* Description Section */}
                      <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-lg p-4 sm:p-6 border border-slate-600/50">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-blue-500/20 rounded-lg">
                            <FileText className="w-5 h-5 text-blue-400" />
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-blue-400">Description</h4>
                        </div>
                        <div className="text-slate-300 leading-relaxed text-sm sm:text-base">
                          {selectedProblem.description ? (
                            <p className="text-slate-300 leading-relaxed">
                              {selectedProblem.description}
                            </p>
                          ) : (
                            <p className="text-slate-400 italic">No description available</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  // Cyber Security Layout - Title, Description, and Challenge
                  return (
                    <div className="space-y-6">
                      {/* Title Section */}
                      <div className="bg-gradient-to-r from-cyan-900/20 via-cyan-800/10 to-transparent rounded-lg p-4 sm:p-6 border border-cyan-700/30">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-cyan-500/20 rounded-lg">
                            <Shield className="w-5 h-5 text-cyan-400" />
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-cyan-400">Title</h4>
                        </div>
                        <h5 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                          {selectedProblem.title}
                        </h5>
                      </div>

                      {/* Description and Challenge Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {/* Description */}
                        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-lg p-4 sm:p-6 border border-slate-600/50">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                              <FileText className="w-5 h-5 text-blue-400" />
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-blue-400">Description</h4>
                          </div>
                          <div className="text-slate-300 leading-relaxed text-sm sm:text-base">
                            {selectedProblem.description ? (
                              <p className="text-slate-300 leading-relaxed">
                                {selectedProblem.description}
                              </p>
                            ) : (
                              <p className="text-slate-400 italic">No description available</p>
                            )}
                          </div>
                        </div>

                        {/* Challenge */}
                        <div className="bg-gradient-to-r from-red-900/20 to-red-800/10 rounded-lg p-4 sm:p-6 border border-red-700/30">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-red-500/20 rounded-lg">
                              <Target className="w-5 h-5 text-red-400" />
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-red-400">Challenge</h4>
                          </div>
                          <div className="text-slate-300 leading-relaxed text-sm sm:text-base">
                            {selectedProblem.challenge ? (
                              <p className="text-slate-300 leading-relaxed">
                                {selectedProblem.challenge}
                              </p>
                            ) : (
                              <p className="text-slate-400 italic">No challenge specified</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Objective - If present */}
                      {selectedProblem.objective && (
                        <div className="bg-gradient-to-r from-green-900/20 to-green-800/10 rounded-lg p-4 sm:p-6 border border-green-700/30">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-green-500/20 rounded-lg">
                              <Lightbulb className="w-5 h-5 text-green-400" />
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-green-400">Objective</h4>
                          </div>
                          <div className="text-slate-300 leading-relaxed text-sm sm:text-base">
                            <p className="text-slate-300 leading-relaxed">
                              {selectedProblem.objective || 'No objective specified'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
              })()}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-700 text-center">
              <button
                onClick={closeModal}
                className="cyber-button px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-purple-500 w-full sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProblemStatements;