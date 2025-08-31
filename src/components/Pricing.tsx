import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

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

    const cards = sectionRef.current?.querySelectorAll('.pricing-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Starter Package",
      price: "₹3,999",
      period: "Starting from",
      description: "Perfect for small businesses and startups looking to establish their online presence.",
      features: [
        "Responsive Website Design",
        "Up to 5 Pages",
        "Basic SEO Setup",
        "Contact Form Integration",
        "3 Revisions Included",
        "1 Year Free Updates",
        "Mobile Optimization",
        "Fast Loading Speed"
      ],
      icon: Zap,
      popular: false,
      delay: "0.1s"
    },
    {
      name: "Professional Package", 
      price: "₹15,000",
      period: "Starting from",
      description: "Comprehensive solution for growing businesses with advanced features and integrations.",
      features: [
        "Everything in Starter",
        "Up to 15 Pages",
        "Advanced SEO Optimization",
        "E-commerce Integration",
        "Custom Tools Development",
        "Chatbot Integration",
        "Analytics Dashboard",
        "Priority Support",
        "Unlimited Revisions",
        "1 Year Free Updates"
      ],
      icon: Star,
      popular: true,
      delay: "0.2s"
    },
    {
      name: "Enterprise Package",
      price: "₹35,000",
      period: "Starting from",
      description: "Complete digital transformation for large businesses with custom solutions.",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Web Application",
        "Advanced Automation Solutions",
        "API Development",
        "Database Design",
        "Performance Optimization",
        "Security Audit",
        "Dedicated Project Manager",
        "1 Year Free Updates",
        "24/7 Support"
      ],
      icon: Crown,
      popular: false,
      delay: "0.3s"
    }
  ];

  const handleContactClick = (planName: string) => {
    navigate('/contact', { state: { selectedPlan: planName } });
  };

  return (
    <section id="pricing" ref={sectionRef} className="oneplus-section">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
            Transparent
            <span className="text-red-500 font-normal"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Choose the perfect package for your business needs. All packages include our signature 
            quality guarantee and free updates for peace of mind.
          </p>
        </div>

        {/* Price Negotiation Banner */}
        <div className="oneplus-card p-8 rounded-2xl text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-3xl font-light text-white mb-4">
              Price <span className="text-red-500 font-normal">Negotiable</span>
            </h3>
            <p className="text-xl text-gray-400 font-light mb-6">
              All prices are flexible and discussed based on your specific requirements and project scope.
            </p>
            <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-4">
              <p className="text-red-400 font-light">
                📞 Contact us to discuss your budget and get a customized quote
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`pricing-card oneplus-card rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-visible opacity-0 ${
                plan.popular ? 'ring-2 ring-red-500/50 lg:scale-105' : ''
              }`}
              style={{ animationDelay: plan.delay }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-red-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-light shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                <plan.icon className="w-8 h-8 text-red-500" />
              </div>

              {/* Plan Name */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2 mt-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-red-500">{plan.price}</span>
                  <span className="text-sm sm:text-base text-gray-400 font-light">{plan.period}</span>
                </div>
                <div className="mt-2 p-2 bg-red-600/10 rounded-lg border border-red-600/20">
                  <p className="text-xs sm:text-sm text-red-400 font-light text-center">
                    💬 Price negotiable & discussed based on your requirements
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed font-light">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {selectedPlan === plan.name ? (
                <Button 
                  onClick={() => handleContactClick(plan.name)}
                  className="w-full text-sm sm:text-lg py-3 h-auto font-light transition-all duration-300 hover:scale-105 bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-600/25"
                >
                  <span className="block lg:hidden">Get Started</span>
                  <span className="hidden lg:block">Get Started Now</span>
                </Button>
              ) : (
                <Button 
                  onClick={() => setSelectedPlan(plan.name)}
                  className="w-full text-sm sm:text-lg py-3 h-auto font-light transition-all duration-300 hover:scale-105 border border-white/20 text-white hover:bg-red-600 hover:border-red-600 bg-transparent hover:shadow-lg"
                >
                  <span className="block lg:hidden">Choose Plan</span>
                  <span className="hidden lg:block">Choose This Plan</span>
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="oneplus-card p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-red-500" />
            </div>
            <h4 className="font-light text-white mb-2">Free Updates</h4>
            <p className="text-sm text-gray-400 font-light">Enjoy free updates and maintenance for 1 year.</p>
          </div>
          
          <div className="oneplus-card p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-red-500" />
            </div>
            <h4 className="font-light text-white mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-400 font-light">Quick turnaround time without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;