import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 sm:pt-32 md:pt-48 pb-0 relative">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-2 py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 inline-block">
            <div className="text-gold-400 text-sm sm:text-base md:text-lg tracking-[0.2em] mb-2 font-bold whitespace-nowrap px-2 sm:px-4 md:px-0">
              SECRETS ON HOW TO MANIFEST YOUR DREAMS AND DESIRES REVEALED
            </div>
            <div className="h-0.5 w-16 sm:w-24 bg-gold-400 mx-auto"></div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-[1.1] md:leading-[1.1] px-2 sm:px-4 md:px-0">
            <span className="block sm:inline">Discover the Hidden Secrets </span>
            <span className="block sm:inline">of <span className="text-gold-400">The law of attraction</span></span>
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl mb-8 sm:mb-16 text-gray-300 leading-relaxed px-2 sm:px-4 md:px-0">
            Revealing the secrets of manifestation and success that has been hidden<br className="hidden md:block" />
            from the public, for centuries, by the elite class.
          </p>
          
          <div className="flex flex-col items-center gap-4 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a 
                href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
                className="w-full max-w-xs sm:w-auto px-6 sm:px-8 py-3 bg-gold-400 text-navy-950 rounded hover:bg-gold-300 transition-colors text-base sm:text-lg font-bold text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Free Audios
              </a>
              <a 
                href="#about" 
                className="w-full max-w-xs sm:w-auto px-6 sm:px-8 py-3 border-2 border-gold-400 text-gold-400 rounded hover:bg-gold-400/10 transition-all text-base sm:text-lg font-bold text-center"
              >
                Learn More
              </a>
            </div>
            
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gold-400 flex items-center justify-center animate-bounce mt-2 sm:mt-0">
              <svg 
                className="w-4 h-4 text-gold-400" 
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

          <div className="bg-navy-900 p-4 rounded-lg border border-gold-400 shadow-gold my-8 inline-block">
            <a 
              href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd" 
              className="text-gold-400 text-lg sm:text-2xl font-bold hover:text-gold-300 whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover the Audio collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};