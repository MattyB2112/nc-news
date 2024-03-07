import "./App.css";
import Header from "./Header";
import { Routes, Route, useParams } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import ArticleCards from "./ArticleCards";
import ErrorPage from "./ErrorPage";
import LoginPage from "./Login";
import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function App({ children }) {
  const [signedInUser, setSignedInUser] = useState({});

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(signedInUser));
  }, [signedInUser]);

  return (
    <>
      <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <ArticleCards />
              </>
            }
          />
          <Route path="/:article_id" element={<ArticleItem />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}
