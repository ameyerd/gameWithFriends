import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

//pages
import Home from './pages/Home/Home';
import Friends from './pages/Friends/Friends';

// TODO 
// - 

// Npm installs
// - Styled components
// - react-icons
// - React dom 
// - React scroll

function App() {

  const [isOpen, setIsOpen]  = useState(false)

  //update state
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router >

      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/friends" component={Friends} />
      </Switch>

    </Router>

  );
}

export default App;
