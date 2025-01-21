import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { getCalApi } from "@calcom/embed-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize Cal.com
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"hideEventTypeDetails": false, "layout": "month_view"});
    })();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    // { name: 'Home', href: '#hero' },
    { name: 'Hair Transplant', href: '#services' },
    { name: 'Dental Services', href: '#services' },
    // { name: 'Before & After', href: '#results' },
    // { name: 'Testimonials', href: '#testimonials' },
    { name: 'News', href: '/blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src="/goprime-logo.png" alt="GoPrime Health & Beauty" className="h-14 md:h-20 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`text-gray-600 hover:text-[#0047AB] transition-colors ${item.name === 'News' ? 'bg-red-500 text-white rounded-full px-2 py-1' : ''}`}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cal-link="goprime-hair/30min"
              data-cal-config='{"layout":"month_view"}'
              className="px-6 py-2.5 bg-[#0047AB] text-white rounded-xl hover:bg-[#003380] transition-colors duration-300"
            >
              Book an Appointment
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-gray-600 hover:text-[#0047AB] ${item.name === 'News' ? 'bg-red-500 text-white rounded-full px-2 py-1' : ''}`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cal-link="goprime-hair/30min"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-2.5 bg-[#0047AB] text-white rounded-xl hover:bg-[#003380] transition-colors duration-300 mt-4"
              >
                Book an Appointment
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
