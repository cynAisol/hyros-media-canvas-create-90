
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
          <div className="flex justify-center gap-4">
            <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white rounded-full px-6 py-3">
              <Play className="w-5 h-5 mr-2" />
              CLICK TO PLAY
            </Button>
            <Button className="bg-white text-black hover:bg-[#38B6FF] hover:text-white rounded-full px-6 py-3">
              Let's get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Enhanced Process Timeline */}
        <div className="relative mt-20">
          {/* Main connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent transform -translate-y-1/2"></div>
          
          {/* Animated flowing line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent opacity-50 flow-line"></div>
            </div>
          </div>

          {/* Process steps with enhanced styling */}
          <div className="relative flex justify-between items-center">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center w-64 scroll-trigger opacity-0 ${
                  step.position === "top" ? "mb-20" : "mt-20"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced step circle with glow effect */}
                <div className="relative group">
                  <div className="w-12 h-12 rounded-full bg-[#38B6FF] mb-6 relative z-10 flex items-center justify-center shadow-lg group-hover:shadow-[#38B6FF]/50 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-[#38B6FF] opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Connecting lines to card */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#38B6FF] to-transparent ${
                    step.position === "top" ? "top-12 h-8" : "bottom-12 h-8"
                  }`}></div>
                </div>
                
                {/* Enhanced step content card */}
                <div className={`bg-card/80 backdrop-blur-sm text-foreground rounded-xl p-6 max-w-xs text-center border border-[#38B6FF]/20 hover:border-[#38B6FF]/50 hover:shadow-lg hover:shadow-[#38B6FF]/10 transform hover:scale-105 transition-all duration-500 group ${
                  step.position === "top" ? "order-first" : "order-last"
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#38B6FF]/5 to-transparent rounded-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-sm font-medium text-[#38B6FF] bg-[#38B6FF]/10 px-3 py-1 rounded-full">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-[#38B6FF] font-bold text-xl mb-3 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="text-center mt-16 scroll-trigger opacity-0">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-[#38B6FF]/20">
            <div className="w-2 h-2 bg-[#38B6FF] rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">End-to-end process management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
