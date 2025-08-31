import { useEffect, useRef } from "react";
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.about-item');
    elements?.forEach((element) => observer.observe(element));

    // amazonq-ignore-next-line
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+", delay: "0.1s" },
    { icon: Award, label: "Projects", value: "62", delay: "0.2s" },
    { icon: Clock, label: "Years", value: "5+", delay: "0.3s" },
    { icon: Heart, label: "Satisfaction", value: "100%", delay: "0.4s" }
  ];

  return (
    <section id="about" ref={sectionRef} className="oneplus-section">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
            Meet the
            <span className="text-red-500 font-normal"> Founders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            We're a passionate team of developers dedicated to transforming your digital dreams into reality. 
            Our combined expertise spans the entire development spectrum.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="about-item text-center opacity-0"
              style={{ animationDelay: stat.delay }}
            >
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-4xl font-light text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-light">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="about-item opacity-0" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-4xl font-light text-white mb-8">
              Built for
              <span className="text-red-500 font-normal"> Performance</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                We are a passionate team of developers who believe 
                in the power of exceptional digital experiences.
              </p>
              
              <p>
                Our journey began with a simple philosophy: never compromise on quality. 
                Every line of code, every pixel, every interaction is crafted with precision.
              </p>
              
              <p>
                From lightning-fast websites to intelligent automation solutions, we combine 
                cutting-edge technology with intuitive design to create digital products 
                that don't just work - they inspire.
              </p>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => window.open("https://wa.me/+919876543210?text=Hi! I'd like to work with your team.", "_blank")}
                className="oneplus-btn"
              >
                Work With Us
              </button>
            </div>
          </div>

          {/* Right Content - Team Cards */}
          <div className="space-y-8">
            <div className="about-item oneplus-card p-8 rounded-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-light text-xl animate-float">
                  A
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">Alimah</h4>
                  <p className="text-gray-400 font-light">Backend & Systems</p>
                </div>
              </div>
              <p className="text-gray-400 font-light">
                Building robust, scalable systems and intelligent solutions. 
                Expert in Node.js, system integration, and database architecture.
              </p>
            </div>

            <div className="about-item oneplus-card p-8 rounded-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-light text-xl animate-float" style={{ animationDelay: '3s' }}>
                  M
                </div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Mubashira</h4>
                  <p className="text-gray-400 font-light">Frontend & Design</p>
                </div>
              </div>
              <p className="text-gray-400 font-light">
                Crafting beautiful, responsive interfaces with modern technologies. 
                Specializes in React, UI/UX design, and mobile-first development.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center about-item opacity-0" style={{ animationDelay: '0.8s' }}>
          <div className="oneplus-card p-12 rounded-3xl">
            <h3 className="text-3xl font-light text-white mb-6">
              Our <span className="text-red-500 font-normal">Philosophy</span>
            </h3>
            <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              "Fast and Smooth" isn't just our tagline - it's our commitment. 
              We believe in creating digital experiences that are not only visually stunning 
              but also perform flawlessly across all devices and platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;