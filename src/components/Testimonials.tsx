import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [rating, setRating] = useState(0);

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

    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Solutions",
      rating: 5,
      content: "Alimah and Mubashshira delivered an outstanding e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is remarkable. Our online sales increased by 300% within the first month!",
      project: "E-commerce Platform",
      delay: "0.1s"
    },
    {
      name: "Priya Sharma", 
      role: "Marketing Director, DigitalGrow",
      rating: 5,
      content: "The SEO optimization work they did for our website was incredible. We went from page 3 to the top 5 results for our main keywords within 3 months. Professional, reliable, and results-driven!",
      project: "SEO Optimization",
      delay: "0.2s"
    },
    {
      name: "Ahmed Hassan",
      role: "Founder, InnovateLab",
      rating: 5,
      content: "They developed a custom chatbot for our customer service that has been a game-changer. The system handles 80% of inquiries automatically, and our customer satisfaction scores have improved significantly.",
      project: "Custom Solutions",
      delay: "0.3s"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager, CloudTech",
      rating: 5,
      content: "The custom tool they built for our inventory management has streamlined our entire operation. What used to take hours now takes minutes. Exceptional work and ongoing support!",
      project: "Custom Tools",
      delay: "0.4s"
    },
    {
      name: "Vikram Patel",
      role: "Director, WebVentures",
      rating: 5,
      content: "Professional, creative, and technically excellent. They understood our vision perfectly and delivered a website that truly represents our brand. The design is stunning and performance is top-notch.",
      project: "Website Development",
      delay: "0.5s"
    },
    {
      name: "Lisa Chen",
      role: "Entrepreneur, StartupHub",
      rating: 5,
      content: "Working with them was a fantastic experience. They guided us through the entire process, provided valuable insights, and delivered exactly what we needed within budget and timeline. Highly recommended!",
      delay: "0.6s"
    }
  ];

  return (
    <section ref={sectionRef} className="oneplus-section">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
            What Our Clients
            <span className="text-red-500 font-normal"> Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="testimonial-card oneplus-card p-6 rounded-2xl relative animate-fade-in-up"
              style={{ animationDelay: testimonial.delay }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center animate-pulse">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-500 text-red-500 hover:scale-125 transition-transform duration-200" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-400 mb-6 leading-relaxed font-light italic">
                "{testimonial.content}"
              </p>

              {/* Project Tag */}
              {testimonial.project && (
                <div className="mb-4">
                  <span className="px-3 py-1 text-xs bg-red-600/10 text-red-400 rounded-full border border-red-600/20">
                    {testimonial.project}
                  </span>
                </div>
              )}

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-sm font-light text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-light text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400 font-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Section */}
        <div className="oneplus-card p-8 rounded-2xl mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl font-light text-white mb-6 text-center">
            Share Your <span className="text-red-500 font-normal">Experience</span>
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="bg-black/50 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none font-light"
              />
              <input 
                type="text" 
                placeholder="Company/Role" 
                className="bg-black/50 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none font-light"
              />
            </div>
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <button 
                    key={star} 
                    onClick={() => setRating(star)}
                    className="transition-colors duration-300"
                  >
                    <Star 
                      className={`w-6 h-6 ${star <= rating ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <textarea 
              placeholder="Tell us about your project experience..." 
              rows={4}
              className="w-full bg-black/50 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none font-light mb-4 resize-none"
            ></textarea>
            <div className="text-center">
              <button 
                onClick={() => window.open("https://wa.me/+919140613637?text=Hi! I want to submit a review for your services.", "_blank")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-light transition-all duration-300 hover:scale-105"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="oneplus-card p-6 rounded-xl text-center">
            <div className="text-4xl font-light text-red-500 mb-2">100%</div>
            <div className="text-gray-400 font-light">Client Satisfaction Rate</div>
          </div>
          <div className="oneplus-card p-6 rounded-xl text-center">
            <div className="text-4xl font-light text-white mb-2">4.9/5</div>
            <div className="text-gray-400 font-light">Average Project Rating</div>
          </div>
          <div className="oneplus-card p-6 rounded-xl text-center">
            <div className="text-4xl font-light text-red-500 mb-2">90%</div>
            <div className="text-gray-400 font-light">Repeat Client Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;