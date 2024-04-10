import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const NewsHolder = () => {
  const [newsdata, setNewsdata] = useState([]);

  const location = useLocation();
  const locationWithoutSlash = location.pathname.slice(1);
  const [loading,setLoading]=useState(true)

  const fetchdata = async () => {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?category=${locationWithoutSlash}&apiKey=f168d69928c548aaa93fe88f78667ab9`
          );
          const newsdata = await response.json();
      
          setNewsdata(newsdata.articles);
          setLoading(false)

    } catch (error) {
        
    }
  };

  useEffect(() => {
    fetchdata();
  }, [locationWithoutSlash]);

  return (
      <div className="cards">
        {loading && <span className="loader"></span>}
        {newsdata.map((item, index) => {
          return <NewsCard key={index} item={item} />;
        })}
      </div>

  );
};

export default NewsHolder;