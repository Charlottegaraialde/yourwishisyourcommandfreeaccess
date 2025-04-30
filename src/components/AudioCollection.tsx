import React from 'react';

export const AudioCollection: React.FC = () => {
  return (
    <section id="audio-collection" className="pt-0 pb-20">
      <div className="w-full max-w-3xl mx-auto text-center px-2">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          <span className="text-white">14 Life-Changing </span><span className="text-gold-400">Audio Revelations</span>
        </h2>
        <div className="h-1 w-24 bg-gold-400 mx-auto mb-4"></div>
        <p className="text-2xl md:text-4xl text-gray-300 leading-relaxed my-8 break-words font-bold">
          These powerful audios have transformed the lives of thousands of people worldwide. 
          Access them all for FREE with promo code <span className="text-gold-400 font-bold">YWIYC</span>
        </p>
        <div className="w-full md:max-w-3xl mx-auto border border-gold-800/50 rounded-lg p-8 px-2">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            <span className="text-white font-extrabold">Unlock the 14 Audios for </span><span className="text-gold-400">FREE</span>
          </h3>
          <p className="text-2xl md:text-4xl mb-6 text-gray-300 font-bold">
            Use the exclusive promo code below to get instant access<br />
            to all 14 audios, valued at $500.
          </p>
          <div className="bg-gold-400/10 border-2 border-dashed border-gold-400 rounded-md p-4 md:p-6 mb-6 max-w-sm mx-auto">
            <div className="text-lg text-gold-300 mb-2">YOUR PROMO CODE</div>
            <div className="text-3xl font-bold text-gold-400 tracking-widest">YWIYC</div>
          </div>
          <a 
            href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
            className="block w-full max-w-[400px] mx-auto bg-gold-400 text-navy-950 rounded-md font-bold text-xl md:text-2xl py-4 px-8 hover:bg-gold-300 transition-all shadow-lg mt-4 mb-2 font-serif"
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