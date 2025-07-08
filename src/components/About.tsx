
import { Target, Zap, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every campaign is meticulously crafted with data-driven insights and creative intuition."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of digital trends to ensure your brand remains relevant and engaging."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Your success is our success. We grow together through collaborative relationships."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Nambi Exists
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In a world where every brand fights for attention, we believe in the power of 
              authentic storytelling and strategic innovation. We don't just create campaigns—we 
              build lasting connections between brands and their communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's explore how our specialized strategies can elevate your brand's digital presence.
            </p>
            <a 
              href="https://nambi.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Discover Nambi Tool
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
