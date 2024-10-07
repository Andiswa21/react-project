import { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef();
  const BASE_URL = `https://newsapi.org/v2/everything?`;

  function reload() {
    setLoading(true);
    setError(null);
    
    const inputText = inputRef.current.value;
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      console.error("API key is not available");
      setError("API key is not available");
      setLoading(false);
      return;
    }

    const url = `${BASE_URL}q=${inputText ? inputText : "All"}&apiKey=${apiKey}`;
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch articles");
        setLoading(false);
      });
  }

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      <div className="d-flex" role="search">
        <input className="form-control me-2" ref={inputRef} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" onClick={reload} type="submit">Search</button>
      </div>
      
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && articles.length === 0 && <p>No articles found.</p>}
      
      {articles?.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default NewsBoard;
