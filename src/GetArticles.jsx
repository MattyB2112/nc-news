import { useState, useEffect } from "react";
import Articalizer from "./Articalizer";

export default function GetArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://nc-news-itve.onrender.com/api/articles")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result.articles);
      });
  }, []);
  return <Articalizer articles={articles} />;
}
