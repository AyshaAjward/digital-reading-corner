import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Digital Reading Corner</h1>
      <p>Discover and read a wide range of books!</p>
      <Link to="/books">
        <button>Explore Books</button>
      </Link>
    </div>
  );
}

export default Home;
