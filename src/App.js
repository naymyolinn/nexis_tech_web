import React from "react";
// import Home from "./components/Home";
// import About from "./components/About";
// import Service from "./components/Service";
// import Contact from "./components/Contact";
import Footer from "./components/footer";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
