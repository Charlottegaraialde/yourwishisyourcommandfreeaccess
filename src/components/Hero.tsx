import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 md:pt-48 pb-0 relative">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="text-gold-400 text-base md:text-lg tracking-widest mb-2 font-bold whitespace-nowrap">SECRETS ON HOW TO MANIFEST YOUR DREAMS AND DESIRES REVEALED</div>
            <div className="h-0.5 w-24 bg-gold-400 mx-auto"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Hidden Secrets of <span className="text-gold-400">The law of attraction</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-16 text-gray-300 leading-relaxed">
            Revealing the secrets of manifestation and success that has been hidden<br />
            from the public, for centuries, by the elite class.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 -ml-16">
              <a 
                href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
                className="px-8 py-3 bg-gold-400 text-navy-950 rounded hover:bg-gold-300 transition-colors text-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Free Audios
              </a>
              <a 
                href="#about" 
                className="px-6 py-2 border-2 border-gold-400 text-gold-400 rounded hover:bg-gold-400/10 transition-all text-lg font-semibold"
              >
                Learn More
              </a>
            </div>
            
            <div className="w-12 h-12 rounded-full border-2 border-gold-400 flex items-center justify-center animate-bounce">
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
              className="text-gold-400 text-2xl font-bold hover:text-gold-300 whitespace-nowrap"
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