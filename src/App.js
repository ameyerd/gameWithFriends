import React, {useState} from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom';
import Friends from './pages/Friends';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  const [isOpen, setIsOpen]  = useState(false)

    //update state
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div >

      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>

      <Route exact path="/" component={Home} />
      <Route exact path="/Friends" component={Friends} />


    </div>

  );
}

export default App;
