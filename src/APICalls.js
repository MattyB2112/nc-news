import axios from "axios";

export function fetchTopics() {
  return axios
    .get(`https://nc-news-itve.onrender.com/api/topics`)
    .then((result) => result);
}

export function fetchSingleArticle(article_id) {
  return axios
    .get(`https://nc-news-itve.onrender.com/api/articles/${article_id}/`)
    .then((result) => result);
}

export function fetchComments(article_id) {
  return axios
    .get(
      `https://nc-news-itve.onrender.com/api/articles/${article_id}/comments`
    )
    .then((result) => result);
}

export function fetchArticles(
  topic = "",
  sortByQuery = "created_at",
  orderQuery = "ASC"
) {
  return axios
    .get(
      `https://nc-news-itve.onrender.com/api/articles/?topic=${topic}&sort_by=${sortByQuery}&order=${orderQuery}`
    )
    .then((result) => result);
}

export function deleteComment(comment_id) {
  axios
    .delete(`https://nc-news-itve.onrender.com/api/comments/${comment_id}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
}

export function patchVotes(article_id, updateObject) {
  return axios
    .patch(
      `https://nc-news-itve.onrender.com/api/articles/${article_id}`,
      updateObject
    )
    .then((result) => result);
}

export function postComment(article_id, commentObj) {
  return axios
    .post(
      `https://nc-news-itve.onrender.com/api/articles/${article_id}/comments`,
      commentObj
    )
    .then((result) => result);
}

export default {
  fetchTopics,
  fetchSingleArticle,
  fetchComments,
  fetchArticles,
  deleteComment,
  patchVotes,
  postComment,
};
