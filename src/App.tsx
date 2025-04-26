import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AccessPage } from './components/AccessPage';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="font-serif">
      <Header />
      <Hero />
      <AccessPage />
      <Testimonials />
    </div>
  );
}

export default App;