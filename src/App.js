import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Ping from './pages/ping';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Ping />} />
      </Routes>
    </div>
  );
}

export default App;
