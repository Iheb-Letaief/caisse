import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import SideWindow from './components/SideWindow/SideWindow';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import PaiementPartiel from './pages/Paiement&Remise/PaiementPartiel';
import FootHP from './pages/FootHP/FootHP';
import Remise from './pages/Paiement&Remise/Remise';




function App() {
  const [activity, setActivity] = useState("");
  const handleActivityChange = (value: string) => {
    setActivity(value);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
          <Routes>
            <Route path="/" element={<FootHP/>} />
            <Route path="/activite" element={<FootHP/>} />
            <Route path="/paiement" element={<PaiementPartiel/>} />
            <Route path="/remise" element={<Remise/>} />
          </Routes> 
        <SideWindow/>
      </div>
    </Router>
    
  );
}

export default App;
