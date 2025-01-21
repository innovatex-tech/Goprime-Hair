import { motion, AnimatePresence } from 'framer-motion';
import { useState, memo } from 'react';

const FAQ = memo(() => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the hair transplant procedure take?",
      answer: "The procedure typically takes 6-8 hours, depending on the number of grafts needed. We use the most advanced techniques to ensure optimal results while maintaining comfort throughout the procedure."
    },
    {
      question: "Is the procedure painful?",
      answer: "No, the procedure is performed under local anesthesia. You may feel slight discomfort during the administration of anesthesia, but the actual transplant process is painless."
    },
    {
      question: "When will I see the final results?",
      answer: "You'll start seeing initial growth at 3-4 months, with significant improvement at 6-8 months. The final results are typically visible after 12-14 months when the transplanted hair has fully matured."
    },
    {
      question: "How long do I need to stay in Istanbul?",
      answer: "We recommend staying for 3-4 days. This allows for the procedure day, a follow-up check, and proper initial recovery time before traveling back home."
    },
    {
      question: "What's included in the package price?",
      answer: "Our all-inclusive packages cover the procedure, medications, VIP transfers, luxury hotel accommodation, translator services, and aftercare products. There are no hidden costs."
    },
    {
      question: "How natural will my results look?",
      answer: "Our surgeons are specialists in creating natural-looking hairlines. We consider your facial features, age, and existing hair characteristics to ensure the results look completely natural and age-appropriate."
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about your hair transplant journey
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white/80 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#0047AB]/5 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg
                        className="w-4 h-4 text-[#0047AB]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-600 border-t border-gray-100 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#003380] transition-all duration-300 group"
          >
            Contact Us
            <svg
              className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';
export default FAQ;
