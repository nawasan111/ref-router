import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Container className="bg-light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
