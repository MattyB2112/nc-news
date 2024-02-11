import { fetchTopics } from "./APICalls";
import { useState, useEffect } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

export default function Header() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [topics, setTopics] = useState([]);

  function handleClick(topic) {
    navigate(`/topic=${topic}`, { replace: true });
  }

  useEffect(() => {
    fetchTopics().then((result) => {
      setTopics(result.data.topics);
    });
  }, []);

  return (
    <>
      <div key="nav-bar" className="nav-bar">
        <div key="flex-box-left-holder" className="flex-box-left-holder">
          <div className="dropdown">
            <button className="dropbtn">
              <h2 className="topics-button-header">Topics</h2>
            </button>
            <div id="myDropdown" className="dropdown-content">
              <div className="topics-holder">
                <a href={`/`} className="topic-links">
                  All Topics
                </a>
              </div>
              {topics.map((topic) => {
                return (
                  <div className="topics-holder">
                    <a
                      href={`/?topic=${topic.slug}`}
                      className="topic-links"
                      onClick={() => handleClick(topic.slug)}
                    >
                      {topic.slug}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <h1 key="nav-header" className="nav-header">
          Welcome to NC-News!
        </h1>
        <div key="flex-box-right-holder" className="flex-box-right-holder">
          <h2 key="nav-login" className="nav-login">
            <button className="dropbtn">Login</button>
          </h2>
        </div>
      </div>
    </>
  );
}
