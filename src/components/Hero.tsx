export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 backdrop-blur">
            <span className="text-yellow-400 text-sm font-semibold">Premium Global Travel</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-slate-100">Experience Luxury</span>
          <br />
          <span className="text-gradient">Travel at Best Prices</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          LiaTravel — Your trusted gateway to affordable premium travel experiences worldwide.
          With 8+ years of excellence, we craft unforgettable journeys across China, Turkey, Europe, and beyond.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="luxury-button-primary">
            Explore Our Services
          </button>
          <button className="luxury-button-secondary">
            Contact Our Consultants
          </button>
        </div>

        <div className="mt-16 pt-12 border-t border-yellow-400/10">
          <p className="text-slate-400 text-sm mb-6">Trusted By Travelers Worldwide</p>
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">8+</div>
              <p className="text-slate-400 text-sm">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-yellow-400/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">5000+</div>
              <p className="text-slate-400 text-sm">Happy Travelers</p>
            </div>
            <div className="w-px h-12 bg-yellow-400/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <p className="text-slate-400 text-sm">Destinations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
    </section>
  );
}
