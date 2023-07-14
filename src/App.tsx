import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import SideWindow from './components/SideWindow/SideWindow';
import Tickets from './components/Cards/Tickets';
import MainContent from './components/Main/Main';
import { PaiementCard } from './components/Cards/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';




function App() {
  const [activity, setActivity] = useState("");
  const handleActivityChange = (value: string) => {
    setActivity(value);
  };

  return (
    <div className="app">
      <Sidebar />
      <MainContent/>
      <SideWindow/>
    </div>
  );
}

export default App;
