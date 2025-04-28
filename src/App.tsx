import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ManifestSection } from './components/ManifestSection';
import { SecretKnowledge } from './components/SecretKnowledge';
import { AudioCollection } from './components/AudioCollection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-serif text-gray-100 min-h-screen relative bg-navy-950">
      <div 
        className="fixed inset-0 bg-[url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')] bg-cover bg-center opacity-30"
      ></div>
      <div className="fixed inset-0 bg-gradient-to-b from-navy-950/95 to-transparent opacity-95"></div>
      <div className="relative">
        <Header />
        <main style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <Hero />
          <ManifestSection />
          <SecretKnowledge />
          <AudioCollection />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;