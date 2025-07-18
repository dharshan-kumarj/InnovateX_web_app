import { Crown, Shield, Users, Code } from 'lucide-react';

// Import images
import hodImage from '../assets/images/HOD/GRACE MARY KANAGA.png';
import facultyImage from '../assets/images/event_coordintors/Faculty/V. Ebenezer.jpg';
import studentImage from '../assets/images/event_coordintors/student/kevin.jpeg';
import dharshanImage from '../assets/images/club_coordinators/dharshan.jpg';
import bruno from '../assets/images/secretaries/bruno.jpeg';
import deepak from '../assets/images/secretaries/deepak.png';

const Members = () => {
  // HOD (Head of Department)
  const hod = {
    name: 'Grace Mary Kanaga',
    role: 'Head of Department',
    image: hodImage,
    icon: Crown
  };

  // Faculty and Student Coordinators
  const coordinators = [
    {
      name: 'V. Ebenezer',
      role: 'Faculty Coordinator',
      image: facultyImage,
      icon: Shield
    },
    {
      name: 'Kevin',
      role: 'Student Coordinator',
      image: studentImage,
      icon: Shield
    }
  ];

  // Secretaries
  const secretaries = [
    { name: 'Bruno M', role: 'Secretary', image: bruno, icon: Users },
    { name: 'Deepak', role: 'Joint Secretary', image: deepak , icon: Users }
  ];

  // Club Coordinators
  const clubCoordinators = [
    { name: 'Rahul', role: 'Cyber Club Coordinator', avatar: 'R', icon: Code },
    { name: 'Arvindhan', role: 'Unbiased Club Coordinator', avatar: 'A', icon: Code },
    { name: 'Dharshan Kumar J', role: 'Web Development Club Coordinator', image: dharshanImage, icon: Code },
    { name: 'Priya Singh', role: 'Binary Bridges Coordinator', avatar: 'PS', icon: Code }
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
          {/* HOD Section */}
          <div className="flex justify-center px-4">
            <div className="cyber-card p-4 md:p-6 text-center hover-lift member-card w-full max-w-xs sm:max-w-sm">
              <div className="relative mb-4 md:mb-6 mx-auto w-20 h-20 sm:w-24 sm:h-24">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={hod.image} 
                      alt={hod.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1 sm:p-1.5">
                  <hod.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 heading-font">{hod.name}</h3>
              <p className="text-sm sm:text-base text-purple-400 mb-3 md:mb-4">{hod.role}</p>
              <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
            </div>
          </div>

          {/* Faculty and Student Coordinators Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            {coordinators.map((coordinator, index) => (
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
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1 sm:p-1.5">
                    <coordinator.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 heading-font">{coordinator.name}</h3>
                <p className="text-sm sm:text-base text-purple-400 mb-3 md:mb-4">{coordinator.role}</p>
                <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Secretaries Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            {secretaries.map((secretary, index) => (
              <div key={index} className="cyber-card p-4 md:p-6 text-center hover-lift member-card">
                <div className="relative mb-4 md:mb-6 mx-auto w-20 h-20 sm:w-24 sm:h-24">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {secretary.image ? (
                        <img 
                          src={secretary.image} 
                          alt={secretary.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">{secretary.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1 sm:p-1.5">
                    <secretary.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 heading-font">{secretary.name}</h3>
                <p className="text-sm sm:text-base text-purple-400 mb-3 md:mb-4">{secretary.role}</p>
                <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Club Coordinators Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
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
                          <span className="text-xl sm:text-2xl font-bold text-white">{coordinator.avatar || coordinator.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full p-1 sm:p-1.5">
                    <coordinator.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
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