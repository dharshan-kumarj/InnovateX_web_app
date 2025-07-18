import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Zap } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is INNOVATE-X?",
      answer: "INNOVATE-X is a comprehensive 48-hour hackathon designed to challenge participants with real-world problems and innovative solutions. It brings together students, professionals, and tech enthusiasts to collaborate and create impactful projects."
    },
    // {
    //   question: "Who can participate?",
    //   answer: "The event is open to all students, professionals, and tech enthusiasts regardless of their experience level. We welcome individuals from all backgrounds - whether you're a beginner or an expert, there's a place for you in INNOVATE-X."
    // },
    {
      question: "What are the registration requirements?",
      answer: "Simply scan the QR code or register online with your basic details in the link Given below."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, and any personal items you might need. Don't forget your creativity and problem-solving mindset!"
    },
    {
      question: "Are there any prizes for the Hackathon winners?",
      answer: "Yes! Exciting cash prizes await the top teams: 🥇 1st Prize: ₹5,000 🥈 2nd Prize: ₹2,000"
    },
    {
      question: "How are teams formed?",
      answer: "You can form your own team with friends or classmates. Each team can have up to 3 members"
    },

    {
      question: "Will I get Skill Based Learning marks for participating in the Hackathon?",
      answer: "Yes! Participating students will earn Skill Based Learning marks under II Year – Data Science Ecosystem (23DC2020) & III Year – Either Full Stack Development (23DC2032) or Deep Learning (23DC2040)"
    },

  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Group FAQs into pairs for left-right layout
  const faqPairs = [];
  for (let i = 0; i < faqs.length; i += 2) {
    faqPairs.push([faqs[i], faqs[i + 1]].filter(Boolean));
  }

  const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => (
    <div className="cyber-card overflow-hidden hover-lift group h-fit transition-all duration-300">
      <div className="relative">
        <button
          onClick={() => toggleFaq(index)}
          className="w-full p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 text-left flex items-start justify-between hover:bg-purple-500/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg"
        >
          <div className="flex-1 pr-1 xs:pr-2 sm:pr-3 md:pr-4 lg:pr-5 xl:pr-6">
            <div className="flex items-center mb-1 xs:mb-2 sm:mb-3">
              <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-1 xs:mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                <span className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                {faq.question}
              </h3>
            </div>
          </div>
          <div className={`transition-all duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
            <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-purple-500/50 transition-colors duration-300">
              {openFaq === index ?
                <ChevronUp className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-purple-400" /> :
                <ChevronDown className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-purple-400" />
              }
            </div>
          </div>
        </button>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[600px] xs:max-h-[500px] sm:max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 pb-2 xs:pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-7 2xl:pb-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6"></div>
            <div className="flex items-start">
              <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-1 xs:mr-2 sm:mr-3 md:mr-4 mt-0.5 xs:mt-1 flex-shrink-0">
                <Zap className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-white" />
              </div>
              <p className="text-slate-300 leading-relaxed text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl flex-1">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="faq" className="relative py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
      {/* Background Elements - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Enhanced Section Header */}
          <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
            <div className="inline-block bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1 xs:py-2 sm:py-3 mb-3 xs:mb-4 sm:mb-6 md:mb-8">
              <span className="text-cyan-400 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider flex items-center justify-center">
                <HelpCircle className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-1 xs:mr-2" />
                <span className="whitespace-nowrap">FREQUENTLY ASKED QUESTIONS</span>
              </span>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 heading-font">
              <span className="gradient-text">GET</span> ANSWERS
            </h2>
            <div className="cyber-divider mx-auto mb-2 xs:mb-3 sm:mb-4 md:mb-6"></div>
            <p className="text-slate-400 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-3xl mx-auto leading-relaxed px-1 xs:px-2 sm:px-4 md:px-0">
              Everything you need to know about INNOVATE-X hackathon
            </p>
          </div>

          {/* FAQ Grid with Enhanced Responsiveness */}
          <div className="max-w-6xl mx-auto">
            <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
              {faqPairs.map((pair, pairIndex) => (
                <div key={pairIndex} className="grid grid-cols-1 md:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10">
                  {/* Left FAQ */}
                  <div className="w-full">
                    <FAQItem faq={pair[0]} index={pairIndex * 2} />
                  </div>

                  {/* Right FAQ */}
                  {pair[1] && (
                    <div className="w-full">
                      <FAQItem faq={pair[1]} index={pairIndex * 2 + 1} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
