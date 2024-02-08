import { useEffect, useState } from "react";
import axios from "axios";
import dateFormatter from "./dateFormatter";
import deleteComment from "./DeleteComment";

export default function GetComments(props) {
  const { article_id } = props;
  const [comments, setComments] = useState([]);
  const [commentsHidden, setCommentsHidden] = useState(true);

  useEffect(() => {
    fetch(
      `https://nc-news-itve.onrender.com/api/articles/${article_id}/comments`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setComments(result);
      });
  }, [comments]);

  function handleClick(event) {
    event.preventDefault();
    if (commentsHidden === true) {
      setCommentsHidden(false);
    } else {
      setCommentsHidden(true);
    }
  }

  if (comments.length === 0) {
    return (
      <h2>
        <br />
        No comments on this article yet! Add one above to start the discussion!
      </h2>
    );
  } else
    return (
      <section className="comments">
        <button className="show-hide-comments" onClick={handleClick}>
          <h4>{commentsHidden === true ? "Show" : "Hide"} Comments</h4>
        </button>
        {commentsHidden === true ? (
          <div></div>
        ) : (
          comments.map((comment) => {
            return (
              <div className="comment-holder" key={comment.comment_id}>
                <h4 className="comment-author">{comment.author}</h4>
                <div className="comment-body">{comment.body}</div>
                <br />
                <div className="comment-posted-date">
                  Posted at:
                  {dateFormatter(comment.created_at)}
                </div>
                <button onClick={() => deleteComment(comment.comment_id)}>
                  delete comment
                </button>
              </div>
            );
          })
        )}
      </section>
    );
}
