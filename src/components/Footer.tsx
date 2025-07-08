
import { Mail, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to elevate your brand's digital presence? We'd love to hear about your vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
              <p className="text-gray-400">hello@nambi.agency</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-xl mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Tool</h3>
              <a 
                href="https://nambi.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                nambi.onrender.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-xl mb-4">
                <ArrowUpRight className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Let's Talk</h3>
              <p className="text-gray-400">Book a consultation</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold mb-4 md:mb-0">
                Nambi
              </div>
              <p className="text-gray-400">
                © 2024 Nambi. Crafting the future of digital marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
