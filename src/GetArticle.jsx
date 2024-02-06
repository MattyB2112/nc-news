import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GetArticle() {
  const { article_id } = useParams();
  const [articleItem, setArticleItem] = useState([]);

  useEffect(() => {
    fetch(`https://nc-news-itve.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticleItem(result.article[0]);
      });
  }, []);

  return (
    <div key={articleItem.article_id}>
      <h1>{articleItem.title}</h1>
      <div className="article-header-holder">
        <p>Article by: {articleItem.author}</p>
        <p>Votes: {articleItem.votes}</p>
      </div>
      <img src={articleItem.article_img_url} alt={articleItem.topic} />
      <p className="article-text">{articleItem.body}</p>
    </div>
  );
}
