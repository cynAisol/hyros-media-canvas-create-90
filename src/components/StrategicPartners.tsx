import { Badge } from "@/components/ui/badge";

const StrategicPartners = () => {
  // Use 5 new, diverse brand logos from Wikimedia Commons
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
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Blurred Blob Background - Right Side */}
      <svg
        className="absolute -top-24 right-0 w-[400px] h-[400px] z-0 blur-2xl opacity-30 pointer-events-none select-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="200" cy="200" rx="170" ry="120" fill="#a78bfa" />
        <ellipse cx="300" cy="120" rx="80" ry="60" fill="#34d399" fillOpacity="0.5" />
      </svg>
      {/* Blurred Blob Background - Left Side */}
      <svg
        className="absolute -bottom-24 -left-24 w-[350px] h-[350px] z-0 blur-2xl opacity-20 pointer-events-none select-none"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="175" cy="175" rx="140" ry="100" fill="#fbbf24" />
        <ellipse cx="80" cy="100" rx="60" ry="40" fill="#60A5FA" fillOpacity="0.4" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 flex flex-col items-center relative">
          <span className="absolute -left-8 top-2 text-3xl">🎉</span>
          <Badge className="mb-2 bg-orange-500 text-white">Partners</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <span>Our Portfolio </span>
            <span className="text-2xl">🤝</span>
          </h2>
          <div className="text-gray-500 text-lg mb-4">Trusted by leading brands worldwide</div>
          <span className="absolute -right-8 top-2 text-3xl">🚀</span>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center py-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center bg-white rounded-lg shadow-sm min-h-[80px] min-w-[150px] p-2">
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
          {/* Testimonial Card */}
          <div className="mt-10 flex justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg text-left border border-gray-100">
              <div className="text-gray-700 italic mb-2">“Working with HACHI MEDIA was a game changer for our business. Their team delivered beyond expectations!”</div>
              <div className="font-bold text-gray-900">— Alex P., CEO of ExampleCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;
