import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, ExternalLink, Github, Twitter, Linkedin, Calendar, Award, Users, Zap } from 'lucide-react';
import { theme } from '../theme';

const Footer = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate in INNOVATE-X?',
      answer: 'Students from all technical backgrounds are welcome. Whether you\'re a beginner or expert, our bootcamp will prepare you for the challenges ahead. No prior hackathon experience required!'
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, charger, and creativity! We provide meals, snacks, beverages, workspace, high-speed internet, and all necessary development tools. Just focus on building amazing solutions.'
    },
    {
      question: 'How are teams formed?',
      answer: 'You can register with your existing team (2-4 members) or join our team formation session on day one. We\'ll help match participants based on skills and interests to create balanced teams.'
    },
    {
      question: 'What are the prizes and benefits?',
      answer: 'Winners receive cash prizes up to $10,000, latest tech gadgets, mentorship opportunities, and internship offers from our partner companies. All participants get certificates and networking opportunities.'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'INNOVATE-X is completely free! This includes bootcamp training, hackathon participation, meals, workspace, and all materials. We believe innovation should be accessible to everyone.'
    },
    {
      question: 'What happens after the hackathon?',
      answer: 'Top projects get featured in our showcase, participants join our alumni network, and we provide continued mentorship. Many past participants have launched startups or secured internships through connections made here.'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Problems', href: '#problems' },
    { name: 'Teams', href: '#teams' },
    { name: 'Members', href: '#members' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Participants' },
    { icon: Award, value: '$50K+', label: 'Prize Pool' },
    { icon: Calendar, value: '3', label: 'Days Event' },
    { icon: Zap, value: '48h', label: 'Hackathon' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-purple-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid opacity-30"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <div className="py-16 px-4 border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="cyber-card p-6 hover-lift">
                      <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3 icon-glow" />
                      <div className="text-3xl font-bold text-white mb-2 heading-font">{stat.value}</div>
                      <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Brand & Description */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold heading-font mb-4">
                    <span className="gradient-text">INNOVATE-X</span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Empowering the next generation of innovators through cutting-edge technology challenges and collaborative learning experiences.
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 heading-font">Quick Links</h4>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <ChevronDown className="w-4 h-4 mr-2 rotate-[-90deg] group-hover:text-purple-400 transition-colors duration-300" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 heading-font">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <Phone className="w-5 h-5 text-cyan-400 mt-1 icon-glow" />
                    <div>
                      <p className="text-white font-semibold">Kevin Jerome</p>
                      <p className="text-slate-400 text-sm">Event Coordinator</p>
                      <a href="tel:+15551234567" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400 icon-glow" />
                    <a href="mailto:innovatex@university.edu" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                      innovatex@university.edu
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-400 mt-1 icon-glow" />
                    <div>
                      <p className="text-white font-medium">School of Computer Science</p>
                      <p className="text-slate-400 text-sm">University Campus, Building A</p>
                      <p className="text-slate-400 text-sm">Tech Innovation Center</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration QR */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 heading-font">Quick Registration</h4>
                <div className="cyber-card p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2 icon-glow" />
                      <div className="text-white text-xs font-mono">QR CODE</div>
                      <div className="text-slate-400 text-xs">SCAN HERE</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">Scan to register instantly</p>
                  <button className="cyber-button px-4 py-2 text-xs font-semibold tracking-wider w-full">
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 px-4 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold gradient-text heading-font mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-slate-400">Everything you need to know about INNOVATE-X</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-500/5 transition-all duration-300 group"
                  >
                    <span className="text-lg font-semibold text-white pr-4 group-hover:text-purple-300 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      {openFaq === index ? 
                        <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" /> : 
                        <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      }
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-slate-400 text-center md:text-left">
                <p>© 2025 INNOVATE-X. Organized by School of Computer Science and Technology,</p>
                <p>Division of Data Science and Cyber Security.</p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-slate-500">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-300 flex items-center">
                  Code of Conduct <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;