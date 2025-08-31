import { useEffect, useRef } from "react";
import { MessageCircle, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.contact-item');
    elements?.forEach((element) => observer.observe(element));

    // amazonq-ignore-next-line
    return () => {
      elements?.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Instant messaging",
      value: "+91 91406 13637",
      action: () => window.open("https://wa.me/+919140613637?text=Hi! I'd like to discuss a project.", "_blank"),
      delay: "0.1s"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Professional communication",
      value: "Alimahparveen2420@gmail.com",
      action: () => window.open("mailto:Alimahparveen2420@gmail.com", "_blank"),
      delay: "0.2s"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="oneplus-section">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
            Get In
            <span className="text-red-500 font-normal"> Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Ready to build something extraordinary? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="contact-item oneplus-card p-4 sm:p-6 lg:p-8 rounded-2xl cursor-pointer group opacity-0"
                onClick={method.action}
                style={{ animationDelay: method.delay }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600/20 transition-all duration-300 mx-auto sm:mx-0">
                    <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 font-light mb-1">{method.description}</p>
                    <p className="text-sm sm:text-base text-red-400 font-light break-all sm:break-normal">{method.value}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-red-500 group-hover:translate-x-2 transition-all duration-300 mx-auto sm:mx-0" />
                </div>
              </div>
            ))}

            {/* Quick Contact CTA */}
            <div className="contact-item oneplus-card p-4 sm:p-6 lg:p-8 rounded-2xl text-center opacity-0" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-light text-white mb-4">
                Ready to Start?
              </h3>
              <p className="text-gray-400 font-light mb-6">
                Let's discuss your project and bring your vision to life.
              </p>
              <button 
                onClick={() => window.open("https://web-dev-studio.netlify.app/contact", "_blank")}
                className="oneplus-btn"
              >
                Start Project
              </button>
            </div>
          </div>

          {/* Right Side - Info & Process */}
          <div className="space-y-8">
            {/* Business Info */}
            <div className="contact-item oneplus-card p-8 rounded-2xl opacity-0" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-light text-white mb-6">
                Business <span className="text-red-500 font-normal">Info</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400 font-light">India (Remote Services Worldwide)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400 font-light">Mon - Sat: 9:00 AM - 8:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="contact-item oneplus-card p-8 rounded-2xl opacity-0" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-light text-white mb-6">
                Our <span className="text-red-500 font-normal">Process</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-light text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-light mb-1">Consultation</h4>
                    <p className="text-gray-400 text-sm font-light">We discuss your vision and requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-light text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-light mb-1">Planning</h4>
                    <p className="text-gray-400 text-sm font-light">Detailed proposal with timeline and pricing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-light text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-light mb-1">Development</h4>
                    <p className="text-gray-400 text-sm font-light">Regular updates and feedback sessions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-light text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-light mb-1">Launch</h4>
                    <p className="text-gray-400 text-sm font-light">Delivery with ongoing support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="contact-item oneplus-card p-8 rounded-2xl text-center opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-light text-red-500 mb-2">2hrs</div>
              <p className="text-gray-400 font-light">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;