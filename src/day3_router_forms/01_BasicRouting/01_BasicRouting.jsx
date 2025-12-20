import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function BasicRouting() {
  return (
    <div>
      <nav>
        <Link className="m-1" to="/">
          Home
        </Link>
        <Link className="m-1" to="Contact">
          Contact
        </Link>
        <Link className="m-1" to="About">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default BasicRouting;
