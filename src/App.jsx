import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Team from "./pages/Team/index"
import Services from "./pages/Services/index"
import Contact from "./pages/Contact/index"
import About from "./pages/About/index"

import './App.css'



function App() {


  return (
    < >
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
      
    </Router>
  </>
  )
}

export default App
