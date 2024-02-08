import axios from "axios";

export function postComment(
  commentObj,
  article_id,
  commentLoading,
  setCommentLoading,
  commentBody,
  setCommentBody
) {
  axios
    .post(
      `https://nc-news-itve.onrender.com/api/articles/${article_id}/comments`,
      commentObj
    )
    .then((response) => {
      setCommentLoading(false);
      setCommentBody("");
    });
}
