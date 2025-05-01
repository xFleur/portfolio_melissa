import './app.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Routes, Route from react-router-dom

import Hero from './components/hero/Hero'
import Bio from './components/bio/Bio'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'

import ProjectDetail from './components/portfoliopages/projectDetail/ProjectDetail';

function Homepage() {
  return (
    <div>
      <Cursor />
      <section id="Homepage"><Hero /></section>
      <section id="Biography"><Bio /></section>
      <section id="Portfolio"><Portfolio /></section>
      <section id="Contact"><Contact /></section>
    </div>
  );
}

function App() {
  return (
    <Router basename="/portfolio_melissa/">
      <Routes>
        {/* Homepagina met alle sections */}
        <Route path="/" element={<Homepage />} />
        
        {/* Detailpagina voor projecten */}
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App