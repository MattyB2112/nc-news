import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function getArticles(
  articles,
  setArticles,
  isLoading,
  setIsLoading
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic") || "";
  const sort_by = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "ASC";

  axios
    .get(
      `https://nc-news-itve.onrender.com/api/articles/?topic=${topic}&sort_by=${sort_by}&order=${order}`
    )
    .then((result) => {
      setArticles(result.data.articles);
      setIsLoading(false);
    });
}

// ?topic=topic&sort_by=votes
