import { MessageCircle, Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                  <span className="text-white font-bold text-lg relative z-10">&lt;/&gt;</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse opacity-80"></div>
              </div>
              <div className="text-xl font-light text-white tracking-wide">
                <span className="font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Web Dev</span>
                <div className="text-red-500 text-sm font-semibold tracking-wider uppercase">Studio</div>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Never settle for ordinary. We craft extraordinary digital experiences 
              that push the boundaries of what's possible.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open("https://wa.me/+919876543210", "_blank")}
                className="w-12 h-12 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={() => window.open("mailto:hello@oneplusdev.com", "_blank")}
                className="w-12 h-12 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={() => window.open("https://instagram.com/oneplusdev", "_blank")}
                className="w-12 h-12 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light text-white mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-light text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 font-light">Web Development</span></li>
              <li><span className="text-gray-400 font-light">Mobile Apps</span></li>
              <li><span className="text-gray-400 font-light">SEO Optimization</span></li>
              <li><span className="text-gray-400 font-light">AI Solutions</span></li>
              <li><span className="text-gray-400 font-light">UI/UX Design</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-light text-white mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm font-light mb-1">WhatsApp</p>
                <p className="text-red-400 font-light">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-light mb-1">Email</p>
                <p className="text-red-400 font-light">hello@oneplusdev.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-light mb-1">Response</p>
                <p className="text-white font-light">Within 2 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 font-light">
              <span>© {currentYear} Web Dev Studio. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500 font-light">
              <span>+91 91406 13637</span>
              <span>•</span>
              <span>Alimahparveen2420@gmail.com</span>
              <span>•</span>
              <span>2hrs Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;