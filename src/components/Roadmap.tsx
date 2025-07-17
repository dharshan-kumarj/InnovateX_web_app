import React from 'react';
import { BookOpen, Trophy, Brain, Shield, Database, Code } from 'lucide-react';
import { theme } from '../theme';

const Roadmap = () => {
  const bootcampDomains = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Master AI algorithms and neural networks',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Learn defensive and offensive security techniques',
      color: 'text-cyan-400'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Extract insights from complex datasets',
      color: 'text-pink-400'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build modern, scalable applications',
      color: 'text-emerald-400'
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font">
            <span className="gradient-text">ROADMAP</span>
          </h2>
          <div className="cyber-divider mx-auto"></div>
        </div>

        {/* Main roadmap timeline */}
        <div className="relative mb-20">
          <div className="cyber-timeline"></div>
          
          {/* Bootcamp Phase */}
          <div className="timeline-item left">
            <div className="cyber-card p-8 mb-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-purple-400 mr-4 icon-glow" />
                <h3 className="text-2xl font-bold text-white heading-font">BOOTCAMP PHASE</h3>
              </div>
              <p className="text-slate-300 text-lg">
                Intensive training across multiple domains to prepare participants 
                for the main hackathon challenge.
              </p>
            </div>
          </div>

          {/* Hackathon Phase */}
          <div className="timeline-item right">
            <div className="cyber-card p-8">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-cyan-400 mr-4 icon-glow" />
                <h3 className="text-2xl font-bold text-white heading-font">HACKATHON PHASE</h3>
              </div>
              <p className="text-slate-300 text-lg">
                48-hour intensive coding competition where teams build innovative 
                solutions to real-world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Bootcamp Domains Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text heading-font">
            BOOTCAMP DOMAINS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bootcampDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              return (
                <div key={index} className="cyber-card p-6 text-center hover-lift">
                  <IconComponent className={`w-12 h-12 ${domain.color} mx-auto mb-4 icon-glow`} />
                  <h4 className="text-xl font-bold text-white mb-3 heading-font">{domain.title}</h4>
                  <p className="text-slate-400">{domain.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;