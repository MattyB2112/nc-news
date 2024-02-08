import axios from "axios";

export function postComment(
  commentObj,
  article_id,
  commentLoading,
  setCommentLoading,
  commentBody,
  setCommentBody
) {
  console.log(commentObj);

  axios
    .post(
      `https://nc-news-itve.onrender.com/api/articles/${article_id}/comments`,
      commentObj
    )
    .then((response) => {
      console.log(response);
      setCommentLoading(false);
      setCommentBody("");
    });
}
