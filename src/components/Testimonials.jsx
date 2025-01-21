import { motion } from 'framer-motion';
import { useState, useEffect, memo } from 'react';

const Testimonials = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "David Thompson",
      location: "London, UK",
      image: "https://placehold.co/400x400/e2e8f0/1e293b?text=DT",
      quote: "The entire experience exceeded my expectations. From the initial consultation to the final results, the team was professional and caring. My new hairline looks completely natural!",
      rating: 5,
      date: "2 months ago",
      tags: ["Natural Results", "Professional Care", "Excellent Service"]
    },
    {
      id: 2,
      name: "Michael Weber",
      location: "Berlin, Germany",
      image: "https://placehold.co/400x400/e2e8f0/1e293b?text=MW",
      quote: "I researched many clinics before choosing this one. Their attention to detail and transparent communication made me feel confident in my decision. The results speak for themselves.",
      rating: 5,
      date: "1 month ago",
      tags: ["Transparent Process", "Amazing Results", "Worth Every Penny"]
    },
    {
      id: 3,
      name: "James Anderson",
      location: "Sydney, Australia",
      image: "https://placehold.co/400x400/e2e8f0/1e293b?text=JA",
      quote: "The VIP service was outstanding. Everything from airport pickup to hotel accommodation was first-class. Most importantly, my hair transplant results are amazing.",
      rating: 5,
      date: "3 months ago",
      tags: ["VIP Treatment", "Luxury Experience", "Perfect Results"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0047AB]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0047AB]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#0047AB] mb-2 block">
            What Our Patients Say
          </span>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.2] mb-0 text-gray-900">
            Patient Stories
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="grid md:grid-cols-4 gap-6">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  {/* Quote */}
                  <div className="mb-4">
                    <p className="text-gray-600 italic">
                      {testimonials[activeIndex].quote}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>

                  {/* Author Info */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-sm text-[#0047AB]">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {testimonials[activeIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#0047AB]/5 text-[#0047AB] px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-[#0047AB] w-8'
                      : 'bg-[#0047AB]/20 hover:bg-[#0047AB]/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
              <div className="container mx-auto px-4">
                <div className="flex justify-between">
                  <button
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + testimonials.length) % testimonials.length
                      )
                    }
                    className="bg-white/80 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow hover:bg-white transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % testimonials.length)
                    }
                    className="bg-white/80 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow hover:bg-white transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';
export default Testimonials;
