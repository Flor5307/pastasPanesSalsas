import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import ItemListContainer from "./components/card/ItemListContainer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          <h1>Mi tienda de Pastas</h1>
          <ItemListContainer/>
      </header>
    </div>
  );
}
