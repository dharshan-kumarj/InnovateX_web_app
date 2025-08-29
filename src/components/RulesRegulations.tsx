import { Shield, Users, Code, Trophy, GitBranch, Award, AlertTriangle, Settings } from 'lucide-react';

const RulesRegulations = () => {
  const rulesData = [
    {
      id: 1,
      title: "Eligibility",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700/50",
      items: [
        "Participants are expected to bring their own laptops, chargers, and necessary tools."
      ]
    },
    {
      id: 2,
      title: "Code of Conduct",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700/50",
      items: [
        "Participants must adhere to ethical practices throughout the hackathon.",
        "Plagiarism is strictly prohibited. Projects should be original, and any use of existing code must be properly attributed.",
        "Respectful behavior is expected at all times. Misconduct, harassment, or disrespect towards peers, mentors, or organizers will lead to disqualification."
      ]
    },
    {
      id: 3,
      title: "Hackathon Process",
      icon: Code,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-700/50",
      items: [
        "Mentors will be available for guidance during the hackathon.",
        "Teams must commit code to a GitHub repository (with documentation) provided by the organizers.",
        "Intermediate checkpoints may be set by organizers to ensure progress.",
        "Each team must prepare and submit a PPT presentation of their project. The PPT should strictly adhere to the rules, be well-structured, and professionally formatted. Failure to submit or improper formatting may affect evaluation."
      ]
    },
    {
      id: 4,
      title: "Judging Criteria",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-700/50",
      subtitle: "Projects will be evaluated based on:",
      items: [
        "Innovation & Creativity (20 points)",
        "Relevance & Impact (10 points)",
        "Bootcamp Attendance (5 points)",
        "GitHub Repository & Documentation (5 points)",
        "Technical Implementation (25 points)",
        "User Experience & Design (15 points)",
        "Presentation & Communication (10 points)",
        "Feasibility & Scalability (10 points)"
      ],
      footer: "(Total: 100 points)"
    },
    {
      id: 5,
      title: "Intellectual Property",
      icon: GitBranch,
      color: "text-cyan-400",
      bgColor: "bg-cyan-900/20",
      borderColor: "border-cyan-700/50",
      items: [
        "All code developed during the hackathon belongs to the team that created it.",
        "Organizers may showcase the projects for promotional purposes (with due credit).",
        "Any use of third-party APIs, frameworks, or libraries must comply with their respective licenses."
      ]
    },
    {
      id: 6,
      title: "Prizes & Recognition",
      icon: Award,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-700/50",
      items: [
        "Winners will be announced at the closing ceremony after the final evaluation.",
        "Prizes are non-transferable and must be collected within the specified time.",
        "Organizers reserve the right to withhold a prize in case of any violation of rules."
      ]
    },
    {
      id: 7,
      title: "Disqualification Grounds",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-700/50",
      subtitle: "A team may be disqualified if:",
      items: [
        "They plagiarize or copy an existing solution without attribution.",
        "They engage in unfair practices such as sabotage or tampering.",
        "They fail to comply with submission deadlines.",
        "They violate the code of conduct."
      ]
    },
    {
      id: 8,
      title: "Organizers' Rights",
      icon: Settings,
      color: "text-pink-400",
      bgColor: "bg-pink-900/20",
      borderColor: "border-pink-700/50",
      items: [
        "The InnovateX team reserves the right to modify rules, schedules, or judging criteria if necessary.",
        "The decision of the judges will be final and binding."
      ]
    }
  ];

  return (
    <section id="rules" className="relative py-12 md:py-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 heading-font">
            <span className="gradient-text">RULES &</span> REGULATIONS
          </h2>
          <div className="cyber-divider mx-auto"></div>
          <p className="text-lg md:text-xl text-slate-300 mt-6 md:mt-8 px-4 max-w-3xl mx-auto">
            InnovateX Hackathon Guidelines - Please read carefully to ensure a fair and competitive environment
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {rulesData.map((rule, index) => {
            const IconComponent = rule.icon;
            
            return (
              <div
                key={rule.id}
                className={`relative group ${rule.bgColor} ${rule.borderColor} border rounded-2xl p-6 md:p-8 hover-lift transition-all duration-500`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-all duration-300`}>
                    <IconComponent className={`w-6 h-6 ${rule.color} icon-glow`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      {/* <span className={`text-sm font-bold ${rule.color} px-2 py-1 bg-slate-800/50 rounded-lg`}>
                        {rule.id.toString().padStart(2, '0')}
                      </span> */}
                      <h3 className="text-xl md:text-2xl font-bold text-white heading-font">
                        {rule.title}
                      </h3>
                    </div>
                    {rule.subtitle && (
                      <p className="text-slate-400 mt-2 text-sm">
                        {rule.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {rule.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 ${rule.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                      <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                {rule.footer && (
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <p className={`text-center font-bold ${rule.color} text-lg`}>
                      {rule.footer}
                    </p>
                  </div>
                )}

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 ${rule.borderColor} rounded-tr-xl opacity-60`}></div>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="mt-12 md:mt-16">
          <div className="cyber-card p-6 md:p-8 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20 border-2 border-red-700/50">
            <div className="flex items-center space-x-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-white heading-font">
                Important Notice
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-center">
              By participating in the InnovateX Hackathon, you acknowledge that you have read, understood, 
              and agree to comply with all the above rules and regulations. Violation of any rule may result 
              in immediate disqualification from the competition.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        
      </div>
    </section>
  );
};

export default RulesRegulations;
