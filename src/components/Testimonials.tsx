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

  const testimonials = [];

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

        {/* No testimonials message */}
        <div className="text-center mb-16">
          <div className="oneplus-card p-8 sm:p-12 rounded-2xl">
            <Quote className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h3 className="text-xl sm:text-2xl font-light text-white mb-4">
              Be Our First Review!
            </h3>
            <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
              We're just getting started and would love to hear about your experience working with us. 
              Your feedback helps us grow and serve you better.
            </p>
          </div>
        </div>

        {/* Add Review Section */}
        <div className="oneplus-card p-4 sm:p-6 lg:p-8 rounded-2xl mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-xl sm:text-2xl font-light text-white mb-6 text-center">
            Share Your <span className="text-red-500 font-normal">Experience</span>
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="bg-black/50 border border-white/20 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:border-red-500 focus:outline-none font-light"
              />
              <input 
                type="text" 
                placeholder="Company/Role" 
                className="bg-black/50 border border-white/20 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:border-red-500 focus:outline-none font-light"
              />
            </div>
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <button 
                    key={star} 
                    onClick={() => setRating(star)}
                    className="transition-colors duration-300 p-1"
                  >
                    <Star 
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${star <= rating ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <textarea 
              placeholder="Tell us about your project experience..." 
              rows={4}
              className="w-full bg-black/50 border border-white/20 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:border-red-500 focus:outline-none font-light mb-4 resize-none"
            ></textarea>
            <div className="text-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-light transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="oneplus-card p-4 sm:p-6 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-red-500 mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-400 font-light">Projects Delivered</div>
          </div>
          <div className="oneplus-card p-4 sm:p-6 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">2hrs</div>
            <div className="text-sm sm:text-base text-gray-400 font-light">Response Time</div>
          </div>
          <div className="oneplus-card p-4 sm:p-6 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-red-500 mb-2">1 Year</div>
            <div className="text-sm sm:text-base text-gray-400 font-light">Free Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;