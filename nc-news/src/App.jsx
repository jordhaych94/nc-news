import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Topics from "./Topics";
import ArticleCard from "./ArticleCard";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticleCard  />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </>
  );
}

export default App;
