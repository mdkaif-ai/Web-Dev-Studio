import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Mail, Instagram } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleContactMethod = (method: string, message: string) => {
    setShowContactModal(false);
    if (method === 'whatsapp') {
      window.open(`https://wa.me/+919140613637?text=${encodeURIComponent(message)}`, "_blank");
    } else if (method === 'email') {
      window.open(`mailto:Alimahparveen2420@gmail.com?subject=Contact Inquiry&body=${encodeURIComponent(message)}`, "_blank");
    } else if (method === 'instagram') {
      window.open("https://instagram.com/alimah__20", "_blank");
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-red-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
                <span className="text-white font-bold text-2xl relative z-10 transform transition-transform duration-500 group-hover:scale-125">&lt;/&gt;</span>
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            <div className="text-2xl font-light text-white tracking-wide">
              <span className="font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Web Dev</span>
              <div className="text-red-500 text-sm font-semibold tracking-wider uppercase opacity-90">Studio</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-white transition-all duration-500 font-light text-base tracking-wide relative group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 group-hover:w-full group-hover:left-0 rounded-full"></span>
                <span className="absolute inset-0 bg-red-500/10 rounded-lg scale-0 transition-transform duration-300 group-hover:scale-100 -z-10"></span>
              </button>
            ))}
            <Button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 ml-6 border-0"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 ${isOpen ? 'rotate-45 top-3' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 ${isOpen ? '-rotate-45 top-3' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm -z-10 rounded-2xl"></div>
          <div className="flex flex-col space-y-4 pb-4 relative z-10 bg-black/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-gray-300 hover:text-white transition-colors duration-300 font-light py-2 border-b border-white/10 last:border-b-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={handleContactClick}
              className="bg-red-600 hover:bg-red-700 text-white mt-4 w-full rounded-full font-light"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="oneplus-card p-8 rounded-2xl max-w-md w-full relative">
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-light text-white mb-6 text-center">
              Choose Contact Method
            </h3>
            
            <div className="space-y-4">
              <button 
                onClick={() => handleContactMethod('whatsapp', "Hi! I'm interested in your services.")}
                className="w-full flex items-center space-x-4 p-4 rounded-xl border border-white/20 hover:bg-green-600/20 hover:border-green-500 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <div className="text-white font-light">WhatsApp</div>
                  <div className="text-gray-400 text-sm">Instant messaging</div>
                </div>
              </button>
              
              <button 
                onClick={() => handleContactMethod('email', "Hi! I'm interested in your services.")}
                className="w-full flex items-center space-x-4 p-4 rounded-xl border border-white/20 hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-white font-light">Email</div>
                  <div className="text-gray-400 text-sm">Professional communication</div>
                </div>
              </button>
              
              <button 
                onClick={() => handleContactMethod('instagram', "Hi! I'm interested in your services.")}
                className="w-full flex items-center space-x-4 p-4 rounded-xl border border-white/20 hover:bg-pink-600/20 hover:border-pink-500 transition-all duration-300"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
                <div className="text-left">
                  <div className="text-white font-light">Instagram</div>
                  <div className="text-gray-400 text-sm">Social media</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;