import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Zap } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your event date here
  const eventDate = new Date('2025-09-01T23:59:59').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const TimeBox = ({ value, label, color }: { value: number; label: string; color: string }) => (
    <div className="flex-1 min-w-0">
      <div className={`bg-slate-900/70 backdrop-blur-sm border-2 border-${color}-500/30 rounded-xl p-2 sm:p-3 md:p-4 lg:p-5 relative overflow-hidden hover:border-${color}-500/50 transition-all duration-300`}>
        {/* Decorative elements */}
        <div className={`absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-${color}-500 rounded-full opacity-50`}></div>
        <div className={`absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-${color}-400 rounded-full opacity-30`}></div>
        
        <div className="text-center relative z-10">
          <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-${color}-400 heading-font mb-1 sm:mb-2 leading-none`}>
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-slate-400 text-xs sm:text-sm md:text-base font-medium tracking-wider uppercase">
            {label}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-center w-full">
      {/* Compact Timer Header */}
      <div className="mb-3 sm:mb-4 md:mb-6">
        <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
          <span className="text-cyan-400 font-semibold tracking-wider text-xs sm:text-sm md:text-base">
            EVENT COUNTDOWN
          </span>
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
        </div>
      </div>

      {/* Compact Timer Display */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <TimeBox value={timeLeft.days} label="Days" color="cyan" />
        <TimeBox value={timeLeft.hours} label="Hours" color="purple" />
        <TimeBox value={timeLeft.minutes} label="Minutes" color="emerald" />
        <TimeBox value={timeLeft.seconds} label="Seconds" color="yellow" />
      </div>

      {/* Compact Timer Footer */}
      <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-slate-400">
        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm md:text-base">Until Innovation Begins</span>
        <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
      </div>
    </div>
  );
};

export default CountdownTimer;