import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BookLibrary from "./BookLibrary";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookLibrary />} />
          {/* Add more routes as you build more components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
