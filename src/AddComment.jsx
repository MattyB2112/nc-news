import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateComments } from "./UpddateComments";

export default function AddComment() {
  const [commentBody, setCommentBody] = useState("");
  const [username, setUsername] = useState("tickle122");
  const { article_id } = useParams();
  const [commentLoading, setCommentLoading] = useState(false);
  const commentObject = {};

  useEffect(() => {});

  function handleCommentChange(event) {
    event.preventDefault();
    setCommentBody(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    commentObject.username = username;
    commentObject.body = commentBody;
    setCommentLoading(true);
    UpdateComments(
      commentObject,
      article_id,
      commentLoading,
      setCommentLoading,
      commentBody,
      setCommentBody
    );
  }

  return (
    <div key="comment-container" className="comment-container">
      <form onSubmit={handleSubmit} className="comment-form" id="comment-form">
        <h2>You are posting as: {username}</h2>
        <label htmlFor="comment-main" className="comment-title">
          Enter your comment here:
        </label>
        <input
          type="text"
          id="comment-main"
          required
          onChange={handleCommentChange}
          className="comment-box"
          disabled={commentLoading}
          value={commentBody}
        />
        <button
          disabled={commentLoading}
          type="submit"
          className="comment-submit button"
        >
          {commentLoading === false ? "Post comment" : "Posting comment..."}
        </button>
      </form>
    </div>
  );
}
