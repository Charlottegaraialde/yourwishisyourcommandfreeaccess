import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-24 relative">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')] bg-cover bg-center opacity-20"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-transparent opacity-90"></div>
      
      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="text-gold-400 text-sm tracking-widest mb-2">SECRETS ON HOW TO MANIFEST YOUR DREAMS AND DESIRES REVEALED</div>
            <div className="h-0.5 w-24 bg-gold-400 mx-auto"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Hidden Secrets of <span className="text-gold-400">The law of attraction</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
            The powerful knowledge that secret societies have guarded<br />
            for centuries, by the elite class, is now within your reach.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#access" 
                className="px-8 py-3 bg-gold-400 text-navy-950 rounded-md font-semibold hover:bg-gold-300 transition-all transform hover:scale-105 shadow-lg"
              >
                Access Free Audios
              </a>
              <a 
                href="#about" 
                className="px-8 py-3 border-2 border-gold-400 text-gold-400 rounded-md font-semibold hover:bg-gold-400/10 transition-all"
              >
                Learn More
              </a>
            </div>
            
            <div className="w-10 h-10 rounded-full border-2 border-gold-400 flex items-center justify-center animate-bounce">
              <svg 
                className="w-3 h-3 text-gold-400" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
          
          <p className="text-sm text-gold-200 mt-4">
            Credit card required. Instant access by email after entering promo code.
          </p>
        </div>
      </div>
    </section>
  );
};