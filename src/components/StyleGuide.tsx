import React from 'react';
import CopyableContent from './CopyableContent';

const StyleGuide: React.FC = () => {
  const typography = [
    { name: 'Logo', class: 'text-2xl font-bold text-gold-400', description: 'Cormorant Garamond, bold, 1.5rem' },
    { name: 'Menu Items', class: 'text-base text-gold-50 hover:text-gold-400', description: 'Cormorant Garamond, 1rem' },
    { name: 'Access Audios Button', class: 'text-base font-semibold text-navy-950 bg-gold-400 hover:bg-gold-300', description: 'Cormorant Garamond, semibold, 1rem' },
    { name: 'Hero Small Text', class: 'text-sm text-gold-400 tracking-widest', description: 'Cormorant Garamond, 0.875rem' },
    { name: 'Hero Title', class: 'text-4xl md:text-6xl font-bold text-white', description: 'Cormorant Garamond, bold, 2.25rem/3.75rem' },
    { name: 'Hero Subtitle', class: 'text-xl md:text-2xl text-gray-300', description: 'Cormorant Garamond, 1.25rem/1.5rem' },
    { name: 'Section Title', class: 'text-3xl md:text-4xl font-bold text-white', description: 'Cormorant Garamond, bold, 1.875rem/2.25rem' },
    { name: 'Main Text', class: 'text-lg text-gray-300 leading-relaxed', description: 'Cormorant Garamond, 1.125rem' },
    { name: 'Collection Tag', class: 'text-xs text-gold-400 tracking-widest uppercase', description: 'Cormorant Garamond, 0.75rem' },
    { name: 'Promo Code', class: 'text-3xl font-bold text-gold-400 tracking-widest', description: 'Cormorant Garamond, bold, 1.875rem' },
    { name: 'Footer Title', class: 'text-2xl font-bold text-gold-400 tracking-wider', description: 'Cormorant Garamond, bold, 1.5rem' },
    { name: 'Footer Links', class: 'text-base text-gray-400 hover:text-gold-400', description: 'Cormorant Garamond, 1rem' },
  ];

  const colors = [
    { name: 'Navy 950', class: 'bg-navy-950', text: 'text-white', hex: '#050a17' },
    { name: 'Navy 900', class: 'bg-navy-900', text: 'text-white', hex: '#091328' },
    { name: 'Navy 800', class: 'bg-navy-800', text: 'text-white', hex: '#0f1c3a' },
    { name: 'Gold 400', class: 'bg-gold-400', text: 'text-navy-950', hex: '#cfaa4a' },
    { name: 'Gold 300', class: 'bg-gold-300', text: 'text-navy-950', hex: '#fcd34d' },
    { name: 'Gold 50', class: 'bg-gold-50', text: 'text-navy-950', hex: '#fffbeb' },
  ];

  const borders = [
    { name: 'Gold Border Semi-transparent', class: 'border border-gold-800/30', description: 'Semi-transparent gold border' },
    { name: 'Gold Border Solid', class: 'border border-gold-400', description: 'Solid gold border (#cfaa4a)' },
  ];

  const shadows = [
    { name: 'Gold Shadow', class: 'shadow-gold', description: '0 4px 20px -2px rgba(207, 170, 74, 0.25)' },
    { name: 'Gold Shadow Small', class: 'shadow-gold-sm', description: '0 2px 10px -2px rgba(207, 170, 74, 0.2)' },
  ];

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8 text-gold-400">Style Guide</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gold-400">Typography</h2>
        <p className="text-gray-300 mb-4">Main font: Cormorant Garamond (imported via Google Fonts)</p>
        <div className="space-y-4">
          {typography.map((type) => (
            <CopyableContent key={type.name} content={type.class}>
              <div className={`p-4 rounded-lg bg-navy-800 ${type.class}`}>
                <p className="font-medium">{type.name}</p>
                <p className="text-sm opacity-80">{type.description}</p>
                <p className="text-sm opacity-80">{type.class}</p>
              </div>
            </CopyableContent>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gold-400">Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {colors.map((color) => (
            <CopyableContent key={color.name} content={color.class}>
              <div className={`p-4 rounded-lg ${color.class} ${color.text}`}>
                <p className="font-medium">{color.name}</p>
                <p className="text-sm opacity-80">{color.hex}</p>
                <p className="text-sm opacity-80">{color.class}</p>
              </div>
            </CopyableContent>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gold-400">Borders</h2>
        <div className="space-y-4">
          {borders.map((border) => (
            <CopyableContent key={border.name} content={border.class}>
              <div className={`p-4 rounded-lg bg-navy-800 ${border.class}`}>
                <p className="font-medium text-white">{border.name}</p>
                <p className="text-sm text-gray-300">{border.description}</p>
                <p className="text-sm text-gray-300">{border.class}</p>
              </div>
            </CopyableContent>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gold-400">Shadows</h2>
        <div className="space-y-4">
          {shadows.map((shadow) => (
            <CopyableContent key={shadow.name} content={shadow.class}>
              <div className={`p-4 rounded-lg bg-navy-800 ${shadow.class}`}>
                <p className="font-medium text-white">{shadow.name}</p>
                <p className="text-sm text-gray-300">{shadow.description}</p>
                <p className="text-sm text-gray-300">{shadow.class}</p>
              </div>
            </CopyableContent>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StyleGuide; 