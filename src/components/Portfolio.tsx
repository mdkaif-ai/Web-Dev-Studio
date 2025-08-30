import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.portfolio-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      rating: 5,
      features: ["Payment Integration", "Admin Dashboard", "Inventory Management", "Responsive Design"],
      delay: "0.1s"
    },
    {
      title: "Personal Utility Tools",
      description: "Custom tools for personal and business use including PDF converter, image extractor, and file management tools.",
      image: project2,
      technologies: ["React", "Node.js", "Python", "APIs"],
      category: "Tools Development",
      rating: 5,
      features: ["PDF Converter", "Image Extractor", "File Manager", "Data Processor"],
      delay: "0.2s"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with content management system and user engagement features.",
      image: project3,
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Content Platform",
      rating: 5,
      features: ["Content Management", "User Comments", "SEO Optimized", "Social Sharing"],
      delay: "0.3s"
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="oneplus-section">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
            Our Featured
            <span className="text-red-500 font-normal"> Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Discover our portfolio of successful projects that showcase our expertise in creating 
            innovative digital solutions for businesses worldwide.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="portfolio-card oneplus-card rounded-3xl overflow-hidden group opacity-0"
              style={{ animationDelay: project.delay }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-light">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-red-600/10 text-red-400 rounded-full border border-red-600/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full border border-white/20 text-white hover:bg-red-600 hover:border-red-600 px-6 py-3 rounded-full font-light transition-all duration-300"
                >
                  Discuss Similar Project
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
      

    </section>
  );
};

export default Portfolio;