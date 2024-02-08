import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { Routes, Route, useParams } from "react-router-dom";
import GetArticle from "./GetArticle";
import GetArticles from "./GetArticles";

export default function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<GetArticles />} />
      </Routes>
      <Routes>
        <Route path="/:article_id" element={<GetArticle />} />
      </Routes>
    </>
  );
}
