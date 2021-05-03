import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import '../src/App.css';

//pages
import Home from './pages/Home/Home';
import Friends from './pages/Friends/Friends';
import UserSettings from './pages/UserSettings/UserSettings';
import Games from './pages/Games/Games';
import LFG from './pages/LFG/LFG';
import Profile from './pages/Profile/Profile';
import SignIn from './pages/SignIn/SignIn';
import Test from './pages/Test/Test';
import Suggestion from './pages/Suggestion/Suggestion';
import ValorantG from './pages/GameOverview/Valorant';
import ValorantLFG from './pages/LFG/Valorant';


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
        <Route exact path="/games" component={Games} />
        <Route exact path="/games/valorant" component={ValorantG} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/my-profile" component={Profile} />
        <Route exact path="/my-profile/settings" component={UserSettings} />
        <Route exact path="/play" component={LFG} />
        <Route exact path="/play/valorant" component={ValorantLFG} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/suggestion" component={Suggestion} />
      </Switch>

    </Router>

  );
}


export default App;
