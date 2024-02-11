import axios from "axios";
import { postComment } from "./APICalls";

export function UpdateComments(
  commentObj,
  article_id,
  commentLoading,
  setCommentLoading,
  commentBody,
  setCommentBody,
  commentPosted,
  setCommentPosted
) {
  postComment(article_id, commentObj).then((response) => {
    setCommentLoading(false);
    setCommentBody("");
    setCommentPosted(true);
  });
}
