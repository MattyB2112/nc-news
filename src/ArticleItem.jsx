import Image from "./Images/pagenotfound.jpeg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentCards from "./CommentCards";
import AddComment from "./AddComment";
import handleVote from "./handleVote";
import dateFormatter from "./dateFormatter";
import { fetchSingleArticle } from "./APICalls";

export default function ArticleItem() {
  let { article_id } = useParams();
  const [articleItem, setArticleItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((result) => {
        setArticleItem(result.data.article[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h1>
          Sorry, it doesnt look like that article doesn't exist, have you typed
          the article ID correctly?
        </h1>
        <img
          className="page-not-found-img"
          src={Image}
          alt="cartoon detective with a magnifying glass"
        />
      </>
    );
  } else if (isLoading === true) {
    return <h1>LOADING...</h1>;
  } else
    return (
      <div key={articleItem.article_id}>
        <h1>{articleItem.title}</h1>
        <p>by {articleItem.author}</p>
        <div className="article-header-holder">
          <p>Posted at {dateFormatter(articleItem.created_at)}</p>
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
        <CommentCards article_id={articleItem.article_id} />
      </div>
    );
}
