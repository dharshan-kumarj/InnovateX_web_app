import React from 'react';
import { Users, Brain, Shield, Database, Globe } from 'lucide-react';
import { theme } from '../theme';

const Teams = () => {
  const teams = [
    { name: 'Neural Networks', domain: 'AI/ML', icon: Brain, color: 'text-purple-400' },
    { name: 'Cyber Guardians', domain: 'Cyber Security', icon: Shield, color: 'text-cyan-400' },
    { name: 'Data Miners', domain: 'Data Science', icon: Database, color: 'text-pink-400' },
    { name: 'Code Crusaders', domain: 'Web Dev', icon: Globe, color: 'text-emerald-400' },
    { name: 'Algorithm Architects', domain: 'AI/ML', icon: Brain, color: 'text-purple-400' },
    { name: 'Security Sentinels', domain: 'Cyber Security', icon: Shield, color: 'text-cyan-400' },
    { name: 'Insight Innovators', domain: 'Data Science', icon: Database, color: 'text-pink-400' },
    { name: 'Frontend Fighters', domain: 'Web Dev', icon: Globe, color: 'text-emerald-400' },
    { name: 'ML Mavericks', domain: 'AI/ML', icon: Brain, color: 'text-purple-400' },
    { name: 'Crypto Defenders', domain: 'Cyber Security', icon: Shield, color: 'text-cyan-400' },
    { name: 'Pattern Pioneers', domain: 'Data Science', icon: Database, color: 'text-pink-400' },
    { name: 'Stack Strategists', domain: 'Web Dev', icon: Globe, color: 'text-emerald-400' }
  ];

  return (
    <section id="teams" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font">
            <span className="gradient-text">REGISTERED</span> TEAMS
          </h2>
          <div className="cyber-divider mx-auto"></div>
          <p className="text-xl text-gray-300 mt-8">
            Meet the innovators ready to change the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => {
            const IconComponent = team.icon;
            return (
              <div key={index} className="cyber-card p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className={`w-8 h-8 ${team.color} icon-glow`} />
                  <Users className="w-6 h-6 text-slate-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 heading-font">{team.name}</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${team.color.replace('text-', 'bg-')}`}></div>
                  <span className="text-slate-400 text-sm font-medium">{team.domain}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;