
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      number: "01",
      title: "Increase speed to market",
      color: "bg-green-500",
      lineColor: "border-green-500"
    },
    {
      number: "02", 
      title: "Reduce development cost",
      color: "bg-yellow-500",
      lineColor: "border-yellow-500"
    },
    {
      number: "03",
      title: "Assure information security", 
      color: "bg-purple-500",
      lineColor: "border-purple-500"
    },
    {
      number: "04",
      title: "Get high-quality software",
      color: "bg-red-500",
      lineColor: "border-red-500"
    },
    {
      number: "05",
      title: "Scale team up and down",
      color: "bg-blue-500", 
      lineColor: "border-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Why Choose Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why *HYROS MEDIA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[200px] flex flex-col justify-between">
                <div>
                  <div className={`inline-block ${benefit.color} text-white text-sm font-bold px-3 py-1 rounded mb-4`}>
                    {benefit.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                </div>
                
                {/* Horizontal line */}
                <div className={`w-full h-1 ${benefit.lineColor} border-t-4 mt-6`}></div>
              </div>
            </div>
          ))}
          
          {/* Exclusive Delivery Framework card */}
          <div className="relative">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[200px] flex flex-col justify-between group cursor-pointer">
              <div>
                <h3 className="text-xl font-bold text-green-500 mb-4 leading-tight">
                  Exclusive Delivery Framework
                </h3>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="w-3/4 h-1 bg-green-500"></div>
                <ArrowRight className="w-6 h-6 text-green-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
