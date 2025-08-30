import { Globe, Wrench, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom responsive websites built with modern technologies. From landing pages to complex web applications.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile First"],
      delay: "0.1s"
    },
    {
      icon: Wrench,
      title: "Tools Development", 
      description: "Custom software tools and applications tailored to your business needs. Automation and productivity solutions.",
      features: ["Custom Solutions", "API Integration", "Automation", "Scalable"],
      delay: "0.2s"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility with comprehensive SEO strategies. Get found by your target audience.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
      delay: "0.3s"
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section id="services" ref={sectionRef} className="oneplus-section">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
            Our Premium
            <span className="text-red-500 font-normal"> Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            We deliver cutting-edge digital solutions that transform your business and drive growth. 
            Each service is crafted with precision and passion.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card oneplus-card p-8 rounded-2xl group opacity-0"
              style={{ animationDelay: service.delay }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-all duration-300 group-hover:animate-pulse">
                <service.icon className="w-8 h-8 text-red-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 font-light leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                onClick={handleContactClick}
                className="w-full border-white/20 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/25"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="oneplus-card p-8 rounded-2xl text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-light text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-400 mb-6 font-light">
            Let's discuss your project and create something amazing together.
          </p>
          <Button 
            onClick={handleContactClick}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
      

    </section>
  );
};

export default Services;