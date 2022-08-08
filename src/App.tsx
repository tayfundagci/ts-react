import "./App.css";
import AlertDismissible from "./components/AlertDismissible";
import { Button } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
