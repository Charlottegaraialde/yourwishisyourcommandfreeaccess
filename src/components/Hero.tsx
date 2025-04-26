import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Your Wish Is Your <span className="text-gold-400">Command</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Access 14 powerful law of attraction audio revelations for free. Transform your life with ancient manifestation secrets that have been hidden for centuries.
        </p>
        <div className="flex justify-center">
          <a
            href="#testimonials"
            className="bg-gold-400 text-navy-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-300 transition-colors shadow-gold"
          >
            Get Free Access
          </a>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-gold-400" />
          </div>
        </div>
      </div>
    </section>
  );
};