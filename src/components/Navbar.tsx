import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-gold-400 text-xl font-bold">Your wish is your command</a>
          </div>
          
          <div className="hidden md:block -ml-32">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-gold-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">About</a>
              <a href="#audio-collection" className="text-gray-300 hover:text-gold-400 transition-colors">Audio Collection</a>
              <a href="#testimonials" className="text-gray-300 hover:text-gold-400 transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-gold-400 transition-colors">FAQ</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-gold-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-gold-400 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-gold-400 transition-colors">About</a>
              <a href="#audio-collection" className="block px-3 py-2 text-gray-300 hover:text-gold-400 transition-colors">Audio Collection</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-gold-400 transition-colors">Testimonials</a>
              <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-gold-400 transition-colors">FAQ</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 