import { Users } from 'lucide-react';
import { teams } from '../data/teamsData';

const Teams = () => {
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
            const iconColor = team.domain === 'AI' ? 'text-purple-400' : 'text-cyan-400';
            const bgColor = team.domain === 'AI' ? 'bg-purple-400' : 'bg-cyan-400';
            
            return (
              <div key={index} className="cyber-card p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className={`w-8 h-8 ${iconColor} icon-glow`} />
                  <Users className="w-6 h-6 text-slate-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 heading-font">{team.name}</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${bgColor}`}></div>
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