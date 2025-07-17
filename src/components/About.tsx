import React from 'react';
import { Brain, Shield, Rocket } from 'lucide-react';
import { theme } from '../theme';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font">
            <span className="gradient-text">ABOUT</span> INNOVATE-X
          </h2>
          <div className="cyber-divider mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 heading-font">
              The Future of Innovation
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              INNOVATE-X is a revolutionary hackathon that brings together the brightest minds 
              in technology to solve real-world challenges. Organized by the School of Computer 
              Science and Technology, Division of Data Science and Cyber Security.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our vision is to create a platform where innovation meets execution, 
              where ideas transform into solutions that shape tomorrow's digital landscape.
            </p>
          </div>
          
          <div className="cyber-card p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Brain className="w-8 h-8 text-purple-400 icon-glow" />
                <div>
                  <h4 className="text-xl font-semibold text-white heading-font">AI & Machine Learning</h4>
                  <p className="text-slate-400">Pushing the boundaries of artificial intelligence</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-cyan-400 icon-glow" />
                <div>
                  <h4 className="text-xl font-semibold text-white heading-font">Cyber Security</h4>
                  <p className="text-slate-400">Protecting the digital frontier</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Rocket className="w-8 h-8 text-emerald-400 icon-glow" />
                <div>
                  <h4 className="text-xl font-semibold text-white heading-font">Innovation</h4>
                  <p className="text-slate-400">Creating solutions for tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;