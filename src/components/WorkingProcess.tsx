
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
    <section className="py-12 md:py-20 bg-background text-white relative overflow-hidden">
      {/* Animated Blobs for Working Process */}
      <AnimatedBlob size="large" color="blue" position="top-left" delay={2} />
      <AnimatedBlob size="medium" color="white" position="bottom-right" delay={0} />
      <AnimatedBlob size="small" color="blue" position="center" delay={4} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 scroll-trigger opacity-0">
          <Badge className="mb-4 bg-[#38B6FF] text-white">Our Process</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Our Working Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            We follow a structured approach to deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white rounded-full px-4 md:px-6 py-2 md:py-3 transition-all duration-300 text-sm md:text-base">
              <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              CLICK TO PLAY
            </Button>
            <Button className="bg-white text-black hover:bg-[#38B6FF] hover:text-white rounded-full px-4 md:px-6 py-2 md:py-3 transition-all duration-300 text-sm md:text-base">
              Let's get Started
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-12 md:mt-20">
          {/* Desktop: Simple horizontal line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 bg-[#38B6FF]/60 rounded-full"></div>

          {/* Mobile: Simple vertical line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-[#38B6FF]/60 rounded-full"></div>

          {/* Desktop Process steps */}
          <div className="hidden lg:flex justify-between items-center">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center w-64 scroll-trigger opacity-0 ${
                  step.position === "top" ? "mb-20" : "mt-20"
                }`}
              >
                {/* Step circle */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#38B6FF] mb-6 relative z-10 flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Connecting lines */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#38B6FF] ${
                    step.position === "top" ? "top-16 h-10" : "bottom-16 h-10"
                  }`}></div>
                </div>
                
                {/* Step content card */}
                <div className={`bg-card/90 backdrop-blur-sm text-foreground rounded-2xl p-8 max-w-xs text-center border border-[#38B6FF]/30 ${
                  step.position === "top" ? "order-first" : "order-last"
                }`}>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-[#38B6FF] bg-[#38B6FF]/20 px-4 py-2 rounded-full border border-[#38B6FF]/30">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-[#38B6FF] font-bold text-xl mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Process steps - Improved */}
          <div className="lg:hidden space-y-8 md:space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 md:gap-6 scroll-trigger opacity-0 px-2"
              >
                {/* Step circle for mobile */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#38B6FF] relative z-10 flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white"></div>
                  </div>
                </div>
                
                {/* Step content card for mobile */}
                <div className="bg-card/90 backdrop-blur-sm text-foreground rounded-xl md:rounded-2xl p-4 md:p-6 flex-1 border border-[#38B6FF]/30">
                  <div className="flex items-center justify-start mb-3">
                    <span className="text-xs md:text-sm font-bold text-[#38B6FF] bg-[#38B6FF]/20 px-3 py-1 md:px-4 md:py-2 rounded-full border border-[#38B6FF]/30">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-[#38B6FF] font-bold text-lg md:text-xl mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="text-center mt-12 md:mt-20 scroll-trigger opacity-0 px-4">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-card/60 backdrop-blur-sm rounded-full px-4 md:px-8 py-3 md:py-4 border border-[#38B6FF]/30">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-[#38B6FF] rounded-full"></div>
            <span className="text-xs md:text-sm text-muted-foreground font-medium">End-to-end process management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
