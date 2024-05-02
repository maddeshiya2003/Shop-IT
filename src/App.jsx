import Login from "./components/Login";
import './App.css'
import Header from './components/Header'
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout"

function App() {
    
    return (
      <div className='app'>

        <Router>
          <Routes>

            <Route path='/' element={<><Header /><Home /></>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
    
          </Routes>
        </Router>

      </div>
  );
}

export default App