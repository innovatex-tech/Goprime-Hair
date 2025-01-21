import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';

const Blogs = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">Blogs</h1>
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
