import { Brain, Shield, Award, Users, Zap } from 'lucide-react';

const About = () => {

  const stats = [
    { icon: Users, value: '200+', label: 'Participants' },
    { icon: Award, value: '7k', label: 'Prize Pool' },
    { icon: Zap, value: '48h', label: 'Hackathon' }
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 px-4">
      {/* Background Elements - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 heading-font">
            <span className="gradient-text">ABOUT</span> INNOVATE-X
          </h2>
          <div className="cyber-divider mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-3 md:mb-4 heading-font">
              The Future of Innovation
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              INNOVATE-X is a revolutionary hackathon that brings together the brightest minds 
              in technology to solve real-world challenges. Organized by the School of Computer 
              Science and Technology, Division of Data Science and Cyber Security.
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Our vision is to create a platform where innovation meets execution, 
              where ideas transform into solutions that shape tomorrow's digital landscape.
            </p>
          </div>
          
          <div className="cyber-card p-6 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 md:space-x-4">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400 icon-glow flex-shrink-0" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white heading-font">AI & Machine Learning</h4>
                  <p className="text-slate-400 text-sm sm:text-base">Pushing the boundaries of artificial intelligence</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400 icon-glow flex-shrink-0" />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white heading-font">Cyber Security</h4>
                  <p className="text-slate-400 text-sm sm:text-base">Protecting the digital frontier</p>
                </div>
              </div>
              
              {/* <div className="flex items-center space-x-4">
                <Rocket className="w-8 h-8 text-emerald-400 icon-glow" />
                <div>
                  <h4 className="text-xl font-semibold text-white heading-font">Innovation</h4>
                  <p className="text-slate-400">Creating solutions for tomorrow</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-8 sm:py-12 md:py-16 px-4 border-t border-slate-800/50 mb-12 md:mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text heading-font mb-3 md:mb-4">
                Event Statistics
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">Numbers that define our impact</p>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="cyber-card p-4 sm:p-5 md:p-6 hover-lift">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400 mx-auto mb-2 md:mb-3 icon-glow" />
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2 heading-font">{stat.value}</div>
                      <div className="text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;