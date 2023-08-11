import React, { useState, useEffect } from "react";
import Preloader from "portfolio\src\Components\Pre.js";
import Navbar from "portfolio\src\Components\NavBar.js";
import Home from "portfolio\src\Components\Home\Home.js";
import About from "portfolio\src\Components\About\About.js";
import Footer from "portfolio\src\Components\Footer.js";
import Resume from "portfolio\src\Components\Resume\ResumeNew.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "portfolio\src\Components\ScrollToTop.js";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;