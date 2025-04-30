import React from 'react';

export const ManifestSection: React.FC = () => {
  return (
    <section className="pt-2 pb-0 relative">
      <div className="w-full mx-auto px-4">
        <div className="w-full md:max-w-3xl mx-auto text-center px-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-white">The Knowledge </span><span className="text-gold-400">They Don't Want You to Know</span>
          </h2>
          <div className="h-1 w-24 bg-gold-400 mx-auto mb-2"></div>
        </div>
        
        <div className="w-full md:max-w-3xl mx-auto text-center px-2">
          <div className="mb-4">
            <img 
              src="/images/hero-bg.jpg.jpg" 
              alt="Manifestation" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="text-gray-300 space-y-2 text-xl md:text-2xl mt-4">
            <p className="text-center text-gold-400">
              Do you want more from life?
            </p>
            <p>
              A better job, better health, better relationships with your children, time for your family, a new home, more money or just feel good and fulfilled?
            </p>
            <p>
              Whatever you want, you can get it because you have your own Aladin's lamp.
            </p>
            <p>
              These 14 audios will reveal how you can be, do and have anything and everything you want.
            </p>
            <p>
              This is exclusive information from which the masses have always been kept away, in order to remain slaves and never realize their dreams.
            </p>
            <p className="text-center text-gold-400 mb-0 pb-0">
              Are you ready to change your life and who you are?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 