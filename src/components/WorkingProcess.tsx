
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Target, Rocket, CheckCircle } from "lucide-react";
import AnimatedBlob from "@/components/AnimatedBlob";

const WorkingProcess = () => {
  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your business goals and requirements",
      position: "top",
      icon: Target
    },
    {
      title: "Graphic Design",
      description: "Creating visual concepts and design systems",
      position: "bottom",
      icon: Sparkles
    },
    {
      title: "Communication",
      description: "Regular updates and feedback throughout the project",
      position: "top",
      icon: CheckCircle
    },
    {
      title: "Development",
      description: "Building your solution with cutting-edge technology",
      position: "bottom",
      icon: Zap
    },
    {
      title: "QA / UAT",
      description: "Testing and quality assurance before launch",
      position: "top",
      icon: Rocket
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background text-white relative overflow-hidden">
      {/* Animated Blobs for Working Process */}
      <AnimatedBlob size="large" color="blue" position="top-left" delay={2} />
      <AnimatedBlob size="medium" color="white" position="bottom-right" delay={0} />
      <AnimatedBlob size="small" color="blue" position="center" delay={4} />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#38B6FF] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animation: `float-particle 6s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38B6FF 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 scroll-trigger opacity-0">
          <Badge className="mb-4 bg-[#38B6FF] text-white relative">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Process
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse" />
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Our Working Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            We follow a structured approach to deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white rounded-full px-4 md:px-6 py-2 md:py-3 transition-all duration-300 text-sm md:text-base relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              CLICK TO PLAY
            </Button>
            <Button className="bg-white text-black hover:bg-[#38B6FF] hover:text-white rounded-full px-4 md:px-6 py-2 md:py-3 transition-all duration-300 text-sm md:text-base relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38B6FF]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Let's get Started
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-12 md:mt-20">
          {/* Desktop: Animated horizontal line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 bg-gradient-to-r from-[#38B6FF]/20 via-[#38B6FF]/60 to-[#38B6FF]/20 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38B6FF] to-transparent w-20 h-full rounded-full animate-pulse" style={{
              animation: 'line-glow 3s ease-in-out infinite'
            }} />
          </div>

          {/* Mobile: Animated vertical line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#38B6FF]/20 via-[#38B6FF]/60 to-[#38B6FF]/20 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38B6FF] to-transparent w-full h-16 rounded-full" style={{
              animation: 'line-glow-vertical 3s ease-in-out infinite'
            }} />
          </div>

          {/* Desktop Process steps */}
          <div className="hidden lg:flex justify-between items-center">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center w-64 scroll-trigger opacity-0 ${
                  step.position === "top" ? "mb-20" : "mt-20"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step circle with pulse effect */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#38B6FF] mb-6 relative z-10 flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full bg-[#38B6FF] animate-ping opacity-20" />
                    <div className="absolute inset-0 rounded-full bg-[#38B6FF] opacity-30" style={{
                      animation: 'pulse-ring 2s ease-out infinite'
                    }} />
                  </div>
                  
                  {/* Connecting lines */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#38B6FF] to-transparent ${
                    step.position === "top" ? "top-16 h-10" : "bottom-16 h-10"
                  }`}></div>
                </div>
                
                {/* Step content card with hover effect */}
                <div className={`bg-card/90 backdrop-blur-sm text-foreground rounded-2xl p-8 max-w-xs text-center border border-[#38B6FF]/30 hover:border-[#38B6FF]/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group ${
                  step.position === "top" ? "order-first" : "order-last"
                }`}>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-[#38B6FF] bg-[#38B6FF]/20 px-4 py-2 rounded-full border border-[#38B6FF]/30 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38B6FF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-[#38B6FF] font-bold text-xl mb-4 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Process steps - Enhanced */}
          <div className="lg:hidden space-y-8 md:space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 md:gap-6 scroll-trigger opacity-0 px-2 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step circle for mobile with pulse */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#38B6FF] relative z-10 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-[#38B6FF] opacity-20" style={{
                      animation: 'pulse-ring 2s ease-out infinite'
                    }} />
                  </div>
                </div>
                
                {/* Step content card for mobile */}
                <div className="bg-card/90 backdrop-blur-sm text-foreground rounded-xl md:rounded-2xl p-4 md:p-6 flex-1 border border-[#38B6FF]/30 hover:border-[#38B6FF]/60 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#38B6FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-start mb-3">
                      <span className="text-xs md:text-sm font-bold text-[#38B6FF] bg-[#38B6FF]/20 px-3 py-1 md:px-4 md:py-2 rounded-full border border-[#38B6FF]/30">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-[#38B6FF] font-bold text-lg md:text-xl mb-2 md:mb-3 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Progress indicator with animated elements */}
        <div className="text-center mt-12 md:mt-20 scroll-trigger opacity-0 px-4">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-card/60 backdrop-blur-sm rounded-full px-4 md:px-8 py-3 md:py-4 border border-[#38B6FF]/30 hover:border-[#38B6FF]/60 transition-all duration-300 group relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#38B6FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            
            <div className="w-2 h-2 md:w-3 md:h-3 bg-[#38B6FF] rounded-full relative z-10">
              <div className="absolute inset-0 bg-[#38B6FF] rounded-full animate-ping opacity-40" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground font-medium relative z-10">
              End-to-end process management
            </span>
            
            {/* Floating sparkles */}
            <div className="absolute -top-2 -right-2 w-1 h-1 bg-[#38B6FF] rounded-full opacity-60" style={{
              animation: 'sparkle 2s ease-in-out infinite'
            }} />
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white rounded-full opacity-40" style={{
              animation: 'sparkle 2.5s ease-in-out infinite'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
