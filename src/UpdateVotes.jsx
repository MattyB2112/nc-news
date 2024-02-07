import axios from "axios";

export default function UpdateVotes() {
  axios
    .get("https://nc-news-itve.onrender.com/api/articles")
    .then((response) => {
      console.log(response);
    });
}
