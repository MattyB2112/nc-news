import { useState } from "react";
import axios from "axios";

export default function handleVote(increment, articleItem, setArticleItem) {
  const updateObject = {};
  updateObject.inc_votes = increment;
  axios
    .patch(
      `https://nc-news-itve.onrender.com/api/articles/${articleItem.article_id}`,
      updateObject
    )
    .then((response) => {
      setArticleItem(response.data.article);
    });
}
