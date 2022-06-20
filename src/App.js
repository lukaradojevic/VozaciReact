import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VozaciHome from './strane/VozaciHome';
import Rezervacija from './strane/Rezervacija';


function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path="/" element={<VozaciHome />} />
        <Route path="/rezervacija" element={<Rezervacija />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
