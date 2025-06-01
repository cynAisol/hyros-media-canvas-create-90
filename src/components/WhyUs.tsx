
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      number: "01",
      title: "Increase speed to market",
      description: "Get your product launched faster with our streamlined development process and proven methodologies.",
      color: "bg-[#38B6FF]",
      lineColor: "border-[#38B6FF]",
      bgGradient: "from-[#38B6FF]/10 to-[#38B6FF]/20"
    },
    {
      number: "02", 
      title: "Reduce development cost",
      description: "Save up to 40% on development costs through efficient workflows and reusable components.",
      color: "bg-white",
      lineColor: "border-white",
      bgGradient: "from-white/10 to-white/20"
    },
    {
      number: "03",
      title: "Assure information security", 
      description: "Enterprise-grade security measures to protect your data and user information at all times.",
      color: "bg-[#38B6FF]",
      lineColor: "border-[#38B6FF]",
      bgGradient: "from-[#38B6FF]/10 to-[#38B6FF]/20"
    },
    {
      number: "04",
      title: "Get high-quality software",
      description: "Clean, maintainable code with comprehensive testing and quality assurance processes.",
      color: "bg-white",
      lineColor: "border-white",
      bgGradient: "from-white/10 to-white/20"
    },
    {
      number: "05",
      title: "Scale team up and down",
      description: "Flexible team scaling to match your project needs and budget requirements.",
      color: "bg-[#38B6FF]", 
      lineColor: "border-[#38B6FF]",
      bgGradient: "from-[#38B6FF]/10 to-[#38B6FF]/20"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Human Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />
      
      {/* Blurred Blob Background */}
      <svg
        className="absolute -top-32 -left-32 w-[500px] h-[500px] z-0 blur-3xl opacity-20 pointer-events-none select-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="250" cy="250" rx="220" ry="180" fill="#38B6FF" />
        <ellipse cx="350" cy="180" rx="120" ry="90" fill="#ffffff" fillOpacity="0.6" />
      </svg>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center relative">
          <span className="absolute -left-8 top-2 text-3xl">💡</span>
          <Badge className="mb-4 bg-[#38B6FF] text-white border-0">Why Choose Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <span>Why *HACHI MEDIA</span>
            <span className="text-3xl">🌟</span>
          </h2>
          <div className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">Your partner for speed, security, and innovation in digital transformation</div>
          
          {/* How We Work Process Row */}
          <div className="flex justify-center gap-10 mb-10">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-[#38B6FF]/20 border border-[#38B6FF] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">🔍</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">Discover</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/20 border border-white rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">🎨</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">Design</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-[#38B6FF]/20 border border-[#38B6FF] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">Develop</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/20 border border-white rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">Deliver</span>
            </div>
          </div>
          <span className="absolute -right-8 top-2 text-3xl">🦄</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className={`bg-gradient-to-br ${benefit.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[280px] flex flex-col justify-between border border-border backdrop-blur-sm group-hover:-translate-y-2`}>
                <div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${benefit.color} ${benefit.color === 'bg-white' ? 'text-black' : 'text-white'} text-lg font-bold rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-[#38B6FF] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Enhanced horizontal line with gradient */}
                <div className={`w-full h-1 ${benefit.color.replace('bg-', 'bg-gradient-to-r from-')} rounded-full`}></div>
              </div>
              
              {/* Subtle glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}></div>
            </div>
          ))}
          
          {/* Enhanced Exclusive Delivery Framework card */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-[#38B6FF]/10 via-card to-[#38B6FF]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[280px] flex flex-col justify-between group cursor-pointer border border-[#38B6FF] backdrop-blur-sm group-hover:-translate-y-2">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#38B6FF] text-white text-lg font-bold rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-[#38B6FF] mb-4 leading-tight group-hover:text-white transition-colors">
                  Exclusive Delivery Framework
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Our proprietary methodology ensures consistent, high-quality results across all projects with proven success metrics.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex-1 h-1 bg-gradient-to-r from-[#38B6FF] to-white rounded-full mr-4"></div>
                <div className="w-12 h-12 bg-[#38B6FF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
            {/* Glow effect for exclusive card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/20 to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Fun Fact Card */}
      <div className="flex justify-center mt-16">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-lg text-left border border-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#38B6FF] via-white to-[#38B6FF]"></div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#38B6FF] rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <div className="text-[#38B6FF] font-bold mb-2 text-lg">Did you know?</div>
              <div className="text-foreground leading-relaxed">
                HACHI MEDIA has helped over <span className='font-bold text-[#38B6FF]'>49+</span> businesses launch their digital presence with a 
                <span className='font-bold text-white'> 98%</span> client satisfaction rate and <span className='font-bold text-[#38B6FF]'>zero</span> security breaches!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
