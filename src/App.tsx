import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ExtendedContext from "./pages/ExtendedContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/extendedcontext" element={<ExtendedContext />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
