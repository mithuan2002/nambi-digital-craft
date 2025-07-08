
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            New Age Digital Marketing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Curating the Future of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Brand Storytelling
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Innovative marketing campaigns designed specifically for growing clothing brands and modern cafés. 
            We don't just market—we craft experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://nambi.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg">
                Explore Nambi Tool
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
