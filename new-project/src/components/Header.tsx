export const Header = () => {
  return (
    <header className="bg-navy-950 text-white py-6 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-serif font-bold text-gold-400">Your Wish Free Access</div>
          <div className="space-x-8">
            <a href="https://www.yourwishoffer.com" className="text-lg font-serif hover:text-gold-400 transition-colors">Home</a>
            <a href="https://www.yourwishoffer.com/about" className="text-lg font-serif hover:text-gold-400 transition-colors">About</a>
            <a href="https://www.yourwishoffer.com/contact" className="text-lg font-serif hover:text-gold-400 transition-colors">Contact</a>
            <a 
              href="https://www.yourwishoffer.com/order-form-md25?aff=0afdb7e9710ccd4b0513dbc41a58c351e0f9df732596d4b586ee25161a4755bd" 
              className="bg-gold-400 text-navy-950 px-6 py-2 rounded-lg font-bold text-lg hover:bg-gold-300 transition-colors shadow-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access Audios
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
} 