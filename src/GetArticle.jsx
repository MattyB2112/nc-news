import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetComments from "./GetComments";
import AddComment from "./AddComment";
import handleVote from "./handleVote";

export default function GetArticle() {
  let { article_id } = useParams();
  const [articleItem, setArticleItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nc-news-itve.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticleItem(result.article[0]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading === true) {
    return <h1>LOADING...</h1>;
  } else
    return (
      <div key={articleItem.article_id}>
        <h1>{articleItem.title}</h1>
        <div className="article-header-holder">
          <p>Article by: {articleItem.author}</p>
          <p>
            Votes: {articleItem.votes}
            <button onClick={() => handleVote(1, articleItem, setArticleItem)}>
              👍
            </button>
            <button onClick={() => handleVote(-1, articleItem, setArticleItem)}>
              👎
            </button>
          </p>
        </div>
        <img src={articleItem.article_img_url} alt={articleItem.topic} />
        <p className="article-text">{articleItem.body}</p>
        <AddComment />
        <GetComments article_id={articleItem.article_id} />
      </div>
    );
}
