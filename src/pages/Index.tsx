import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact"; 
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Services />
        <Portfolio />
        <section id="client-websites" className="oneplus-section">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
                Client
                <span className="text-red-500 font-normal"> Websites</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Live websites we've built for our satisfied clients. See our work in action.
              </p>
            </div>
            
            {/* Client Websites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="oneplus-card rounded-2xl overflow-hidden group animate-fade-in-up animate-float" style={{animationDelay: '0.1s'}}>
                <div className="h-48 bg-gradient-to-br from-red-600/20 to-black flex items-center justify-center">
                  <div className="text-6xl">📚</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    MangaHaven4u
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 font-light">
                    Manga reading platform with modern design and smooth user experience
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-red-600/10 text-red-400 px-3 py-1 rounded-full border border-red-600/20">
                      Entertainment
                    </span>
                    <button 
                      onClick={() => window.open("https://mangahaven4u.netlify.app/", "_blank")}
                      className="text-red-500 hover:text-white text-sm font-light transition-colors duration-300"
                    >
                      View Live →
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="oneplus-card rounded-2xl overflow-hidden group animate-fade-in-up animate-float" style={{animationDelay: '0.2s'}}>
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-black flex items-center justify-center">
                  <div className="text-6xl">🖼️</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    Image Extractor
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 font-light">
                    Advanced tool to extract images from documents and web pages with ease
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-red-600/10 text-red-400 px-3 py-1 rounded-full border border-red-600/20">
                      Utility Tool
                    </span>
                    <button 
                      onClick={() => window.open("https://imgextract.netlify.app/", "_blank")}
                      className="text-red-500 hover:text-white text-sm font-light transition-colors duration-300"
                    >
                      View Live →
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="oneplus-card p-8 rounded-2xl text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-2xl font-light text-white mb-4">
                Want Your Website Here?
              </h3>
              <p className="text-gray-400 mb-6 font-light">
                Join our satisfied clients and get a professional website that drives results.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 hover:scale-105"
              >
                Start Your Website
              </button>
            </div>
          </div>
        </section>
        <Pricing />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
