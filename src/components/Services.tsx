
import { Shirt, Coffee, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "StyledBy",
      subtitle: "For Clothing Brands",
      description: "Curated marketing strategies that transform fashion brands into lifestyle statements. We understand the pulse of style-conscious consumers.",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Coffee,
      title: "SipShare",
      subtitle: "For Food Chains",
      description: "Specialized branding strategies for new-age cafés and food chains that prioritize digital presence and community building.",
      color: "bg-orange-100 text-orange-700"
    },
    {
      icon: Users,
      title: "Nambi Tool",
      subtitle: "Customer Retention",
      description: "Our proprietary customer engagement platform designed specifically for retail brands in fashion and food industries.",
      color: "bg-blue-100 text-blue-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Specialized Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three distinct approaches, one unified vision: driving growth through innovative digital strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
