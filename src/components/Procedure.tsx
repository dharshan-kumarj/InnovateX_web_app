import { CheckCircle, UserPlus, Calendar, Code, Trophy, ArrowRight, ListTodo } from 'lucide-react';

const Procedure = () => {
    const steps = [
        {
            icon: UserPlus,
            title: 'Register Online',
            description: 'Fill out the registration form with your basic details and team information (max 3 members per team).',
            color: 'purple'
        },
        {
            icon: Calendar,
            title: 'Attend Domain Bootcamp Session',
            description: 'Join the Bootcamp session as per your registered Domain as planned, to understand concepts to work on.. Full-Stack Bootcamp will be conducted for all participants.',
            color: 'purple'
        }, 
        {
            icon: ListTodo,
            title: 'Eligibility Check to Hackathon',
            description: 'ATTENDENCE is Mandatory for the Bootcamp session. Ensure your team meets the eligibility criteria to participate in the hackathon. ID cards will be scanned during the Bootcamp session for verification.',
            color: 'purple'
        },
        {
            icon: Code,
            title: 'Start Coding',
            description: 'Begin your 48-hour coding journey. Develop innovative solutions using any technology stack of your choice.',
            color: 'purple'
        },
        {
            icon: Trophy,
            title: 'Present & Win',
            description: 'Present your project to our expert panel of judges and compete for exciting prizes and recognition.',
            color: 'purple'
        },
        {
            icon: CheckCircle,
            title: 'Get Certified',
            description: 'Receive participation certificates and skill-based learning marks. Winners get additional recognition and prizes.',
            color: 'purple'
        }
    ];

    return (
        <section id="procedure" className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="cyber-grid"></div>
                <div className="floating-particles"></div>
            </div>

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        <div className="inline-block bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-3 xs:px-4 sm:px-6 lg:px-8 py-2 sm:py-3 mb-4 sm:mb-6 md:mb-8">
                            <span className="text-cyan-400 text-xs sm:text-sm lg:text-base font-semibold tracking-wider flex items-center">
                                <CheckCircle className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                                PROCEDURE TO ATTEND
                            </span>
                        </div>
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 heading-font">
                            <span className="gradient-text">HOW TO</span> PARTICIPATE
                        </h2>
                        <div className="cyber-divider mx-auto mb-3 sm:mb-4 md:mb-6"></div>
                        <p className="text-slate-400 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                            Follow these simple steps to join INNOVATE-X and showcase your innovation skills
                        </p>
                    </div>

                    {/* Procedure Steps */}
                    <div className="max-w-5xl mx-auto">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                            {steps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <div key={index} className="group">
                                        {/* Mobile Layout (Stacked) */}
                                        <div className="lg:hidden">
                                            <div className="cyber-card p-4 sm:p-5 md:p-6 hover-lift">
                                                <div className="flex items-start space-x-3 sm:space-x-4">
                                                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center`}>
                                                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center mb-2 sm:mb-3">
                                                            <span className={`text-${step.color}-400 text-sm sm:text-base md:text-lg font-bold mr-2 sm:mr-3`}>
                                                                {(index + 1).toString().padStart(2, '0')}.
                                                            </span>
                                                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white heading-font">
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Arrow for mobile (except last item) */}
                                            {index < steps.length - 1 && (
                                                <div className="flex justify-center py-3 sm:py-4">
                                                    <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 text-${step.color}-400 transform rotate-90`} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Desktop Layout (Alternating) */}
                                        <div className="hidden lg:block">
                                            <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 xl:gap-12`}>
                                                {/* Content */}
                                                <div className="flex-1">
                                                    <div className="cyber-card p-6 xl:p-8 hover-lift">
                                                        <div className="flex items-center mb-4 xl:mb-6">
                                                            <span className={`text-${step.color}-400 text-xl xl:text-2xl font-bold mr-3 xl:mr-4`}>
                                                                {(index + 1).toString().padStart(2, '0')}.
                                                            </span>
                                                            <h3 className="text-xl xl:text-2xl font-bold text-white heading-font">
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                        <p className="text-slate-300 text-lg xl:text-xl leading-relaxed">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Icon */}
                                                <div className="flex-shrink-0">
                                                    <div className={`w-20 h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                                                        <IconComponent className="w-10 h-10 xl:w-12 xl:h-12 text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Arrow for desktop (except last item) */}
                                            {index < steps.length - 1 && (
                                                <div className="flex justify-center py-6 xl:py-8">
                                                    <ArrowRight className={`w-6 h-6 xl:w-7 xl:h-7 text-${step.color}-400`} />
                                                </div>
                                            )}
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

export default Procedure;
