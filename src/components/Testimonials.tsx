
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Working with HACHI AGENCY has been a game-changer for our app's user experience.",
      additionalText: "Their innovative UI designs and seamless Framer development have elevated our product to new heights. Kudos to HACHI for their expertise and dedication.",
      author: "Joakim Korsgaard",
      position: "CEO, Tech Innovations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      rating: 5,
      text: "As a fellow UI/UX designer, I'm truly impressed by HACHI AGENCY's ability to create visually stunning and user-friendly interfaces.",
      additionalText: "Their Framer development skills bring designs to life effortlessly. A true professional in the field!",
      author: "Maria Septimus",
      position: "Lead Designer, Dynamics Agency",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      rating: 5,
      text: "We collaborated with HACHI AGENCY on a critical project, and their UI/UX designs not only met but exceeded our expectations.",
      additionalText: "It's a pleasure to work with professionals who understand the art and science of user experience.",
      author: "Giana Kenter",
      position: "Founder, Mobile Dynamics Startup",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      rating: 5,
      text: "Working with HACHI AGENCY has been a game-changer for our app's user experience.",
      additionalText: "Their innovative UI designs and seamless Framer development have elevated our product to new heights. Kudos to HACHI for their expertise and dedication.",
      author: "Sienna Hewitt",
      position: "CEO, Tech Innovations",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            While most of my client reviews are NDA-protected (because, you know, top-secret agency white label stuff), 
            I managed to sneak in a few favorites from my previous partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-900 font-semibold mb-3 text-sm leading-relaxed">
                {testimonial.text}
              </p>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {testimonial.additionalText}
              </p>

              {/* Author with Avatar Component */}
              <div className="flex items-center">
                <Avatar className="mr-3 w-10 h-10">
                  <AvatarImage 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm truncate">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-xs truncate">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
