import React from 'react';

export const AccessPage: React.FC = () => {
  return (
    <div id="access" className="min-h-screen bg-navy-950 text-gray-100 py-20">
      <div className="w-full max-w-3xl mx-auto text-center px-2">
        <div className="mx-auto px-4">
          <div className="w-full md:max-w-3xl mx-auto text-center px-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Access Your <span className="text-gold-400">Free Audios</span>
            </h1>
            <div className="h-1 w-24 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-300">
              Enter your promo code below to unlock all 14 audio revelations
            </p>
          </div>

          <div className="w-full md:max-w-md mx-auto bg-navy-900 rounded-lg p-8 px-2 shadow-gold">
            <div className="mb-8">
              <label htmlFor="promoCode" className="block text-gold-400 mb-2 text-base md:text-lg">
                Your Promo Code
              </label>
              <input
                type="text"
                id="promoCode"
                value="YWIYC"
                readOnly
                className="w-full bg-navy-800 border border-gold-400/30 rounded-md px-4 py-3 text-gold-400 text-center font-bold text-xl"
              />
            </div>

            <a
              href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
              className="block w-full bg-gold-400 text-navy-950 text-center py-4 rounded-md font-bold hover:bg-gold-300 transition-colors"
            >
              Access Your Audios Now
            </a>

            <p className="text-sm md:text-base text-gray-400 mt-4 text-center">
              Credit card required. Instant access by email after entering promo code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 