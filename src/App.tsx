import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import SideWindow from './components/SideWindow/SideWindow';
import Tickets from './components/Cards/Tickets';



function App() {
  return (
    <div className="app">
      <Sidebar />
      <SideWindow/>
    </div>
  );
}

export default App;
