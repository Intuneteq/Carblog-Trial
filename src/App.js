import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import ErrPage from "./components/ErrPage";
import BlogPage from "./components/BlogPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div>
      <Routes>
        <Route path="/" element={<Modal />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<ErrPage />} />
        <Route path="/blog/:id" element = {<BlogPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
