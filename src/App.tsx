import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import SideWindow from './components/SideWindow/SideWindow';
import Tickets from './components/Cards/Tickets';
import MainContent from './components/Main/Main';



function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent/>
      <SideWindow/>
    </div>
  );
}

export default App;
