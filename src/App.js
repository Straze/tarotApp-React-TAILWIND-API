
import './index.css';
import {useState} from 'react';
import PlayingField from './components/PlayingField';
import Navbar from './components/Navbar';
import Tarot from './pages/Tarot';
import Home from './pages/Home';
import Cards from './pages/Cards';
import LearnMore from './pages/LearnMore';


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
      
       return (
<>
      <Router>
        <Navbar></Navbar>
          <Routes>

            <Route exact path="/" element ={<Home />} />
            <Route path="/Tarot" element={<Tarot />} />
            <Route path="/Cards" element={<Cards />} />
            <Route path="/LearnMore" element={<LearnMore />} />
          </Routes>
          
      </Router>






</>
);
}


export default App;
