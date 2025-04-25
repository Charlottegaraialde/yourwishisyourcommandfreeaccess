import React from 'react';

export const SecretKnowledge: React.FC = () => {
  return (
    <section id="about" className="py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-navy-950 opacity-90"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Knowledge They <span className="text-gold-400">Don't Want You to Know</span></h2>
          <div className="h-1 w-24 bg-gold-400 mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative rounded-lg overflow-hidden shadow-gold">
            <img 
              src="https://i.imgur.com/FcKWUmm.jpeg"
              alt="Ancient wisdom"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-navy-950/30"></div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Do you want more from life? A better job, better health, better relationships with your children, time for your family, a new home, more money or just feel good and fulfilled?
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Whatever you want, you can get it because you have your own Aladin's lamp.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            These 14 audios will reveal how you can be, do and have anything and everything you want.
            <br />
            This is exclusive information from which the masses have always been kept away, in order to remain slaves and never realize their dreams.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Are you ready to change your life and who you are?
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#audio-collection" 
            className="inline-block px-8 py-3 bg-transparent border-2 border-gold-400 text-gold-400 rounded-md font-semibold hover:bg-gold-400 hover:text-navy-950 transition-all"
          >
            Discover the Audio Collection
          </a>
        </div>
      </div>
    </section>
  );
};