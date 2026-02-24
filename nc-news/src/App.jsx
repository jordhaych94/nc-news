import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Articles from "./Articles";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Articles />
    </>
  );
}

export default App;