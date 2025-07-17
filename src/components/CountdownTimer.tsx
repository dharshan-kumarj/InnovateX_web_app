import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { theme } from '../theme';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cyber-card p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Clock className="w-8 h-8 text-cyan-400 mr-3 icon-glow" />
        <h3 className="text-2xl font-bold text-white heading-font">Event Countdown</h3>
      </div>
      
      <div className="text-center mb-4">
        <p className="text-purple-300 text-lg font-medium">September 1-3, 2025</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="countdown-digit">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 mono-font">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;