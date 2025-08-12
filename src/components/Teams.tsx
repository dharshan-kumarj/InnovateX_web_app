// imports
import { useEffect, useState } from 'react';
import {
  Users,
  Brain,
  Shield,
  RefreshCw,
  AlertCircle,
  Loader2,
  Crown,
  LayoutDashboard
} from 'lucide-react';
import axios from 'axios';

interface Team {
  team_name: string;
  domains: string;
  team_leader: string;
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
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'cyber'>('all');

  const fetchTeams = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<ApiResponse>(
        'https://innovatex-backend-r6ie.onrender.com/teams'
      );
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

  useEffect(() => {
    fetchTeams();
    const id = setInterval(fetchTeams, 2 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const handleRefresh = () => fetchTeams();

  const getDomainIcon = (domain: string) => {
    const lower = domain.toLowerCase();
    if (lower.includes('ai') || lower.includes('ml')) return Brain;
    if (lower.includes('cyber') || lower.includes('security')) return Shield;
    return Users;
  };

  const getDomainColor = (domain: string) => {
    const lower = domain.toLowerCase();
    if (lower.includes('ai') || lower.includes('ml')) return 'text-purple-400';
    if (lower.includes('cyber') || lower.includes('security')) return 'text-cyan-400';
    return 'text-emerald-400';
  };

  const getDomainBgColor = (domain: string) => {
    const lower = domain.toLowerCase();
    if (lower.includes('ai') || lower.includes('ml')) return 'bg-purple-400';
    if (lower.includes('cyber') || lower.includes('security')) return 'bg-cyan-400';
    return 'bg-emerald-400';
  };

  const filteredTeams = teams.filter((team) => {
    const d = team.domains.toLowerCase();
    if (selectedFilter === 'ai') return d.includes('ai') || d.includes('ml');
    if (selectedFilter === 'cyber') return d.includes('cyber') || d.includes('security');
    return true;
  });

  const domainButtons = [
    { key: 'all', label: 'All', icon: LayoutDashboard },
    { key: 'ai', label: 'AI / ML', icon: Brain },
    { key: 'cyber', label: 'Cyber Security', icon: Shield },
  ];

  return (
    <section id="teams" className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-bold heading-font">
            <span className="gradient-text">Eligible</span> TEAMS
          </h2>
          <div className="cyber-divider mx-auto"></div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 text-slate-400 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>{loading ? 'Loading...' : `${filteredTeams.length} Teams Displayed`}</span>
            </div>
            {lastUpdated && (
              <div className="flex items-center space-x-2 text-xs">
                <RefreshCw className="w-3 h-3 text-emerald-400" />
                <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
            )}
          </div>
          <p className="text-lg text-slate-300 mt-4">
            Meet the innovators ready to change the world
          </p>
        </div>

        <div className="flex justify-center z-30 relative mb-12 -translate-y-6 flex-wrap gap-3">
          <div className="cyber-card p-2 bg-slate-900/50 backdrop-blur-sm rounded-xl">
            <div className="flex flex-wrap justify-center gap-2">
              {domainButtons.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setSelectedFilter(key as typeof selectedFilter)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${selectedFilter === key
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="cyber-card p-6 relative z-10">
          {loading && teams.length === 0 ? (
            <div className="text-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mx-auto mb-4" />
              <p className="text-slate-300">Fetching Eligible teams...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-4" />
              <p className="text-red-400">{error}</p>
              <button onClick={handleRefresh} className="cyber-button mt-4 px-4 py-2">
                Try Again
              </button>
            </div>
          ) : filteredTeams.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <p>No teams match this filter. Try a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeams.map((team, index) => {
                const Icon = getDomainIcon(team.domains);
                return (
                  <div
                    key={index}
                    className="cyber-card p-5 group relative hover-lift overflow-hidden"
                  >
                    <div className="absolute top-3 right-3 opacity-60">
                      <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-all">
                        <Icon className={`w-5 h-5 ${getDomainColor(team.domains)} icon-glow`} />
                      </div>
                      <Users className="w-4 h-4 text-slate-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {team.team_name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-1">
                      <Crown className="w-3 h-3 text-cyan-400" />
                      <span className="text-slate-300 text-sm truncate">{team.team_leader}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className={`w-3 h-3 rounded-full ${getDomainBgColor(team.domains)} animate-pulse`} />
                      <span className="text-slate-400 text-sm">{team.domains}</span>
                    </div>
                    <div className="text-xs text-slate-500 flex justify-between">
                      <span>Eligible Team</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span>Active</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-700" />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {!loading && !error && teams.length > 0 && (
          <p className="text-center text-slate-500 text-xs mt-6">
            Auto-refreshes every 2 minutes • Last refresh: {lastUpdated?.toLocaleTimeString()}
          </p>
        )}

        {/* <div className="text-center mt-12">
          <div className="cyber-card p-6 max-w-2xl mx-auto border-2 border-cyan-400/30 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 hover:shadow-cyan-500/10 hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Join?</h3>
            <p className="text-slate-300 mb-4">Register your team now and be part of the innovation revolution</p>
            <a
              href="https://tinyurl.com/InnovateXdscs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cyber-button px-6 py-2 text-white font-bold rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all hover:scale-105 hover:shadow-lg">
                REGISTER TEAM
              </button>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Teams;
