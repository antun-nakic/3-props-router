import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <header>
        <Link to='/'>Pocetna stranica</Link> | {""}
        <Link to='o-nama'>O nama</Link> | {""}
        <Link to='klasna-komponenta'>Klasna komponenta</Link>
      </header>
      <Outlet />
      <footer>
        <p>Ovu stranicu izradili su Algebrini polaznici</p>
      </footer>
    </div>
  );
}

export default App;
