import { Plane, Globe, Hotel, MapPin } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Airline Tickets Worldwide',
    description: 'Access to competitive fares across global carriers. Special expertise in routes to China, Turkey, and Europe with our personal consultation service.',
    destinations: ['China', 'Turkey', 'Europe', 'Asia Pacific', 'Americas'],
  },
  {
    icon: Globe,
    title: 'Visa Services',
    description: 'Expert guidance through complex visa procedures. Our experienced consultants handle all documentation and application processes with precision.',
    destinations: ['Schengen Visas', 'China Visas', 'Turkey Visas', 'UK & US Visas'],
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Curated selection of premium accommodations worldwide. From boutique hotels to luxury resorts, we secure the best rates for our clients.',
    destinations: ['5-Star Hotels', 'Boutique Resorts', 'Heritage Properties', 'Beach Retreats'],
  },
  {
    icon: MapPin,
    title: 'Tours & Experiences',
    description: 'Bespoke travel itineraries crafted by our travel experts. Immersive experiences that go beyond typical tourist attractions.',
    destinations: ['Guided Tours', 'Adventure Travel', 'Cultural Experiences', 'Luxury Cruises'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-slate-100">Our Premium</span>
            <br />
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Personalized travel solutions crafted by our expert consultants.
            Every service backed by our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-500 hover:luxury-shadow"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-yellow-500/30 transition-all">
                  <service.icon className="w-8 h-8 text-slate-900" />
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  <p className="text-sm text-yellow-400/70 font-semibold">Featured Offerings:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.destinations.map((dest, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 group-hover:border-yellow-400/40 transition-all"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-6 text-yellow-400 hover:text-yellow-300 font-semibold text-sm flex items-center space-x-2 group/btn">
                  <span>Learn More</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
