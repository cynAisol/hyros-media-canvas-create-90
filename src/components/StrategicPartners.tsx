
import { Badge } from "@/components/ui/badge";

const StrategicPartners = () => {
  const partners = [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    {
      name: "PrestaShop", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/PrestaShop_Logo.png"
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
    },
    {
      name: "Shopify Plus",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
    },
    {
      name: "Magento",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magento_Logo.svg/2560px-Magento_Logo.svg.png"
    },
    {
      name: "BigCommerce",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/BigCommerce-Logo.png"
    }
  ];

  const secondRowPartners = [
    {
      name: "Georgias",
      logo: "https://via.placeholder.com/150x60/374151/ffffff?text=Georgias"
    },
    {
      name: "GROWAVE",
      logo: "https://via.placeholder.com/150x60/3b82f6/ffffff?text=GROWAVE"
    },
    {
      name: "Klaviyo",
      logo: "https://via.placeholder.com/150x60/000000/ffffff?text=klaviyo"
    },
    {
      name: "Google Partner",
      logo: "https://via.placeholder.com/150x60/4285f4/ffffff?text=Google+Partner"
    },
    {
      name: "Clutch",
      logo: "https://via.placeholder.com/150x60/000000/ffffff?text=Clutch"
    },
    {
      name: "AppFutura",
      logo: "https://via.placeholder.com/150x60/ef4444/ffffff?text=appfutura"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500 text-white">Partners</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Strategic Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading platforms and technologies to deliver exceptional results.
          </p>
        </div>

        {/* First row of partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[120px]"
            >
              <img 
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/150x60/6b7280/ffffff?text=${partner.name}`;
                }}
              />
            </div>
          ))}
        </div>

        {/* Second row of partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center">
          {secondRowPartners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[120px]"
            >
              <img 
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;
