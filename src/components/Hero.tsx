import React from 'react';

export const Hero: React.FC = () => {
  return (
    <>
      <section id="home" className="pt-32 sm:pt-48 md:pt-56 pb-16 sm:pb-24 md:pb-32 relative">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
          <div className="w-full max-w-4xl mx-auto text-center">
            <div className="mb-12 inline-block">
              <div className="text-gold-400 text-lg sm:text-xl md:text-2xl tracking-[0.2em] mb-4 font-extrabold font-serif break-words px-2 sm:px-4 md:px-0">
                SECRETS ON HOW TO MANIFEST YOUR DREAMS AND DESIRES REVEALED
              </div>
              <div className="h-0.5 w-24 bg-gold-400 mx-auto"></div>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-8 sm:mb-10 leading-tight sm:leading-[1.1] md:leading-[1.1] px-4 sm:px-4 md:px-0 mx-auto max-w-[90%] sm:max-w-full">
              <span className="text-white">Discover the Hidden Secrets of</span><br />
              <span className="text-gold-400">The Law of Attraction</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 mx-auto font-serif font-bold text-white text-center leading-snug">
              Revealing the secrets of manifestation<br />
              and success that has been hidden from<br />
              the public, for centuries, by the elite class.
            </p>
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a 
                  href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
                  className="w-full max-w-[280px] sm:max-w-[320px] sm:w-auto px-8 sm:px-10 py-4 bg-gold-400 text-navy-950 rounded hover:bg-gold-300 transition-colors text-xl sm:text-2xl font-black font-serif text-center border-2 border-gold-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Free Audios
                </a>
                <a 
                  href="#knowledge" 
                  className="w-full max-w-[280px] sm:max-w-[320px] sm:w-auto px-8 sm:px-10 py-4 border-2 border-gold-400 text-gold-400 rounded hover:bg-gold-400/10 transition-all text-xl sm:text-2xl font-black font-serif text-center"
                >
                  Learn More
                </a>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-gold-400 flex items-center justify-center animate-bounce mt-1">
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
          </div>
        </div>
      </section>
      <div className="py-24 sm:py-32 md:py-40">
        <img 
          src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg" 
          alt="Milky Way" 
          className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
        />
      </div>
    </>
  );
};