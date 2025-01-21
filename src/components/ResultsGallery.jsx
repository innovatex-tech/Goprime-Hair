import { motion } from 'framer-motion';
import { useState, memo } from 'react';

const ResultsGallery = memo(() => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const closeModal = () => setModalImage(null);

  const cases = [
    {
      id: 1,
      title: "Natural Hairline Design",
      description: "Restored confidence with natural-looking results",
      beforeImage: "/images/results/case1-before.jpg",
      afterImage: "/images/results/case1-after.jpg",
      stats: [
        { label: "Grafts", value: "3500" },
        { label: "Technique", value: "Sapphire FUE" },
        { label: "Recovery", value: "7 Days" }
      ]
    },
    {
      id: 2,
      title: "Crown Density Restoration",
      description: "Full, natural coverage for lasting confidence",
      beforeImage: "/images/results/case2-before.jpg",
      afterImage: "/images/results/case2-after.jpg",
      stats: [
        { label: "Grafts", value: "4000" },
        { label: "Technique", value: "DHI" },
        { label: "Recovery", value: "7 Days" }
      ]
    },
    {
      id: 3,
      title: "Complete Coverage",
      description: "Transform your appearance with expert care",
      beforeImage: "/images/results/case3-before.jpg",
      afterImage: "/images/results/case3-after.jpg",
      stats: [
        { label: "Grafts", value: "4500" },
        { label: "Technique", value: "Sapphire FUE" },
        { label: "Recovery", value: "7 Days" }
      ]
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0047AB]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0047AB]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
        >
          <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#0047AB] mb-2 block">
            Real Patient Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.2] mb-0 text-gray-900">
            Transformative Results
          </h2>
        </motion.div>

        {/* Results Showcase */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Case Display */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Before/After Container */}
                <div className="relative group">
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {/* Before Image */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 rounded-lg md:rounded-xl" />
                      <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-black/50 backdrop-blur-sm text-white px-2 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                        
                      </div>
                      <img
                        src={cases[selectedCase].beforeImage}
                        onClick={() => setModalImage(cases[selectedCase].beforeImage)}
                        className="w-full aspect-square object-cover rounded-lg md:rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
                        loading="lazy"
                      />
                    </div>
                    {/* After Image */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#0047AB]/20 group-hover:bg-[#0047AB]/10 transition-colors duration-300 rounded-lg md:rounded-xl" />
                      <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-[#0047AB]/50 backdrop-blur-sm text-white px-2 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                       
                      </div>
                      <img
                        src={cases[selectedCase].afterImage}
                        onClick={() => setModalImage(cases[selectedCase].afterImage)}
                        className="w-full aspect-square object-cover rounded-lg md:rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Case Details */}
                <div className="flex flex-col justify-center space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display text-gray-900 mb-2">
                      {cases[selectedCase].title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {cases[selectedCase].description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    {cases[selectedCase].stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-[#0047AB]/5 rounded-lg md:rounded-xl p-2 md:p-4 text-center"
                      >
                        <div className="text-base md:text-lg font-medium text-[#0047AB]">
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Case Navigation */}
            <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
              {cases.map((caseItem, index) => (
                <button
                  key={caseItem.id}
                  onClick={() => setSelectedCase(index)}
                  className={`relative rounded-lg overflow-hidden group ${
                    selectedCase === index ? 'ring-2 ring-[#0047AB]' : ''
                  }`}
                >
                  <div className="grid grid-cols-2 w-20 md:w-24 h-10 md:h-12">
                    <img
                      src={caseItem.beforeImage}
                      alt={`${caseItem.title} Before`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <img
                      src={caseItem.afterImage}
                      alt={`${caseItem.title} After`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    selectedCase === index ? 'opacity-0' : 'group-hover:opacity-0'
                  }`} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
            >
              Close
            </button>
            <img
              src={modalImage}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
});

ResultsGallery.displayName = 'ResultsGallery';
export default ResultsGallery;
