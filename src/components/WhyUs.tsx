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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Blurred Blob Background */}
      <svg
        className="absolute -top-32 -left-32 w-[500px] h-[500px] z-0 blur-3xl opacity-40 pointer-events-none select-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="250" cy="250" rx="220" ry="180" fill="#60A5FA" />
        <ellipse cx="350" cy="180" rx="120" ry="90" fill="#fbbf24" fillOpacity="0.6" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center relative">
          <span className="absolute -left-8 top-2 text-3xl">💡</span>
          <Badge className="mb-4">Why Choose Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <span>Why *HYROS MEDIA</span>
            <span className="text-3xl">🌟</span>
          </h2>
          <div className="text-gray-500 text-lg mb-4">Your partner for speed, security, and innovation</div>
          
          {/* How We Work Process Row */}
          <div className="flex justify-center gap-10 mb-10">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">🔍</span>
              <span className="text-xs text-gray-500">Discover</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">🎨</span>
              <span className="text-xs text-gray-500">Design</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">💻</span>
              <span className="text-xs text-gray-500">Develop</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">🚀</span>
              <span className="text-xs text-gray-500">Deliver</span>
            </div>
          </div>
          <span className="absolute -right-8 top-2 text-3xl">🦄</span>
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
      {/* Fun Fact Card */}
      <div className="flex justify-center mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg text-left border border-gray-100">
          <div className="text-blue-600 font-bold mb-2">Did you know?</div>
          <div className="text-gray-700">HYROS MEDIA has helped over <span className='font-bold'>49+</span> businesses launch their digital presence with a 98% client satisfaction rate!</div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
