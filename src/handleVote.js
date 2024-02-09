import { useState } from "react";
import axios from "axios";
import { patchVotes } from "./APICalls";

export default function handleVote(increment, articleItem, setArticleItem) {
  const updateObject = {};
  updateObject.inc_votes = increment;
  const { article_id } = articleItem;

  patchVotes(article_id, updateObject).then((response) => {
    setArticleItem(response.data.article);
  });
}
