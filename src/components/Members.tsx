import { Users, Shield, Code } from 'lucide-react';

// Import images
import studentImage from '../assets/images/event_coordintors/student/kevin.png';
import dharshanImage from '../assets/images/club_coordinators/dharshan.jpg';
import bruno from '../assets/images/event_coordintors/student/bruno.png';
import deepak from '../assets/images/secretaries/deepak.png';
import rahul from '../assets/images/event_coordintors/student/rahul.jpg';
import aravindan from '../assets/images/club_coordinators/aravind.png';
import nadhish from '../assets/images/event_coordintors/student/nadish.png';
import regulla from '../assets/images/event_coordintors/student/Regulla .jpg';
import sanjay from '../assets/images/club_coordinators/sanjay.jpg';
import reshwin from '../assets/images/event_coordintors/student/Reshwin.jpg';

const Members = () => {
  type Coordinator = {
    name: string;
    role: string;
    image?: string;
    icon: typeof Users | typeof Shield | typeof Code;
    avatar?: string;
  };

  // First Row - Secretary (1 Card)
  const secretaryCoordinator: Coordinator[] = [
    {
      name: 'Bruno',
      role: 'Secretary',
      image: bruno,
      icon: Shield
    },{
      name: 'Kevin J',
      role: 'Co-Secretary',
      image: studentImage,
      icon: Shield
    },{
      name: 'Deepakumar',
      role: 'Joint Secretary',
      image: deepak,
      icon: Shield
    }
  ];

  // Second Row - Technical and Event Coordinators (4 Cards)
  const technicalEventCoordinators: Coordinator[] = [
    {
      name: 'Reshwin R S',
      role: 'Technical Coordinator',
      image: reshwin,
      icon: Code
    },
    {
      name: 'Rahul ',
      role: 'Joint Technical Coordinator',
      image: rahul,
      icon: Code
    },
    {
      name: 'Nadhish',
      role: 'Event Coordinator',
      image: nadhish,
      icon: Shield
    },
    {
      name: 'Regulla Mallika',
      role: 'Joint Event Coordinator', 
      image: regulla,
      icon: Shield
    }
  ];

  // Third Row - Club Coordinators (3 Cards)
  const clubCoordinators: Coordinator[] = [
    { name: 'Sanjay S', role: 'Co-ordinator - HackHive Club', image : sanjay , icon: Code },
    { name: 'Dharshan Kumar J', role: 'Co-ordinator - DotDev Club', image: dharshanImage, icon: Code },
    { name: 'Aravindan', role: 'Co-ordinator - Unbiased Club', image : aravindan , icon: Code }
  ];

  return (
    <section id="members" className="relative py-12 md:py-20 px-4">
      {/* Background Elements - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 heading-font">
            <span className="gradient-text">CORE</span> MEMBERS
          </h2>
          <div className="cyber-divider mx-auto"></div>
          <p className="text-lg md:text-xl text-slate-300 mt-6 md:mt-8 px-4">
            The minds behind INNOVATE-X
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Secretaries Section - First Row (3 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {secretaryCoordinator.map((coordinator, index) => (
              <div key={index} className="cyber-card p-4 md:p-6 text-center hover-lift member-card">
                <div className="relative mb-4 md:mb-6 mx-auto w-20 h-20 sm:w-24 sm:h-24">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {coordinator.image ? (
                        <img
                          src={coordinator.image}
                          alt={coordinator.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">{coordinator.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 heading-font">{coordinator.name}</h3>
                <p className="text-sm sm:text-base text-purple-400 mb-3 md:mb-4">{coordinator.role}</p>
                <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Technical and Event Coordinators Section - Second Row (4 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
            {technicalEventCoordinators.map((coordinator, index) => (
              <div key={index} className="cyber-card p-4 md:p-6 text-center hover-lift member-card">
                <div className="relative mb-4 md:mb-6 mx-auto w-20 h-20 sm:w-24 sm:h-24">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {coordinator.image ? (
                        <img
                          src={coordinator.image}
                          alt={coordinator.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">{coordinator.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 heading-font">{coordinator.name}</h3>
                <p className="text-sm sm:text-base text-purple-400 mb-3 md:mb-4">{coordinator.role}</p>
                <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Club Coordinators Section - Third Row (3 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {clubCoordinators.map((coordinator, index) => (
              <div key={index} className="cyber-card p-4 md:p-6 text-center hover-lift member-card">
                <div className="relative mb-4 md:mb-6 mx-auto w-20 h-20 sm:w-24 sm:h-24">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {coordinator.image ? (
                        <img
                          src={coordinator.image}
                          alt={coordinator.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">{coordinator.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 heading-font">{coordinator.name}</h3>
                <p className="text-sm sm:text-base text-purple-400 mb-3 md:mb-4">{coordinator.role}</p>
                <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;