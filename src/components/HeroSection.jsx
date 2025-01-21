import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getCalApi } from "@calcom/embed-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"hideEventTypeDetails": false, "layout": "month_view"});
    })();
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="hero" className="relative min-h-[100svh] w-screen flex items-center pt-16 md:pt-20 bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full">
        <img
          src="/hero-dental.jpg"
          alt="Beautiful smile transformation"
          className="w-full h-full object-cover"
          style={{ objectPosition: '60% 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent md:hidden"></div>
      </div>

      {/* Content */}
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[600px] py-8 md:py-0">
          {/* License Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 md:mb-12"
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-lg">
              <img 
                src="/ministry-health.png" 
                alt="Ministry of Health" 
                className="w-4 md:w-5 h-4 md:h-5" 
                style={{ mixBlendMode: 'multiply' }}
              />
              <span className="text-xs md:text-sm font-medium text-[#0047AB]">Licensed by Turkish Ministry of Health</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 md:mb-12"
          >
            <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#0047AB] mb-2 md:mb-4 block">
              Istanbul's Premier Destination for
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-[64px] leading-[1.1] mb-4 md:mb-6 text-gray-900">
              Hair Transplant & <br />
              <span className="text-[#0047AB]">Dental Aesthetics</span>
            </h1>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Experience world-class treatments with our expert medical team in Istanbul. 
                We combine cutting-edge technology with personalized care to deliver exceptional results.
              </p>
              <ul className="text-gray-700 space-y-1.5 md:space-y-2 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0047AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized treatment plans tailored to your needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0047AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium procedures with guaranteed results</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0047AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive care with luxury accommodation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Key Features */}


          {/* Price Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mb-6 md:mb-12 p-3 md:p-4 bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="text-[#0047AB] text-base md:text-lg font-medium">Contact Us</div>
                <div className="text-xs md:text-sm text-gray-500">For Pricing Details</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-[2%]"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cal-link="goprime-hair/30min"
              data-cal-config='{"layout":"month_view"}'
              className="bg-[#0047AB] text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-[#003380] transition-all duration-300 w-full sm:w-[48%] flex items-center justify-center gap-2"
            >
              <span>Get Free Consultation</span>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleModalToggle}
              className="bg-white/50 backdrop-blur-sm text-[#0047AB] px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-white/60 transition-all duration-300 w-full sm:w-[48%] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Patient Testimonials</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleModalToggle}>
          <div className="bg-white rounded-lg p-4 relative max-w-[90%] sm:max-w-[600px]" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleModalToggle} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10">X</button>
            <video className="w-full h-auto max-h-[80vh]" controls>
              <source src="/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
