import Dropdown from "react-bootstrap/Dropdown";
import GetTopics from "./GetTopics";
import { useState } from "react";
export default function Header() {
  const [topics, setTopics] = useState([]);
  const [topicChoice, setTopicChoice] = useState("");

  return (
    <>
      <div key="nav-bar" className="nav-bar">
        <div key="flex-box-left-holder" className="flex-box-left-holder">
          <div className="dropdown">
            <button className="dropbtn">
              <h2>Topics</h2>
            </button>
            <div id="myDropdown" className="dropdown-content">
              <GetTopics topics={topics} setTopics={setTopics} />
              {topics.map((topic) => {
                return (
                  <div className="topics-holder">
                    <a href={`?topic=${topic.slug}`}>{topic.slug}</a>
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
