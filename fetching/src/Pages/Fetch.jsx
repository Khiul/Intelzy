import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard/NewsCard";
export default function Fetch() {
  const [newsData, setNewsData] = useState([]);
  const [loading,setLoading]=useState(true)

  const fetchData = async () => {
    try {
      const resp = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=f168d69928c548aaa93fe88f78667ab9"
      );
      const data = await resp.json();
      setNewsData(data.articles);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="cards">
        {loading && <span className="loader"></span>}
      {newsData.map((item, index) => {
        return(
          <NewsCard key={index} item={item}/>
        )
      })}
    </div>
  );
}
