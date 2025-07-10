export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white hover:text-white/90 transition-colors">
              Brightly Soft
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#brands"
                className="text-white hover:text-white/70 px-3 py-2 text-sm font-medium transition-colors"
              >
                Brands
              </a>
              <a
                href="#"
                className="text-white hover:text-white/70 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-white/70 px-3 py-2 text-sm font-medium transition-colors"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
