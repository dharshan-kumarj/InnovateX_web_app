import React from 'react';
import { User } from 'lucide-react';
import { theme } from '../theme';

const Members = () => {
  const members = [
    { name: 'Alex Chen', role: 'ML Engineer', avatar: 'AC' },
    { name: 'Sarah Kim', role: 'Security Analyst', avatar: 'SK' },
    { name: 'Michael Rodriguez', role: 'Data Scientist', avatar: 'MR' },
    { name: 'Emily Johnson', role: 'Full Stack Dev', avatar: 'EJ' },
    { name: 'David Park', role: 'AI Researcher', avatar: 'DP' },
    { name: 'Jessica Wang', role: 'Cybersecurity Expert', avatar: 'JW' },
    { name: 'Ryan Thompson', role: 'Backend Developer', avatar: 'RT' }
  ];

  // Custom layout: 1, 1, 2, 4 (but we only have 7 members, so we'll do 1, 1, 2, 3)
  const layout = [
    members.slice(0, 1),  // First row: 1 member
    members.slice(1, 2),  // Second row: 1 member
    members.slice(2, 4),  // Third row: 2 members
    members.slice(4, 7)   // Fourth row: 3 members
  ];

  const getGridCols = (rowIndex: number) => {
    switch(rowIndex) {
      case 0: return 'grid-cols-1';
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-2';
      case 3: return 'grid-cols-3';
      default: return 'grid-cols-1';
    }
  };

  return (
    <section id="members" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font">
            <span className="gradient-text">CORE</span> MEMBERS
          </h2>
          <div className="cyber-divider mx-auto"></div>
          <p className="text-xl text-slate-300 mt-8">
            The minds behind INNOVATE-X
          </p>
        </div>

        <div className="space-y-8">
          {layout.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid ${getGridCols(rowIndex)} gap-6 justify-center`}>
              {row.map((member, memberIndex) => (
                <div key={memberIndex} className="cyber-card p-8 text-center hover-lift member-card">
                  {/* Avatar */}
                  <div className="relative mb-6 mx-auto w-24 h-24">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{member.avatar}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-400 opacity-20"></div>
                  </div>
                  
                  {/* Member info */}
                  <h3 className="text-xl font-bold text-white mb-2 heading-font">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  
                  {/* Profile icon */}
                  <User className="w-6 h-6 text-slate-400 mx-auto icon-glow" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;