
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution built with modern technologies that drives sales and provides seamless shopping experiences. Our platform includes advanced analytics, inventory management, and customer engagement tools.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "Mobile Responsive"]
    },
    {
      id: 2,
      title: "Corporate Website",
      category: "Corporate Design",
      description: "Professional corporate websites that establish credibility and showcase your business excellence. We focus on creating powerful first impressions with clean design and strategic content placement.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Professional Design", "Content Management", "SEO Optimized", "Brand Integration"]
    },
    {
      id: 3,
      title: "Tech Startup Platform",
      category: "SaaS Development",
      description: "Cutting-edge SaaS platforms for tech startups looking to scale rapidly. We build scalable architectures that can handle growth while maintaining optimal performance and user experience.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Scalable Architecture", "API Integration", "User Analytics", "Cloud Infrastructure"]
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "FinTech",
      description: "Secure and user-friendly mobile banking solutions with advanced security features. Our fintech applications prioritize user experience while maintaining the highest security standards.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Advanced Security", "Real-time Transactions", "Biometric Auth", "Cross-platform"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !scrollContainerRef.current) return;

      const section = sectionRef.current;
      const scrollContainer = scrollContainerRef.current;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
        // Calculate scroll progress within the section
        const sectionHeight = section.offsetHeight;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionRect.top) / sectionHeight));
        
        // Calculate which item should be active based on scroll progress
        const itemIndex = Math.floor(scrollProgress * portfolioItems.length);
        const clampedIndex = Math.min(itemIndex, portfolioItems.length - 1);
        
        setActiveIndex(clampedIndex);

        // Scroll the horizontal container
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const targetScroll = scrollProgress * maxScroll;
        scrollContainer.scrollLeft = targetScroll;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [portfolioItems.length]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Portfolio Highlights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover some of our recent projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Text content */}
          <div className="lg:sticky lg:top-20">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {portfolioItems[activeIndex].category}
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {portfolioItems[activeIndex].title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {portfolioItems[activeIndex].description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {portfolioItems[activeIndex].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View Project Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Scrolling images */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
                    index === activeIndex ? 'scale-105 shadow-2xl' : 'scale-95 opacity-70'
                  }`}
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <Badge className="bg-white/20 text-white border-white/30">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="flex space-x-2 mt-6 justify-center">
              {portfolioItems.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
