import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Loader2, RefreshCw, AlertCircle, Users, Trophy } from 'lucide-react';

// Replace the SHEET_URL with the correct format
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1I7ddC_ij6L0fnkowLMBjxiZzKF7eICEktYobUXpPCVI/export?format=csv&gid=1893068366';

interface RowData {
  Team_Name: string;
  DOMAIN: string;
  // Add more if needed
}

const SheetData: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = async () => {
    try {
      setError(null);
      
      Papa.parse(SHEET_URL, {
        download: true,
        header: true,
        complete: (results) => {
          if (results.errors.length > 0) {
            setError('Error parsing data: ' + results.errors[0].message);
            setLoading(false);
            return;
          }
          
          const filteredData = (results.data as RowData[]).filter(
            row => row.Team_Name && row.Team_Name.trim() !== ''
          );
          
          setData(filteredData);
          setLastUpdated(new Date());
          setLoading(false);
        },
        error: (error) => {
          setError('Failed to fetch data: ' + error.message);
          setLoading(false);
        }
      });
    } catch (err) {
      setError('Network error occurred');
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000); // every 1 min
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-4">
      {/* Background Elements - Same as other components */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 heading-font">
            <span className="gradient-text">REGISTERED</span> TEAMS
          </h2>
          <div className="cyber-divider mx-auto"></div>
          
          {/* Stats and Last Updated */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 text-slate-400">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-sm">
                {loading ? 'Loading...' : `${data.length} Teams Registered`}
              </span>
            </div>
            {lastUpdated && (
              <div className="flex items-center space-x-2 text-xs">
                <RefreshCw className="w-3 h-3 text-emerald-400" />
                <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
            )}
          </div>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="cyber-button-outline px-4 py-2 text-sm font-medium flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Refreshing...' : 'Refresh Data'}</span>
          </button>
        </div>

        {/* Content */}
        <div className="cyber-card p-4 sm:p-6 md:p-8">
          {/* Loading State */}
          {loading && (
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
              {data.length === 0 ? (
                <div className="text-center py-12">
                  <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-400 text-sm sm:text-base">No teams registered yet.</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2">Be the first to register!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {data.map((row, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 sm:p-4 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                            {row.Team_Name}
                          </h3>
                          <p className="text-slate-400 text-xs sm:text-sm truncate">
                            {row.DOMAIN}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Auto-refresh indicator */}
        {!loading && !error && (
          <div className="text-center mt-4">
            <p className="text-slate-500 text-xs">
              Auto-refreshes every minute • Last refresh: {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Never'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SheetData;
