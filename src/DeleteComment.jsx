import axios from "axios";

export default function deleteComment(comment_id) {
  axios
    .delete(`https://nc-news-itve.onrender.com/api/comments/${comment_id}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
}
