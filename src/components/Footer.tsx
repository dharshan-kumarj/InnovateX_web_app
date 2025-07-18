import { Phone, Mail, MapPin, ChevronDown, ExternalLink, Github, Twitter, Linkedin } from 'lucide-react';

// Import QR code image
import qrCodeImage from '../assets/images/QR/test_QR.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Problems', href: '#problems' },
    { name: 'Teams', href: '#teams' },
    // { name: 'Members', href: '#members' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative border-t border-purple-500/20">
      {/* Background Effects - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Brand & Description */}
              <div className="xs:col-span-2 md:col-span-2 lg:col-span-1">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold heading-font mb-3 sm:mb-4">
                    <span className="gradient-text">INNOVATE-X</span>
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    Empowering the next generation of innovators through cutting-edge technology challenges and collaborative learning experiences.
                  </p>
                </div>
                
                {/* Social Links */}
                {/* <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </a>
                    );
                  })}
                </div> */}
              </div>

              {/* Quick Links */}
              <div className="xs:col-span-1 md:col-span-1">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 md:mb-6 heading-font">Quick Links</h4>
                <div className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-slate-400 hover:text-white hover:translate-x-1 sm:hover:translate-x-2 transition-all duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 rotate-[-90deg] group-hover:text-purple-400 transition-colors duration-300" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="xs:col-span-1 md:col-span-1">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 md:mb-6 heading-font">Contact Info</h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3 group">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400 mt-1 icon-glow flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Kevin</p>
                      <p className="text-slate-400 text-xs sm:text-sm">Student Event Coordinator</p>
                      <a href="tel:+15551234567" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-xs sm:text-sm md:text-base">
                        9345639487
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3 group">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400 mt-1 icon-glow flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Deepak Kumar</p>
                      <p className="text-slate-400 text-xs sm:text-sm">Student Event Coordinator</p>
                      <a href="tel:+15551234567" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-xs sm:text-sm md:text-base">
                        9345429463
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400 icon-glow flex-shrink-0 mt-1" />
                    <a href="mailto:test@karunya.edu" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-xs sm:text-sm md:text-base break-all">
                      test@karunya.edu
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-400 mt-1 icon-glow flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm md:text-base">DSCS Department</p>
                      <p className="text-slate-400 text-xs sm:text-sm">University Campus, Building A</p>
                      {/* <p className="text-slate-400 text-xs sm:text-sm">Tech Innovation Center</p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration QR */}
              <div className="xs:col-span-2 md:col-span-2 lg:col-span-1">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 md:mb-6 heading-font">Quick Registration</h4>
                <div className="cyber-card p-3 sm:p-4 md:p-6 text-center max-w-sm mx-auto lg:max-w-none">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto mb-3 sm:mb-4 bg-white rounded-xl border border-purple-500/30 flex items-center justify-center overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                    <img 
                      src={qrCodeImage} 
                      alt="INNOVATE-X Registration QR Code" 
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* <p className="text-slate-400 text-xs sm:text-sm mb-2 sm:mb-3">Scan to register instantly</p>
                  <button className="cyber-button px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs font-semibold tracking-wider w-full hover:scale-105 transition-transform duration-300">
                    REGISTER NOW
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 py-4 sm:py-6 md:py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
              <div className="text-slate-400 text-center sm:text-left text-xs sm:text-sm">
                <p>© 2025 INNOVATE-X. Organized by Division of Data Science and Cyber Security.</p>
                {/* <p className="mt-1"></p> */}
              </div>
              {/* <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-2 sm:space-x-4 text-xs sm:text-sm text-slate-500">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-300 flex items-center">
                  Code of Conduct <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;