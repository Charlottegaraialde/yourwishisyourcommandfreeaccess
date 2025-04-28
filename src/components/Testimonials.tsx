import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lives and People <span className="text-gold-400">Transformed</span>
          </h2>
          <div className="h-1 w-24 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed whitespace-nowrap">
            Hear from those who have already experienced the power of these exclusive teachings.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe 
              src="https://player.vimeo.com/video/1078516542?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              title="YWIYC life changing testimonials"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};