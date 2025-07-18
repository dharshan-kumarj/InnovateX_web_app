import { useEffect, useState } from 'react';
import { Users, Brain, Shield, RefreshCw, AlertCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

interface Team { 
  team_name: string; 
  domains: string; 
}

interface ApiResponse {
  success: boolean;
  count: number;
  teams: Team[];
}

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchTeams = async () => {
    setLoading(true);
    setError(null);
    try {
      // Update this URL to match your backend server
      const response = await axios.get<ApiResponse>('http://localhost:8000/teams');
      
      if (response.data.success) {
        setTeams(response.data.teams);
        setLastUpdated(new Date());
      } else {
        setError('Failed to fetch teams data');
      }
    } catch (e) {
      console.error('Fetch failed', e);
      setError(e instanceof Error ? e.message : 'Failed to fetch teams');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchTeams();
  };

  useEffect(() => {
    fetchTeams();
    // Update interval to 2 minutes as requested
    const id = setInterval(fetchTeams, 2 * 60 * 1000); // 2 min interval
    return () => clearInterval(id);
  }, []);

  const getDomainIcon = (domain: string) => {
    const domainLower = domain.toLowerCase();
    if (domainLower.includes('ai') || domainLower.includes('machine learning') || domainLower.includes('ml')) {
      return Brain;
    } else if (domainLower.includes('cyber') || domainLower.includes('security')) {
      return Shield;
    }
    return Users;
  };

  const getDomainColor = (domain: string) => {
    const domainLower = domain.toLowerCase();
    if (domainLower.includes('ai') || domainLower.includes('machine learning') || domainLower.includes('ml')) {
      return 'text-purple-400';
    } else if (domainLower.includes('cyber') || domainLower.includes('security')) {
      return 'text-cyan-400';
    }
    return 'text-emerald-400';
  };

  const getDomainBgColor = (domain: string) => {
    const domainLower = domain.toLowerCase();
    if (domainLower.includes('ai') || domainLower.includes('machine learning') || domainLower.includes('ml')) {
      return 'bg-purple-400';
    } else if (domainLower.includes('cyber') || domainLower.includes('security')) {
      return 'bg-cyan-400';
    }
    return 'bg-emerald-400';
  };

  return (
    <section id="teams" className="relative py-12 sm:py-16 md:py-20 px-4">
      {/* Background Elements - Same as other components */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 heading-font">
            <span className="gradient-text">REGISTERED</span> TEAMS
          </h2>
          <div className="cyber-divider mx-auto"></div>
          
          {/* Stats and Last Updated */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 text-slate-400">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">
                {loading ? 'Loading...' : `${teams.length} Teams Registered`}
              </span>
            </div>
            {lastUpdated && (
              <div className="flex items-center space-x-2 text-xs">
                <RefreshCw className="w-3 h-3 text-emerald-400" />
                <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
            )}
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 mt-4">
            Meet the innovators ready to change the world
          </p>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="cyber-button-outline px-4 py-2 text-sm font-medium flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Refreshing...' : 'Refresh Data'}</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="cyber-card p-4 sm:p-6 md:p-8">
          {/* Loading State */}
          {loading && teams.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 animate-spin mb-4" />
              <p className="text-slate-300 text-sm sm:text-base">Fetching registered teams...</p>
              <div className="mt-4 w-48 sm:w-64 bg-slate-700 rounded-full h-1">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-400 mb-4" />
              <p className="text-red-400 text-sm sm:text-base text-center mb-4">{error}</p>
              <button
                onClick={handleRefresh}
                className="cyber-button px-4 py-2 text-sm font-medium"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Success State */}
          {!loading && !error && (
            <>
              {teams.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-400 text-sm sm:text-base">No teams registered yet.</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2">Be the first to register!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {teams.map((team, index) => {
                    const IconComponent = getDomainIcon(team.domains);
                    const iconColor = getDomainColor(team.domains);
                    const bgColor = getDomainBgColor(team.domains);
                    
                    return (
                      <div
                        key={index}
                        className="cyber-card p-4 sm:p-6 hover-lift group relative overflow-hidden"
                      >
                        {/* Team Number Badge */}
                        <div className="absolute top-3 right-3 opacity-60">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {index + 1}
                          </div>
                        </div>

                        {/* Domain Icon and Status */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 sm:p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-all duration-500`}>
                              <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor} icon-glow`} />
                            </div>
                          </div>
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                        </div>

                        {/* Team Name */}
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 heading-font group-hover:text-cyan-400 transition-colors duration-500 leading-tight">
                          {team.team_name}
                        </h3>

                        {/* Domain Info */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-3 h-3 rounded-full ${bgColor} animate-pulse`}></div>
                          <span className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
                            {team.domains}
                          </span>
                        </div>

                        {/* Team Status */}
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>Registered Team</span>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>Active</span>
                          </div>
                        </div>

                        {/* Hover Effect Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-x-0 group-hover:scale-x-100"></div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* Auto-refresh indicator */}
        {!loading && !error && teams.length > 0 && (
          <div className="text-center mt-4">
            <p className="text-slate-500 text-xs">
              Auto-refreshes every 2 minutes • Last refresh: {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Never'}
            </p>
          </div>
        )}

        {/* Call to action for registration */}
        <div className="text-center mt-8">
          <div className="cyber-card p-6 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 border-2 border-cyan-400/30 max-w-2xl mx-auto hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 heading-font">
              Ready to Join?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Register your team now and be part of the innovation revolution
            </p>
            <a href='https://tinyurl.com/InnovateXdscs' target='_blank' rel='noopener noreferrer'>
              <button className="cyber-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-6 py-2 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 relative overflow-hidden group">
                <span className="relative z-10">REGISTER TEAM</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
