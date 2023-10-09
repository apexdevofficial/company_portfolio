import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './pages/Nav';
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import app from './styles/App.css';
import Background from "./pages/Background";
import PlayerStats from "./pages/PlayerStats";


const App = () => {
  return <>
    <Router>
      <Nav></Nav>
      <Background/>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <PlayerStats/>
    </Router>
  </>;
}

export default App;
