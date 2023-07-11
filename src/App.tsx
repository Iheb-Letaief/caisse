import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import SideWindow, { TableItem } from './components/SideWindow/SideWindow';



function App() {
  return (
    <div className="app">
      <Sidebar />
      <SideWindow/>
    </div>
  );
}

export default App;
