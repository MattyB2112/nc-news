import { useEffect, useState } from "react";
import Articalizer from "./Articalizer";

export default function ArticleHolder() {
  const [articles, setArticles] = useState([]);
  const [mostCommentedCooking, setMostCommentedCooking] = "";
  const [mostCommentedCoding, setMostCommentedCoding] = "";
  const [mostCommentedFootball, setMostCommentedFootball] = "";

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
