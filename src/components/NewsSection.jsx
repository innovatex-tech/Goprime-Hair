import React, { useEffect, useState } from 'react';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = 'b5090a4f2a324e028f5aba3c5d45d0c9';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=hair+transplant&apiKey=${apiKey}`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();

    const intervalId = setInterval(fetchNews, 24 * 60 * 60 * 1000); // Update every 24 hours

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <section className="news-section">
      <h2 className="text-2xl font-bold mb-4">Hair Transplant News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md transition-transform transform hover:scale-105 duration-300">
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="mb-2 rounded" />}
            <h3 className="font-semibold text-lg text-[#0047AB]"><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
            <p className="text-gray-700 mt-1 text-sm">{article.description}</p>
            <p className="text-gray-500 text-xs mt-2">{new Date(article.publishedAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
