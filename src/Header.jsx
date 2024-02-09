import { fetchTopics } from "./APICalls";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [topics, setTopics] = useState([]);

  function handleTopicChange(topic) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
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
              <h2>Topics</h2>
            </button>
            <div id="myDropdown" className="dropdown-content">
              <button onClick={() => handleTopicChange("")}>all topics</button>
              {topics.map((topic) => {
                return (
                  <div className="topics-holder">
                    <button onClick={() => handleTopicChange(topic.slug)}>
                      {topic.slug}
                    </button>
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
            Log-in
          </h2>
        </div>
      </div>
    </>
  );
}
