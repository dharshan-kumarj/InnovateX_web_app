import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

  return (
    <section id="faq" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid opacity-20"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text heading-font mb-3 sm:mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about INNOVATE-X hackathon
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {faqs.map((faq, index) => (
                <div key={index} className="cyber-card overflow-hidden hover-lift">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-4 sm:p-5 md:p-6 lg:p-7 text-left flex items-center justify-between hover:bg-purple-500/5 transition-all duration-300 group"
                  >
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white pr-3 sm:pr-4 md:pr-5 lg:pr-6 group-hover:text-purple-300 transition-colors duration-300 leading-relaxed">
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
                      {openFaq === index ? 
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" /> : 
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400" />
                      }
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 sm:px-5 md:px-6 lg:px-7 pb-4 sm:pb-5 md:pb-6 lg:pb-7">
                      <div className="w-full h-px bg-gradient-to-r from-purple-500/20 via-purple-500/40 to-purple-500/20 mb-3 sm:mb-4 md:mb-5"></div>
                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            {/* <div className="cyber-card p-4 sm:p-6 md:p-8 max-w-md mx-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 heading-font">
                Still have questions?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">
                Feel free to reach out to our team for any additional queries
              </p>
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4">
                <a 
                  href="mailto:test@karunya.edu" 
                  className="cyber-button px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-semibold tracking-wider hover:scale-105 transition-transform duration-300 flex-1"
                >
                  EMAIL US
                </a>
                <a 
                  href="tel:9345639487" 
                  className="cyber-button-outline px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-semibold tracking-wider hover:scale-105 transition-transform duration-300 flex-1"
                >
                  CALL NOW
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
