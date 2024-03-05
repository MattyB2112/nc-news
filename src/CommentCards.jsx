import { useEffect, useState } from "react";
import dateFormatter from "./dateFormatter";
import { deleteComment, fetchComments, fetchUsers } from "./APICalls";
import timeFormatter from "./timeFormatter";
import AddComment from "./AddComment";

export default function CommentCards(props) {
  const { article_id } = props;
  const [comments, setComments] = useState([]);
  const [commentsHidden, setCommentsHidden] = useState(true);
  const [commentsChanged, setCommentsChanged] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((response) => {
      setComments(response.data);
      setCommentsChanged(false);
    });
  }, [commentsChanged]);

  function handleDelete(comment_id) {
    deleteComment(comment_id).then(() => {
      setCommentsChanged(true);
    });
  }

  useEffect(() => {
    fetchUsers().then((result) => {
      setUsers(result.data.users);
    });
  }, []);

  function showOrHideComments(event) {
    event.preventDefault();
    if (commentsHidden === true) {
      setCommentsHidden(false);
    } else {
      setCommentsHidden(true);
    }
  }

  return (
    <>
      <AddComment
        commentsChanged={commentsChanged}
        setCommentsChanged={setCommentsChanged}
      />
      {comments.length === 0 ? (
        <h2>
          <br />
          No comments on this article yet! Add one above to start the
          discussion!
        </h2>
      ) : (
        <section className="comments" id="comments-hash">
          <button className="show-hide-comments" onClick={showOrHideComments}>
            <h4>
              {commentsHidden === true ? "Show " : "Hide "}
              Comments
            </h4>
          </button>
          {commentsHidden === true ? (
            <div></div>
          ) : (
            comments.map((comment) => {
              return (
                <>
                  <br />
                  <div className="comment-holder" key={comment.comment_id}>
                    <div className="comment-author-and-img">
                      {users.map((user) => {
                        if (user.username === comment.author) {
                          return (
                            <img
                              className="comments-user-image"
                              src={user.avatar_url}
                            />
                          );
                        }
                      })}
                      <h4 className="comment-author">&nbsp;{comment.author}</h4>
                      <p>
                        &nbsp;at&nbsp;{" " + timeFormatter(comment.created_at)}{" "}
                        on {dateFormatter(comment.created_at)}{" "}
                      </p>
                    </div>
                    <div className="comment-body">{comment.body}</div>
                    <br />
                  </div>

                  <button
                    className="delete-comment-button"
                    onClick={() => handleDelete(comment.comment_id)}
                  >
                    Delete comment
                  </button>
                </>
              );
            })
          )}
        </section>
      )}
    </>
  );
}
