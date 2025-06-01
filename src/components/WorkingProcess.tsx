
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import AnimatedBlob from "@/components/AnimatedBlob";

const WorkingProcess = () => {
  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your business goals and requirements",
      position: "top"
    },
    {
      title: "Graphic Design",
      description: "Creating visual concepts and design systems",
      position: "bottom"
    },
    {
      title: "Communication",
      description: "Regular updates and feedback throughout the project",
      position: "top"
    },
    {
      title: "Development",
      description: "Building your solution with cutting-edge technology",
      position: "bottom"
    },
    {
      title: "QA / UAT",
      description: "Testing and quality assurance before launch",
      position: "top"
    }
  ];

  return (
    <section className="py-20 bg-background text-white relative overflow-hidden">
      {/* Animated Blobs for Working Process */}
      <AnimatedBlob size="large" color="blue" position="top-left" delay={2} />
      <AnimatedBlob size="medium" color="white" position="bottom-right" delay={0} />
      <AnimatedBlob size="small" color="blue" position="center" delay={4} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-trigger opacity-0">
          <Badge className="mb-4 bg-[#38B6FF] text-white">Our Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Working Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We follow a structured approach to deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white rounded-full px-6 py-3 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <Play className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
              CLICK TO PLAY
            </Button>
            <Button className="bg-white text-black hover:bg-[#38B6FF] hover:text-white rounded-full px-6 py-3 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              Let's get Started
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Mobile-First Responsive Process Timeline */}
        <div className="relative mt-20">
          {/* Desktop: Enhanced horizontal line with gradient and glow */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent opacity-60 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent opacity-30 blur-sm rounded-full"></div>
          </div>
          
          {/* Desktop: Smoother animated flowing line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 transform -translate-y-1/2">
            <div className="w-full h-full relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent opacity-80 rounded-full animate-[flow-line_4s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rounded-full animate-[flow-line_4s_ease-in-out_infinite] animation-delay-1000"></div>
            </div>
          </div>

          {/* Mobile: Enhanced vertical line */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-[#38B6FF] to-transparent opacity-60 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38B6FF] to-transparent opacity-30 blur-sm rounded-full"></div>
          </div>

          {/* Mobile: Smoother vertical flowing line */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-2 transform -translate-x-1/2">
            <div className="w-full h-full relative overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38B6FF] to-transparent opacity-80 rounded-full animate-[flow-line-vertical_4s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-40 rounded-full animate-[flow-line-vertical_4s_ease-in-out_infinite] animation-delay-1000"></div>
            </div>
          </div>

          {/* Desktop Process steps with enhanced animations */}
          <div className="hidden lg:flex justify-between items-center">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center w-64 scroll-trigger opacity-0 ${
                  step.position === "top" ? "mb-20" : "mt-20"
                }`}
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: '0.8s',
                  animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {/* Enhanced step circle with smoother animations */}
                <div className="relative group">
                  <div className="w-16 h-16 rounded-full bg-[#38B6FF] mb-6 relative z-10 flex items-center justify-center shadow-2xl transition-all duration-700 ease-out group-hover:shadow-[#38B6FF]/60 group-hover:scale-110 group-hover:rotate-6">
                    <div className="w-8 h-8 rounded-full bg-white transition-all duration-500 ease-out group-hover:scale-90"></div>
                  </div>
                  
                  {/* Enhanced glow effect with pulsing animation */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#38B6FF] opacity-20 blur-xl animate-pulse group-hover:opacity-40 transition-all duration-700"></div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#38B6FF] opacity-10 blur-2xl group-hover:opacity-30 transition-all duration-700 scale-150"></div>
                  
                  {/* Smoother connecting lines */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#38B6FF] to-transparent transition-all duration-500 ease-out group-hover:w-2 ${
                    step.position === "top" ? "top-16 h-10" : "bottom-16 h-10"
                  }`}></div>
                </div>
                
                {/* Enhanced step content card with smoother animations */}
                <div className={`bg-card/90 backdrop-blur-md text-foreground rounded-2xl p-8 max-w-xs text-center border border-[#38B6FF]/30 hover:border-[#38B6FF]/70 hover:shadow-2xl hover:shadow-[#38B6FF]/20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 ease-out group ${
                  step.position === "top" ? "order-first" : "order-last"
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/10 to-transparent rounded-2xl transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-sm font-bold text-[#38B6FF] bg-[#38B6FF]/20 px-4 py-2 rounded-full border border-[#38B6FF]/30 transition-all duration-500 hover:bg-[#38B6FF]/30">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-[#38B6FF] font-bold text-xl mb-4 group-hover:text-white transition-all duration-500 ease-out">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Animated progress indicator */}
                  <div className="mt-6 h-1 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#38B6FF] to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1200 ease-out delay-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Process steps - Enhanced vertical layout */}
          <div className="lg:hidden space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start gap-8 scroll-trigger opacity-0"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: '0.8s',
                  animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {/* Enhanced step circle for mobile */}
                <div className="relative group flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#38B6FF] relative z-10 flex items-center justify-center shadow-2xl transition-all duration-700 ease-out group-hover:shadow-[#38B6FF]/60 group-hover:scale-110">
                    <div className="w-8 h-8 rounded-full bg-white transition-all duration-500 ease-out group-hover:scale-90"></div>
                  </div>
                  
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#38B6FF] opacity-20 blur-xl animate-pulse group-hover:opacity-40 transition-all duration-700"></div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#38B6FF] opacity-10 blur-2xl group-hover:opacity-30 transition-all duration-700 scale-150"></div>
                </div>
                
                {/* Enhanced step content card for mobile */}
                <div className="bg-card/90 backdrop-blur-md text-foreground rounded-2xl p-8 flex-1 border border-[#38B6FF]/30 hover:border-[#38B6FF]/70 hover:shadow-2xl hover:shadow-[#38B6FF]/20 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-out group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/10 to-transparent rounded-2xl transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-start mb-4">
                      <span className="text-sm font-bold text-[#38B6FF] bg-[#38B6FF]/20 px-4 py-2 rounded-full border border-[#38B6FF]/30 transition-all duration-500 hover:bg-[#38B6FF]/30">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-[#38B6FF] font-bold text-xl mb-4 group-hover:text-white transition-all duration-500 ease-out">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Animated progress indicator */}
                  <div className="mt-6 h-1 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#38B6FF] to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1200 ease-out delay-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced progress indicator */}
        <div className="text-center mt-20 scroll-trigger opacity-0">
          <div className="inline-flex items-center gap-3 bg-card/60 backdrop-blur-md rounded-full px-8 py-4 border border-[#38B6FF]/30 hover:border-[#38B6FF]/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#38B6FF]/20">
            <div className="w-3 h-3 bg-[#38B6FF] rounded-full animate-pulse shadow-lg shadow-[#38B6FF]/50"></div>
            <span className="text-sm text-muted-foreground font-medium">End-to-end process management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
