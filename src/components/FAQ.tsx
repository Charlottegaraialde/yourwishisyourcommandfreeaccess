import React, { useState } from 'react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How can I access the audio files?",
      answer: "After entering the promo code 'YWIYC' on our access page, you'll receive immediate access to all 14 audio files, by email, which you can stream."
    },
    {
      question: "Are these really the secrets from ancient societies?",
      answer: "Yes. These teachings draw from various secret societies, like the Brotherhood or Skul and bones, that have been carefully guarded throughout history."
    },
    {
      question: "How long will I have access to the audios?",
      answer: "Once you've redeemed your access with the promo code, you'll have lifetime access to all 14 audio revelations."
    },
    {
      question: "How quickly will I see results?",
      answer: Tangible manifestations can begin appearing instantaneously if you start applying the material."
    },
    {
      question: "Is there any support available if I have questions?",
      answer: "Yes, you can contact me at charlottegaraialde@gmail.com."
    },
    {
      question: "Why are you sharing these secrets for free?",
      answer: "W The more people will know these secrets, the higher the level of conciousness will increase and the more vibration will increase on our planet.This will create, at some point, an energy tipping point and life will be better for everyone."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gold-400">Questions</span>
          </h2>
          <div className="h-1 w-24 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Everything you need to know about accessing the ancient wisdom
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gold-800/30 rounded-lg overflow-hidden"
            >
              <button 
                className={`w-full text-left p-5 flex justify-between items-center focus:outline-none ${
                  openIndex === index ? 'bg-navy-800' : 'bg-navy-900'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gold-200">{faq.question}</span>
                <span className="text-gold-400 transition-transform duration-200 transform ${
                  openIndex === index ? 'rotate-180' : ''
                }">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-5 bg-navy-800/60 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-gold-300 mb-6">
            Don't see your question? Reach out to our support team.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-transparent border border-gold-400 text-gold-400 rounded-md hover:bg-gold-400 hover:text-navy-950 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};