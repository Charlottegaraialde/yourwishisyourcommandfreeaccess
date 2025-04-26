import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SecretKnowledge } from './components/SecretKnowledge';
import { AudioCollection } from './components/AudioCollection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-serif bg-navy-950 text-gray-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <SecretKnowledge />
        <AudioCollection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;