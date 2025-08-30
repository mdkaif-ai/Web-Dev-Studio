import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles, MessageCircle, Mail, Instagram, X } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleContactMethod = (method: string, message: string) => {
    setShowContactModal(false);
    if (method === 'whatsapp') {
      window.open(`https://wa.me/+919140613637?text=${encodeURIComponent(message)}`, "_blank");
    } else if (method === 'email') {
      window.open(`mailto:Alimahparveen2420@gmail.com?subject=Web Development Inquiry&body=${encodeURIComponent(message)}`, "_blank");
    } else if (method === 'instagram') {
      window.open("https://instagram.com/alimah__20", "_blank");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* OnePlus-style animated background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-black to-black"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 20% 50%, #dc2626 0%, transparent 50%), radial-gradient(circle at 80% 20%, #dc2626 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
      </div>
      
      {/* Enhanced floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse opacity-60 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced badge with glow */}
          <div className="inline-flex items-center gap-2 border border-red-500/30 px-3 py-2 rounded-full text-xs sm:text-sm mb-6 sm:mb-8 backdrop-blur-sm bg-black/20 animate-fade-in animate-glow">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
            <span className="text-gray-300 font-light tracking-wide">Premium Web & Tools Development</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up px-2" style={{ animationDelay: '0.2s' }}>
            Transform Ideas Into
            <br />
            <span className="text-red-500 font-normal">Digital Excellence</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 font-light animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            We're <span className="text-white font-bold">Alimah</span> & <span className="text-white font-bold">Mubashira</span> – Your trusted partners for stunning websites, powerful tools, SEO optimization, and automation solutions that drive real results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-20 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={handleContactClick}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25 border-0"
            >
              <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-light backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.8s' }}>
            <div className="oneplus-card p-4 sm:p-6 rounded-xl text-center animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-red-500 mb-2 animate-glow">50+</div>
              <div className="text-gray-400 font-light text-sm sm:text-base">Projects Delivered</div>
            </div>
            <div className="oneplus-card p-4 sm:p-6 rounded-xl text-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2">100%</div>
              <div className="text-gray-400 font-light text-sm sm:text-base">Client Satisfaction</div>
            </div>
            <div className="oneplus-card p-4 sm:p-6 rounded-xl text-center animate-float" style={{ animationDelay: '4s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-red-500 mb-2 animate-glow">1 Year</div>
              <div className="text-gray-400 font-light text-sm sm:text-base">Free Updates</div>
            </div>
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
                onClick={() => handleContactMethod('whatsapp', "Hi! I'm interested in your web development services.")}
                className="w-full flex items-center space-x-4 p-4 rounded-xl border border-white/20 hover:bg-green-600/20 hover:border-green-500 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <div className="text-white font-light">WhatsApp</div>
                  <div className="text-gray-400 text-sm">Instant messaging</div>
                </div>
              </button>
              
              <button 
                onClick={() => handleContactMethod('email', "Hi! I'm interested in your web development services.")}
                className="w-full flex items-center space-x-4 p-4 rounded-xl border border-white/20 hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-white font-light">Email</div>
                  <div className="text-gray-400 text-sm">Professional communication</div>
                </div>
              </button>
              
              <button 
                onClick={() => handleContactMethod('instagram', "Hi! I'm interested in your web development services.")}
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
    </section>
  );
};

export default Hero;