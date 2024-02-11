import "./App.css";
import Header from "./Header";
import { Routes, Route, useParams } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import ArticleCards from "./ArticleCards";
import ErrorPage from "./ErrorPage";

export default function App() {
  return (
    <>
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
