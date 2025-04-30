import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gold-800/30 pt-16 pb-8">
      <div className="w-full mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold tracking-wider text-gold-400 mb-4">YOUR WISH IS YOUR COMMAND</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revealing the secrets of manifestation and success that has been hidden<br />
              from the public, for centuries, by the elite class.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 px-4">
            <h4 className="text-lg font-semibold text-gold-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', link: '#home' },
                { name: 'About', link: '#about' },
                { name: 'Audio Collection', link: '#audio-collection' },
                { name: 'Testimonials', link: '#testimonials' },
                { name: 'Access Audios', link: 'https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold-800/30 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Wish Is Your Command Free Access. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};