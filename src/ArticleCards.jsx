import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Articalizer from "./Articalizer";
import { fetchArticles } from "./APICalls";

export default function ArticleCards() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic") || "";
  const sortByQuery = searchParams.get("sort_by") || "created_at";
  const orderQuery = searchParams.get("order") || "ASC";

  useEffect(() => {
    fetchArticles(topicQuery, sortByQuery, orderQuery).then((result) => {
      setArticles(result.data.articles);
      setIsLoading(false);
    });
  }, [topicQuery, sortByQuery, orderQuery]);

  if (isLoading === true) {
    return <h1>LOADING...</h1>;
  } else return <Articalizer articles={articles} />;
}
