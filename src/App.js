import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Saral Dye Chems Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">AboutUs</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Coverage</a>
        </li>
        <li>
          <a href="/">Partners</a>
        </li>
        <li>
          <a href="/">Testimonials</a>
        </li>
        <li>
          <a href="/">ContactUs</a>
        </li>
      </ul>
    </nav>
  );
};

const Segments = () => {
  return (
    <div className="segments">
      <h2>SEGMENTS</h2>
      {/* Add content for segments here */}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Segments />
    </div>
  );
};

export default App;
