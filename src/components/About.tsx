import { Award, Users, Globe, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: '8+ Years Excellence',
    description: 'Proven expertise in premium travel services and client satisfaction',
  },
  {
    icon: Users,
    title: 'Expert Consultants',
    description: 'Dedicated professionals providing personalized travel planning',
  },
  {
    icon: Globe,
    title: 'Global Partnerships',
    description: 'Strategic alliances with premium providers worldwide',
  },
  {
    icon: Zap,
    title: 'Competitive Pricing',
    description: 'Luxury experiences without the luxury price tag',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block mb-6">
              <div className="px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 backdrop-blur">
                <span className="text-yellow-400 text-sm font-semibold">About LiaTravel</span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              <span className="text-slate-100">Your Trusted Partner in</span>
              <br />
              <span className="text-gradient">Premium Travel</span>
            </h2>

            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              With over 8 years of distinguished service in the travel industry, LiaTravel has built a reputation as a trusted advisor for discerning travelers. We combine industry expertise with personalized attention to deliver exceptional travel experiences.
            </p>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Our team of professional consultants works directly with each client to understand their unique preferences and requirements. We leverage our global network of partnerships to secure competitive rates without compromising on quality or service.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex-shrink-0 mt-1"></div>
                <div>
                  <p className="text-slate-300 font-semibold">Thousands of Satisfied Travelers</p>
                  <p className="text-slate-400 text-sm">Our clients range from leisure seekers to corporate travelers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex-shrink-0 mt-1"></div>
                <div>
                  <p className="text-slate-300 font-semibold">50+ Destinations Covered</p>
                  <p className="text-slate-400 text-sm">From iconic cities to hidden gems worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex-shrink-0 mt-1"></div>
                <div>
                  <p className="text-slate-300 font-semibold">24/7 Travel Support</p>
                  <p className="text-slate-400 text-sm">Always available when you need us most</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative h-96 rounded-2xl overflow-hidden border border-yellow-400/20"
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/3714904/pexels-photo-3714904.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 to-slate-950/50"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-400 mb-2">8+</div>
                <p className="text-slate-300 font-semibold">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/20 border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
