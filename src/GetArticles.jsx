import { useState, useEffect } from "react";
import Articalizer from "./Articalizer";

export default function GetArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://nc-news-itve.onrender.com/api/articles")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result.articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <h1>LOADING...</h1>;
  } else return <Articalizer articles={articles} />;
}
