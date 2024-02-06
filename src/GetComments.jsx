import { useEffect, useState } from "react";

export default function GetComments(props) {
  const { article_id } = props;
  const [comments, setComments] = useState([]);
  const [commentsHidden, setCommentsHidden] = useState(true);

  useEffect(() => {
    fetch(
      `https://nc-news-itve.onrender.com/api/articles/${article_id}/comments`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setComments(result);
      });
  }, []);

  function handleClick(event) {
    event.preventDefault();
    if (commentsHidden === true) {
      setCommentsHidden(false);
    } else {
      setCommentsHidden(true);
    }
  }

  return (
    <section className="comments">
      <button className="show-hide-comments" onClick={handleClick}>
        <h4>{commentsHidden === true ? "Show" : "Hide"} Comments</h4>
      </button>
      {commentsHidden === true ? (
        <div></div>
      ) : (
        comments.map((comment) => {
          return (
            <div>
              <h4>{comment.author}</h4>
              <div>{comment.body}</div>
            </div>
          );
        })
      )}
    </section>
  );
}
