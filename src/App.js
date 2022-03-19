import './App.css';
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      
      {/* NAVBAR */}
       <Navbar/>


      {/* DASHBOARD */}      
      <Dashboard/>

      </Router>
    </div>
  );
}

export default App;
