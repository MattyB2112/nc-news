import axios from "axios";

export default function GetTopics(props) {
  const { topics, setTopics } = props;
  axios.get(`https://nc-news-itve.onrender.com/api/topics`).then((result) => {
    setTopics(result.data.topics);
  });
}
