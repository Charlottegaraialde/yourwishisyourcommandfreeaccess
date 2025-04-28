import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-32 relative bg-navy-950">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <p className="text-gold-400 text-2xl font-serif mb-2 uppercase">Secrets on how to manifest your dreams and desires</p>
          <div className="w-32 h-1 bg-gold-400 mx-auto mb-4"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif text-white">
          Discover the Hidden Secrets<br />
          <span className="text-gold-400">of The Law of Attraction</span>
        </h1>

        <p className="text-2xl md:text-3xl mb-8 max-w-2xl mx-auto font-serif text-white">
          The powerful knowledge that secret societies have guarded for centuries, within your reach.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <a
            href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
            className="bg-gold-400 text-navy-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-300 transition-colors shadow-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access Free Audios
          </a>
          <a
            href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
            className="bg-navy-900 text-gold-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-800 transition-colors border border-gold-400 shadow-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>

        <div className="flex justify-center mb-16">
          <div className="animate-bounce w-16 h-16 rounded-full border-2 border-gold-400 flex items-center justify-center">
            <ArrowDown className="w-8 h-8 text-gold-400" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-white">
          The Knowledge They <span className="text-gold-400">Don't Want You To Know</span>
        </h2>
        <div className="w-32 h-1 bg-gold-400 mx-auto mb-16"></div>

        <div className="mb-16">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Law of Attraction" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </div>

        <div className="mb-16">
          <video 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            controls
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/presentation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto text-white">
          <p className="text-2xl md:text-3xl font-serif">
            Do you want more from life? A better job, better health, better relationships with your children, time for your family, a new home, more money or just feel good and fulfilled?
          </p>
          <p className="text-2xl md:text-3xl font-serif">
            Whatever you want, you can get it because you have your own Aladin's lamp.
          </p>
          <p className="text-2xl md:text-3xl font-serif">
            These 14 audios will reveal how you can be, do and have anything and everything you want.
          </p>
          <p className="text-2xl md:text-3xl font-serif">
            This is exclusive information from which the masses have always been kept away, in order to remain slaves and never realize their dreams.
          </p>
          <p className="text-2xl md:text-3xl font-serif">
            Are you ready to change your life and who you are?
          </p>

          <div className="bg-navy-900 p-4 rounded-lg border border-gold-400 shadow-gold my-8 inline-block">
            <a 
              href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd" 
              className="text-gold-400 text-2xl font-bold hover:text-gold-300 whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover the Audio collection
            </a>
          </div>

          <p className="text-gold-400 text-xl font-serif">Exclusive collection</p>

          <h3 className="text-4xl md:text-5xl font-bold font-serif text-white">
            14 Life-Changing <span className="text-gold-400">Audio Revelations</span>
          </h3>

          <p className="text-white text-xl font-serif">
            These powerful have transformed the lives of thousands of people worldwide. Access them for FREE with the promo code <span className="text-gold-400">YWIYC</span>
          </p>

          <div className="border-2 border-dashed border-gold-400 p-6 rounded-lg my-8">
            <p className="text-gold-400 text-3xl font-bold">PROMO CODE YWIYC</p>
          </div>

          <a
            href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd"
            className="inline-block bg-gold-400 text-navy-950 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gold-300 transition-colors shadow-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access your audios now + 2 exclusive bonuses
          </a>

          <p className="text-base text-white mt-2">
            Credit card required. Instant access by email, after entering promo code
          </p>

          <h3 className="text-4xl md:text-5xl font-bold font-serif text-white mt-16">
            Lives and People <span className="text-gold-400">Transformed</span>
          </h3>
        </div>
      </div>
    </section>
  )
} 