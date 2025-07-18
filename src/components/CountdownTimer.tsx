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
    <div className="relative flex-1 min-w-0">
      <div className={`cyber-card p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-slate-900/80 backdrop-blur-sm border-2 border-${color}-500/30 w-full`}>
        <div className={`absolute -top-1 xs:-top-1.5 sm:-top-2 -left-1 xs:-left-1.5 sm:-left-2 w-3 xs:w-4 sm:w-5 md:w-6 h-3 xs:h-4 sm:h-5 md:h-6 bg-${color}-500 rounded-full opacity-50`}></div>
        <div className={`absolute -bottom-1 xs:-bottom-1.5 sm:-bottom-2 -right-1 xs:-right-1.5 sm:-right-2 w-2 xs:w-3 sm:w-4 md:w-5 h-2 xs:h-3 sm:h-4 md:h-5 bg-${color}-400 rounded-full opacity-30`}></div>
        
        <div className="text-center relative">
          <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-${color}-400 heading-font mb-1 xs:mb-2 sm:mb-3 leading-none`}>
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-slate-400 text-xs xs:text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase">
            {label}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-center w-full">
      {/* Timer Header */}
      {/* <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8">
        <div className="inline-flex items-center space-x-2 xs:space-x-3 sm:space-x-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3">
          <Calendar className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-cyan-400" />
          <span className="text-cyan-400 font-semibold tracking-wider text-xs xs:text-sm sm:text-base md:text-lg">EVENT COUNTDOWN</span>
          <Zap className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-purple-400" />
        </div>
      </div> */}

      {/* Timer Display - Grid Layout for Equal Distribution */}
      <div className="grid grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 mb-4 xs:mb-5 sm:mb-6 md:mb-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto">
        <TimeBox value={timeLeft.days} label="Days" color="cyan" />
        <TimeBox value={timeLeft.hours} label="Hours" color="purple" />
        <TimeBox value={timeLeft.minutes} label="Minutes" color="emerald" />
        <TimeBox value={timeLeft.seconds} label="Seconds" color="yellow" />
      </div>

      {/* Timer Footer */}
      <div className="flex items-center justify-center space-x-2 xs:space-x-3 sm:space-x-4 text-slate-400">
        <Clock className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
        <span className="text-xs xs:text-sm sm:text-base md:text-lg">Until Innovation Begins</span>
        <div className="w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
      </div>
    </div>
  );
};

export default CountdownTimer;