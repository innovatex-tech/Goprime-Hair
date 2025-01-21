import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "Share your photos and receive a personalized treatment plan from our experts.",
    },
    {
      number: "02",
      title: "Travel Planning",
      description: "We arrange your VIP transfers and luxury accommodation in Istanbul.",
    },
    {
      number: "03",
      title: "Treatment Day",
      description: "Experience painless treatment with the latest technology and expert care.",
    },
    {
      number: "04",
      title: "Recovery & Support",
      description: "Receive detailed aftercare instructions and lifetime support from our team.",
    }
  ];

  return (
    <section className="w-full py-20 bg-[#0047AB] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Journey to Natural Results
          </h2>
          <p className="text-lg text-white/80">
            A seamless experience from consultation to recovery
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-white/20">
                  <div className="absolute top-0 left-0 h-full bg-white/40 animate-progressLine" />
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-white text-[#0047AB] px-8 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
