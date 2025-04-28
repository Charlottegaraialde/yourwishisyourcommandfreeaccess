import React, { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-950 shadow-lg py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-0 sm:px-4 flex justify-between items-center">
        <div className="flex items-center -ml-8 sm:-ml-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-gold-400">
            YOUR WISH IS YOUR COMMAND
          </h1>
        </div>
        
        <div className="flex-1"></div>
        
        <nav className="hidden md:flex space-x-8 items-center pr-4">
          {['Home', 'About', 'Audio Collection', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg font-semibold text-gold-50 hover:text-gold-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd" 
            className="bg-gold-400 text-navy-950 px-6 py-2 rounded hover:bg-gold-300 transition-colors text-lg font-semibold"
          >
            Access Audios
          </a>
        </nav>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold-400 focus:outline-none pr-4"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-t border-gold-800">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              {['Home', 'About', 'Audio Collection', 'Testimonials'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-semibold text-gold-50 hover:text-gold-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
                className="bg-gold-400 text-navy-950 px-6 py-2 rounded hover:bg-gold-300 transition-colors inline-block text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Access Audios
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};