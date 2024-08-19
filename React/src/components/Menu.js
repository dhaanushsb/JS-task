import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

function Menu() {
  return (
    <BrowserRouter>
      <div>
        <App /> {/* This renders the navigation bar */}
        <div className="content"> {/* This ensures content is below the nav */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Menu;
