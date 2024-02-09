import axios from "axios";
import { postComment } from "./APICalls";

export function UpdateComments(
  commentObj,
  article_id,
  commentLoading,
  setCommentLoading,
  commentBody,
  setCommentBody
) {
  postComment(article_id, commentObj).then((response) => {
    setCommentLoading(false);
    setCommentBody("");
  });
}
