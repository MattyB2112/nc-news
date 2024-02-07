import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetComments from "./GetComments";
import UpdateVotes from "./UpdateVotes";
import axios from "axios";

export default function GetArticle() {
  let { article_id } = useParams();
  const [articleItem, setArticleItem] = useState([]);
  const [votes, setVotes] = useState(articleItem.votes);
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

  function handleUpvote(event, increment = 1) {
    event.preventDefault();
    const updateObject = {};
    updateObject.inc_votes = increment;
    axios
      .patch(
        `https://nc-news-itve.onrender.com/api/articles/${articleItem.article_id}`,
        updateObject
      )
      .then((response) => {
        setArticleItem(response.data.article);
        setVotes(response.data.article.votes);
      });
  }

  function handleDownvote(event, increment = -1) {
    event.preventDefault();
    const updateObject = {};
    updateObject.inc_votes = increment;
    axios
      .patch(
        `https://nc-news-itve.onrender.com/api/articles/${articleItem.article_id}`,
        updateObject
      )
      .then((response) => {
        setArticleItem(response.data.article);
        setVotes(response.data.article.votes);
      });
  }

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
            <button onClick={handleUpvote}>👍</button>
            <button onClick={handleDownvote}>👎</button>
          </p>
        </div>
        <img src={articleItem.article_img_url} alt={articleItem.topic} />
        <p className="article-text">{articleItem.body}</p>
        <h2>comment form to go here!</h2>
        <GetComments article_id={articleItem.article_id} />
      </div>
    );
}
