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
    <div className="relative">
      <div className={`cyber-card p-6 bg-slate-900/80 backdrop-blur-sm border-2 border-${color}-500/30 min-w-[100px]`}>
        <div className={`absolute -top-2 -left-2 w-6 h-6 bg-${color}-500 rounded-full opacity-50`}></div>
        <div className={`absolute -bottom-2 -right-2 w-4 h-4 bg-${color}-400 rounded-full opacity-30`}></div>
        
        <div className="text-center relative">
          <div className={`text-3xl md:text-4xl font-bold text-${color}-400 heading-font mb-2`}>
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-slate-400 text-sm font-medium tracking-wider uppercase">
            {label}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-center">
      {/* Timer Header */}
      <div className="mb-8">
        <div className="inline-flex items-center space-x-3 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3">
          <Calendar className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-semibold tracking-wider">EVENT COUNTDOWN</span>
          <Zap className="w-5 h-5 text-purple-400" />
        </div>
      </div>

      {/* Timer Display */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <TimeBox value={timeLeft.days} label="Days" color="cyan" />
        <TimeBox value={timeLeft.hours} label="Hours" color="purple" />
        <TimeBox value={timeLeft.minutes} label="Minutes" color="emerald" />
        <TimeBox value={timeLeft.seconds} label="Seconds" color="yellow" />
      </div>

      {/* Timer Footer */}
      <div className="flex items-center justify-center space-x-4 text-slate-400">
        <Clock className="w-4 h-4" />
        <span className="text-sm">Until Innovation Begins</span>
        <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
      </div>
    </div>
  );
};

export default CountdownTimer;