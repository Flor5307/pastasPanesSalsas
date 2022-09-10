import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Mi titulo</h1>
        <button>Click me</button>
      </header>
    </div>
  );
}

