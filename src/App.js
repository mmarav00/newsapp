import './App.css';
import './components/navbar.scss'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className ="nav"> </div>
     <Navbar></Navbar>
    </div>
    
  );
}

export default App;
