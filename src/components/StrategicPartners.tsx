
import { Badge } from "@/components/ui/badge";

const StrategicPartners = () => {
  const partners = [
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
    },
    {
      name: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
    },
    {
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
    },
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
    },
    {
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 flex flex-col items-center relative">
          <Badge className="mb-2 bg-[#38B6FF] text-white border-0">Partners</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 flex items-center justify-center gap-2">
            <span>Our Portfolio</span>
          </h2>
          <div className="text-gray-600 text-lg mb-4">Trusted by leading brands worldwide</div>
        </div>
        
        {/* Horizontally Scrolling Container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {/* Duplicate partners for seamless loop effect */}
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 min-h-[80px] min-w-[150px] p-4 hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/150x60/6b7280/ffffff?text=${partner.name}`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Testimonial Card */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg text-left border border-gray-200">
            <div className="text-gray-700 italic mb-2">"Working with HACHI AGENCY was a game changer for our business. Their team delivered beyond expectations!"</div>
            <div className="font-bold text-black">— Alex P., CEO of ExampleCorp</div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for hiding scrollbar */}
      <style>{`
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

export default StrategicPartners;
