
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of your project. A simple website typically takes 2-4 weeks, while more complex e-commerce or custom applications can take 6-12 weeks. We'll provide you with a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security monitoring, backup services, and technical support to ensure your website runs smoothly after launch."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We build all our websites with SEO best practices in mind and offer additional digital marketing services including content strategy, social media management, and paid advertising campaigns."
    },
    {
      question: "What platforms do you work with?",
      answer: "We work with various platforms including custom React applications, WordPress, Shopify, PrestaShop, Magento, and more. We'll recommend the best platform based on your specific needs and budget."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with startups, small businesses, and large enterprises. Our team adapts our approach and solutions to match your business size, budget, and specific requirements."
    },
    {
      question: "What's included in your web development service?",
      answer: "Our comprehensive service includes strategy consultation, UI/UX design, development, testing, deployment, training, and post-launch support. We handle everything from concept to completion."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Blurred Blob Background - Left Side */}
      <svg
        className="absolute -top-32 -left-32 w-[500px] h-[500px] z-0 blur-3xl opacity-30 pointer-events-none select-none"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="250" cy="250" rx="220" ry="180" fill="#a78bfa" />
        <ellipse cx="350" cy="180" rx="120" ry="90" fill="#34d399" fillOpacity="0.6" />
      </svg>
      {/* Blurred Blob Background - Right Side */}
      <svg
        className="absolute -bottom-24 right-0 w-[400px] h-[400px] z-0 blur-2xl opacity-20 pointer-events-none select-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="200" cy="200" rx="170" ry="120" fill="#fbbf24" />
        <ellipse cx="300" cy="120" rx="80" ry="60" fill="#60A5FA" fillOpacity="0.4" />
      </svg>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center relative">
          <span className="absolute -left-8 top-2 text-3xl">❓</span>
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <span>Frequently Asked Questions</span>
            <span className="text-3xl">🤔</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Get answers to the most common questions about our services and process.
          </p>
          <span className="absolute -right-8 top-2 text-3xl">💭</span>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* FAQ Support Card */}
        <div className="flex justify-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg text-left border border-gray-100">
            <div className="text-blue-600 font-bold mb-2 flex items-center gap-2">
              <span>🔍</span>
              <span>Still have questions?</span>
            </div>
            <div className="text-gray-700">Don't hesitate to reach out! Our team is here to help you understand exactly how we can bring your vision to life.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
