import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 sm:pt-32 md:pt-48 pb-0 relative">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-2 py-8 md:py-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="text-gold-400 text-lg sm:text-xl md:text-2xl tracking-[0.2em] mb-2 font-extrabold font-serif break-words px-2 sm:px-4 md:px-0">
              SECRETS ON HOW TO MANIFEST YOUR DREAMS AND DESIRES REVEALED
            </div>
            <div className="h-0.5 w-24 bg-gold-400 mx-auto"></div>
          </div>
          <h1 className="text-white text-7xl sm:text-6xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight sm:leading-[1.1] md:leading-[1.1] px-2 sm:px-4 md:px-0">
            <span className="whitespace-nowrap text-white">Discover the Hidden Secrets</span><br />
            <span className="text-white">of </span><span className="text-gold-400">The law of attraction</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 max-w-2xl mx-auto font-serif font-bold text-white">
            The powerful knowledge that secret societies have guarded for centuries, within your reach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <a 
              href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
              className="w-full max-w-[280px] sm:w-auto px-8 py-3 bg-gold-400 text-navy-950 rounded hover:bg-gold-300 transition-colors text-xl sm:text-2xl font-extrabold font-serif text-center border-2 border-gold-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access Free Audios
            </a>
            <a 
              href="#knowledge" 
              className="w-full max-w-[280px] sm:w-auto px-8 py-3 border-2 border-gold-400 text-gold-400 rounded hover:bg-gold-400/10 transition-all text-xl sm:text-2xl font-extrabold font-serif text-center"
            >
              Learn More
            </a>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-12 h-12 rounded-full border-2 border-gold-400 flex items-center justify-center animate-bounce mx-auto">
              <svg 
                className="w-6 h-6 text-gold-400" 
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
          <div className="space-y-8 max-w-4xl mx-auto text-white">
            <p className="text-xl md:text-3xl font-serif font-bold">
              Do you want more from life? A better job, better health, better relationships with your children, time for your family, a new home, more money or just feel good and fulfilled?
            </p>
            <p className="text-xl md:text-3xl font-serif font-bold">
              Whatever you want, you can get it because you have your own Aladin's lamp.
            </p>
            <p className="text-xl md:text-3xl font-serif font-bold">
              These 14 audios will reveal how you can be, do and have anything and everything you want.
            </p>
            <p className="text-xl md:text-3xl font-serif font-bold">
              This is exclusive information from which the masses have always been kept away, in order to remain slaves and never realize their dreams.
            </p>
            <p className="text-xl md:text-3xl font-serif font-bold">
              Are you ready to change your life and who you are?
            </p>
          </div>
          <p className="text-white text-lg md:text-xl font-serif font-bold">
            These powerful have transformed the lives of thousands of people worldwide. Access them for FREE with the promo code <span className="text-gold-400">YWIYC</span>
          </p>
          <p className="text-base md:text-lg text-white mt-2 font-bold">
            Credit card required. Instant access by email, after entering promo code
          </p>
        </div>
      </div>
    </section>
  );
};