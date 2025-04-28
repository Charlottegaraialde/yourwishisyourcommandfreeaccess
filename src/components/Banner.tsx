import React from 'react';

export const Banner: React.FC = () => {
  return (
    <div className="bg-navy-950 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gold-400 text-sm md:text-base font-semibold">
            Limited Time Offer: Get Your Free Audio Collection Now!
          </div>
          <a 
            href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
            className="px-3 py-0.5 bg-gold-400 text-navy-950 rounded hover:bg-gold-300 transition-colors text-sm font-semibold whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access audios
          </a>
        </div>
      </div>
    </div>
  );
}; 