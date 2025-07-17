import React, { useState } from 'react';
import { Brain, Shield, Database, Globe, ChevronRight, Lightbulb, Target, Zap } from 'lucide-react';
import { theme } from '../theme';

const ProblemStatements = () => {
  const [activeTab, setActiveTab] = useState(0);

  const domains = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      problems: [
        {
          title: 'AI-powered Healthcare Diagnostics',
          description: 'Develop an intelligent system that can analyze medical images and provide preliminary diagnostic suggestions to healthcare professionals.',
          difficulty: 'Advanced',
          tags: ['Computer Vision', 'Deep Learning', 'Healthcare']
        },
        {
          title: 'Natural Language Processing for Education',
          description: 'Create an AI tutor that can understand student queries and provide personalized learning experiences.',
          difficulty: 'Intermediate',
          tags: ['NLP', 'Education', 'Personalization']
        },
        {
          title: 'Smart City Surveillance System',
          description: 'Build an intelligent monitoring system that can detect anomalies and ensure public safety in urban environments.',
          difficulty: 'Advanced',
          tags: ['Computer Vision', 'IoT', 'Security']
        }
      ]
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      problems: [
        {
          title: 'Advanced Threat Detection System',
          description: 'Design a real-time system that can identify and respond to sophisticated cyber attacks using machine learning.',
          difficulty: 'Advanced',
          tags: ['Machine Learning', 'Network Security', 'Real-time']
        },
        {
          title: 'Blockchain Identity Verification',
          description: 'Create a decentralized identity management system that ensures privacy while maintaining security.',
          difficulty: 'Intermediate',
          tags: ['Blockchain', 'Identity', 'Privacy']
        },
        {
          title: 'IoT Security Framework',
          description: 'Develop a comprehensive security solution for Internet of Things devices in smart homes and offices.',
          difficulty: 'Intermediate',
          tags: ['IoT', 'Framework', 'Smart Devices']
        }
      ]
    },
    {
      icon: Database,
      title: 'Data Science',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      problems: [
        {
          title: 'Climate Change Prediction Models',
          description: 'Build predictive models to forecast climate patterns and help in environmental decision-making.',
          difficulty: 'Advanced',
          tags: ['Machine Learning', 'Climate', 'Prediction']
        },
        {
          title: 'Financial Fraud Detection',
          description: 'Develop an intelligent system to detect fraudulent transactions in real-time financial systems.',
          difficulty: 'Intermediate',
          tags: ['Fraud Detection', 'Finance', 'Real-time']
        },
        {
          title: 'Social Media Sentiment Analysis',
          description: 'Create a comprehensive tool to analyze public sentiment from social media data for brand monitoring.',
          difficulty: 'Beginner',
          tags: ['NLP', 'Social Media', 'Analytics']
        }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      problems: [
        {
          title: 'Sustainable E-commerce Platform',
          description: 'Build an eco-friendly e-commerce solution that promotes sustainable shopping and carbon footprint tracking.',
          difficulty: 'Intermediate',
          tags: ['E-commerce', 'Sustainability', 'Web App']
        },
        {
          title: 'Real-time Collaboration Tools',
          description: 'Develop a comprehensive platform for remote team collaboration with advanced real-time features.',
          difficulty: 'Advanced',
          tags: ['Real-time', 'Collaboration', 'WebRTC']
        },
        {
          title: 'Accessibility-First Web App',
          description: 'Create a progressive web application that prioritizes accessibility and inclusive design principles.',
          difficulty: 'Intermediate',
          tags: ['Accessibility', 'PWA', 'Inclusive Design']
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-emerald-400 bg-emerald-500/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/10';
      case 'Advanced': return 'text-red-400 bg-red-500/10';
      default: return 'text-slate-400 bg-slate-500/10';
    }
  };

  return (
    <section id="problems" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font">
            <span className="gradient-text">PROBLEM</span> STATEMENTS
          </h2>
          <div className="cyber-divider mx-auto"></div>
          <p className="text-xl text-slate-300 mt-8 max-w-3xl mx-auto">
            Choose your challenge and build solutions that matter. Each problem is designed to push the boundaries of innovation.
          </p>
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {domains.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? `${domain.bgColor} ${domain.borderColor} border-2 ${domain.color}`
                    : 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${activeTab === index ? domain.color : ''}`} />
                <span className="font-medium">{domain.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Content */}
        <div className="mb-16">
          {domains.map((domain, domainIndex) => {
            if (domainIndex !== activeTab) return null;
            
            const IconComponent = domain.icon;
            return (
              <div key={domainIndex} className="space-y-8">
                {/* Domain Header */}
                <div className={`cyber-card p-8 ${domain.borderColor} border-2`}>
                  <div className="flex items-center justify-center mb-6">
                    <IconComponent className={`w-12 h-12 ${domain.color} icon-glow mr-4`} />
                    <h3 className="text-3xl font-bold text-white heading-font">{domain.title}</h3>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                      Explore cutting-edge challenges in {domain.title.toLowerCase()} that will test your skills and creativity.
                    </p>
                  </div>
                </div>

                {/* Problems Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {domain.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="cyber-card p-6 hover-lift group">
                      {/* Problem Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Target className={`w-5 h-5 ${domain.color} icon-glow`} />
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Problem Title */}
                      <h4 className="text-xl font-bold text-white mb-3 heading-font group-hover:text-cyan-400 transition-colors duration-300">
                        {problem.title}
                      </h4>

                      {/* Problem Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {problem.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {problem.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Hover Effect Indicator */}
                      <div className="mt-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Lightbulb className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-slate-400">Click to explore details</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="cyber-card p-8 max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 icon-glow" />
            <h3 className="text-2xl font-bold text-white mb-4 heading-font">Ready to Innovate?</h3>
            <p className="text-slate-300 mb-6">
              Choose your domain, form your team, and start building the future. Each challenge offers unique opportunities to showcase your skills.
            </p>
            <button className="cyber-button px-8 py-3 text-sm font-semibold tracking-wider">
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;