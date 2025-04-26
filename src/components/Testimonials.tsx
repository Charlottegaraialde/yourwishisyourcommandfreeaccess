import { useEffect } from 'react';

interface VimeoPlayerProps {
  videoId: string;
  title: string;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId, title }) => {
  return (
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?h=d72bd53b78&badge=0&autopause=0&player_id=0&dnt=1`}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title={title}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

const Testimonials: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-navy-950 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lives and People <span className="text-gold-400">Transformed</span>
          </h2>
          <div className="h-1 w-24 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hear from those who have already experienced the power of these exclusive teachings.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <VimeoPlayer 
            videoId="1078516542" 
            title="YWIYC life changing testimonials" 
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;