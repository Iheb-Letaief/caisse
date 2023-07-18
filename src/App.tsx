import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import SideWindow from './components/SideWindow/SideWindow';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import PaiementPartiel from './pages/Paiement/PaiementPartiel';
import Navigation from './pages/Navigation';
import FootHP from './pages/FootHP/FootHP';




function App() {
  const [activity, setActivity] = useState("");
  const handleActivityChange = (value: string) => {
    setActivity(value);
  };

  return (
    <div className="app">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<FootHP/>} />
        </Routes> 
      </Router>
      <SideWindow/>
    </div>
  );
}

export default App;
