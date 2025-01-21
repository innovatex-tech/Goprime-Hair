import { motion } from 'framer-motion';

const ServicesGrid = () => {
  const handleServiceClick = (service) => {
    // This will be implemented when the service pages are ready
    console.log(`Clicked on ${service} service`);
  };

  const ServiceArrow = () => (
    <div className="absolute right-8 top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
        <svg className="w-8 h-8 text-[#0047AB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  return (
    <section id="services" className="w-full py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premier Services
          </h2>
          <p className="text-lg text-gray-600">
            Experience world-class medical treatments with our expert team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {/* Service 1 - Hair Transplant */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative cursor-pointer"
            onClick={() => handleServiceClick('hair-transplant')}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <ServiceArrow />
              <div className="absolute inset-0">
                <img 
                  src="/adult-male-doing-follicular-unit-extraction.jpg" 
                  alt="Hair Transplant" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-semibold mb-3">Hair Transplant</h3>
                <p className="text-white/80 mb-6">Experience natural-looking results with our advanced transplant techniques.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                    Sapphire FUE
                  </span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                    DHI Method
                  </span>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Service 2 - Dental Aesthetics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative cursor-pointer"
            onClick={() => handleServiceClick('dental-aesthetics')}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <ServiceArrow />
              <div className="absolute inset-0">
                <img 
                  src="/dentist-with-smile.jpg" 
                  alt="Dental Aesthetics" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-semibold mb-3">Dental Aesthetics</h3>
                <p className="text-white/80 mb-6">Transform your smile with cutting-edge dental procedures.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                    Veneers
                  </span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                    Implants
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Coming Soon Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0047AB]/5 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0047AB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0047AB]"></span>
            </span>
            <p className="text-[#0047AB] font-medium">
              Click any service to explore detailed information
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            Comprehensive treatment details, pricing, and before & after gallery
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
