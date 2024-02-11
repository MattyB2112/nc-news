import Image from "./Images/pagenotfound.jpeg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentCards from "./CommentCards";
import AddComment from "./AddComment";
import handleVote from "./handleVote";
import dateFormatter from "./dateFormatter";
import { fetchSingleArticle } from "./APICalls";
import timeFormatter from "./timeFormatter";

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
          Sorry, it doesnt look like that article exists, have you typed the
          article ID correctly?
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
      <div className="article-item" key={articleItem.article_id}>
        <h1 className="article-item-header">{articleItem.title}</h1>
        <p>by {articleItem.author}</p>
        <div className="article-header-holder">
          <p>
            Posted at {timeFormatter(articleItem.created_at)} on{" "}
            {dateFormatter(articleItem.created_at)}
          </p>
          <div className="votes-holder">
            Votes: {articleItem.votes}&nbsp;
            <button
              className="vote-button"
              onClick={() => handleVote(1, articleItem, setArticleItem)}
            >
              👍
            </button>
            <button
              className="vote-button"
              onClick={() => handleVote(-1, articleItem, setArticleItem)}
            >
              👎
            </button>
          </div>
        </div>
        <img
          src={articleItem.article_img_url}
          alt={`an image to do with ${articleItem.topic}`}
          className="article-item-image"
        />
        <p className="article-text">{articleItem.body}</p>
        <CommentCards article_id={articleItem.article_id} />
      </div>
    );
}
