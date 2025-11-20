import { Plane, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-yellow-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                <Plane className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">LiaTravel</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Premium travel experiences at competitive prices. Your trusted companion for global adventures.
            </p>
            <p className="text-slate-500 text-xs">© 2025 LiaTravel. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Airline Tickets</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Visa Services</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Hotel Reservations</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Tours & Trips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">123 Travel Boulevard, Premium Plaza, Suite 450</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">+1 (234) 567-8900</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@liatravel.com" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">info@liatravel.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-400/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-6 md:mb-0">
              Crafted for luxury travelers who demand excellence
            </p>

            <div className="flex space-x-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
