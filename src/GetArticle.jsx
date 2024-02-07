import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetComments from "./GetComments";

export default function GetArticle() {
  let { article_id } = useParams();
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
        <p>
          Votes: {articleItem.votes}
          <button>UPVOTE TO GO HERE</button>
        </p>
      </div>
      <img src={articleItem.article_img_url} alt={articleItem.topic} />
      <p className="article-text">{articleItem.body}</p>
      <h2>comment form to go here!</h2>
      <GetComments article_id={articleItem.article_id} />
    </div>
  );
}
