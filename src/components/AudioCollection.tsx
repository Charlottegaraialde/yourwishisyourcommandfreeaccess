import React from 'react';

export const AudioCollection: React.FC = () => {
  return (
    <section id="audio-collection" className="pt-0 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            14 Life-Changing <span className="text-gold-400">Audio Revelations</span>
          </h2>
          <div className="h-1 w-24 bg-gold-400 mx-auto mb-4"></div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed my-8">
            These powerful audios have transformed the lives of thousands of people worldwide. 
            Access them all for FREE with promo code <span className="text-gold-400 font-bold">YWIYC</span>
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto border border-gold-800/50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Unlock the 14 Audios for <span className="text-gold-400">FREE</span></h3>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Use the exclusive promo code below to get instant access<br />
            to all 14 audios, valued at $500.
          </p>
          
          <div className="bg-gold-400/10 border-2 border-dashed border-gold-400 rounded-md p-4 md:p-6 mb-6 max-w-sm mx-auto">
            <div className="text-sm text-gold-300 mb-2">YOUR PROMO CODE</div>
            <div className="text-3xl font-bold text-gold-400 tracking-widest">YWIYC</div>
          </div>
          
          <a 
            href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
            className="inline-block px-8 py-4 bg-gold-400 text-navy-950 rounded-md font-bold text-lg hover:bg-gold-300 transition-all transform hover:scale-105 shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover the exclusive audio collection
          </a>
          
          <p className="text-sm text-gray-400 mt-4">
            Credit card required. Instant access by email, after entering promo code.
          </p>
        </div>
      </div>
    </section>
  );
};