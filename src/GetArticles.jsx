import { useState, useEffect } from "react";
import Articalizer from "./Articalizer";
import getArticles from "./getArticles";

export default function GetArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  getArticles(articles, setArticles, isLoading, setIsLoading);

  if (isLoading === true) {
    return <h1>LOADING...</h1>;
  } else return <Articalizer articles={articles} />;
}
