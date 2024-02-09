import { useEffect, useState } from "react";
import dateFormatter from "./dateFormatter";
import { deleteComment } from "./APICalls";
import { fetchComments } from "./APICalls";

export default function CommentCards(props) {
  const { article_id } = props;
  const [comments, setComments] = useState([]);
  const [commentsHidden, setCommentsHidden] = useState(true);
  const [commentsChanged, setCommentsChanged] = useState(false);

  useEffect(() => {
    fetchComments(article_id).then((response) => {
      setComments(response.data);
    });
  }, [commentsChanged]);

  function handleDelete(comment_id) {
    deleteComment(comment_id).then(() => {
      setCommentsChanged(true);
    });
  }

  function showOrHideComments(event) {
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
        <button className="show-hide-comments" onClick={showOrHideComments}>
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
                <button onClick={() => handleDelete(comment.comment_id)}>
                  delete comment
                </button>
              </div>
            );
          })
        )}
      </section>
    );
}
