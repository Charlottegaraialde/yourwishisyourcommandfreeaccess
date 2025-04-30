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
    <div className="w-full min-h-screen overflow-x-hidden font-serif">
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 -z-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')"
        }}
      />
      <div
        className="fixed inset-0 bg-gradient-to-b from-navy-950/95 to-transparent opacity-95 -z-10"
      />
      <div className="relative w-full">
        <Header />
        <main className="w-full flex flex-col">
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