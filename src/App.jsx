import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import ArticleHolder from "./ArticleHolder";

export default function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<ArticleHolder />} />
      </Routes>
    </>
  );
}
