import React from "react";
import About from "./pages/redirect";
import Login from "./pages/login";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route, Link} from "react-router-dom";
import Registration from "./pages/registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </Router>
  );
}

export default App;