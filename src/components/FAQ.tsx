import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Zap } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is INNOVATE-X?",
      answer: "INNOVATE-X is a comprehensive 48-hour hackathon designed to challenge participants with real-world problems and innovative solutions. It brings together students, professionals, and tech enthusiasts to collaborate and create impactful projects."
    },
    {
      question: "Who can participate?",
      answer: "The event is open to all students, professionals, and tech enthusiasts regardless of their experience level. We welcome individuals from all backgrounds - whether you're a beginner or an expert, there's a place for you in INNOVATE-X."
    },
    {
      question: "What are the registration requirements?",
      answer: "Simply scan the QR code or register online with your basic details. Teams can be formed during the event or you can register with your pre-formed team. All participants must be available for the full 48-hour duration."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, and any personal items you might need. We'll provide food, drinks, workspace, and all the technical infrastructure. Don't forget your creativity and problem-solving mindset!"
    },
    {
      question: "Are there any prizes?",
      answer: "Yes! We have exciting prizes for winners across different categories. Apart from monetary rewards, winners will receive certificates, internship opportunities, and networking chances with industry experts."
    },
    {
      question: "How are teams formed?",
      answer: "You can either register with your existing team or join as an individual. We'll have team formation sessions at the beginning of the event to help solo participants find teammates with complementary skills."
    }
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
    <div className="cyber-card overflow-hidden hover-lift group h-fit">
      <div className="relative">
        <button
          onClick={() => toggleFaq(index)}
          className="w-full p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 text-left flex items-start justify-between hover:bg-purple-500/5 transition-all duration-300"
        >
          <div className="flex-1 pr-2 xs:pr-3 sm:pr-4 md:pr-5 lg:pr-6">
            <div className="flex items-center mb-2 sm:mb-3">
              <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-2 xs:mr-3 sm:mr-4 flex-shrink-0">
                <span className="text-white text-xs sm:text-sm md:text-base font-bold">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                {faq.question}
              </h3>
            </div>
          </div>
          <div className={`transition-all duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-purple-500/50 transition-colors duration-300">
              {openFaq === index ? 
                <ChevronUp className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-purple-400" /> : 
                <ChevronDown className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-purple-400" />
              }
            </div>
          </div>
        </button>
        
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 pb-3 xs:pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-3 xs:mb-4 sm:mb-5 md:mb-6"></div>
            <div className="flex items-start">
              <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-2 xs:mr-3 sm:mr-4 mt-1 flex-shrink-0">
                <Zap className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              <p className="text-slate-300 leading-relaxed text-xs xs:text-sm sm:text-base md:text-lg flex-1">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="faq" className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Background Elements - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          {/* Enhanced Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-3 xs:px-4 sm:px-6 lg:px-8 py-2 sm:py-3 mb-4 sm:mb-6 md:mb-8">
              <span className="text-cyan-400 text-xs sm:text-sm lg:text-base font-semibold tracking-wider flex items-center">
                <HelpCircle className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 heading-font">
              <span className="gradient-text">GET</span> ANSWERS
            </h2>
            <div className="cyber-divider mx-auto mb-3 sm:mb-4 md:mb-6"></div>
            <p className="text-slate-400 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Everything you need to know about INNOVATE-X hackathon
            </p>
          </div>

          {/* FAQ Grid with 2 Columns (Left-Right Layout) */}
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
              {faqPairs.map((pair, pairIndex) => (
                <div key={pairIndex} className="grid grid-cols-1 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
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
