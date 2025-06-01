
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#38B6FF] text-white">Our Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Working Process
          </h2>
          <Button className="bg-[#38B6FF] hover:bg-white hover:text-black text-white rounded-full px-6 py-3">
            <Play className="w-5 h-5 mr-2" />
            CLICK TO PLAY
          </Button>
          <Button className="absolute top-8 right-8 bg-white text-black hover:bg-[#38B6FF] hover:text-white rounded-full px-6 py-3">
            Let's get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-20">
          {/* Flowing line background */}
          <div className="absolute top-1/2 left-0 right-0 h-1">
            <svg className="w-full h-24" viewBox="0 0 1200 100" fill="none">
              <path 
                d="M0 50 Q300 20 600 50 T1200 50" 
                stroke="#6B7280" 
                strokeWidth="2" 
                fill="none"
              />
              <path 
                d="M0 50 Q300 80 600 50 T1200 50" 
                stroke="#9CA3AF" 
                strokeWidth="1" 
                fill="none"
              />
              <path 
                d="M0 50 Q300 30 600 50 T1200 50" 
                stroke="#6B7280" 
                strokeWidth="1" 
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Process steps */}
          <div className="relative flex justify-between items-center">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center ${
                  step.position === "top" ? "mb-20" : "mt-20"
                }`}
              >
                {/* Step circle */}
                <div className="w-6 h-6 rounded-full bg-gray-400 mb-4 relative z-10"></div>
                
                {/* Step content */}
                <div className={`bg-white text-black rounded-lg p-4 max-w-xs text-center ${
                  step.position === "top" ? "order-first" : "order-last"
                }`}>
                  <h3 className="text-gray-600 font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-black text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
