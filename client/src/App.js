import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import '../src/App.css';

//pages
import Home from './pages/Home/Home';
import Friends from './pages/Friends/Friends';
import FriendOne from './pages/FriendOne/FriendOne'
import UserSettings from './pages/UserSettings/UserSettings';
import Games from './pages/Games/Games';
import LFG from './pages/LFG/LFG';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import Suggestion from './pages/Suggestion/Suggestion';
import ValorantG from './pages/GameOverview/Valorant';


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
        <Route exact path="/friends/friend-one" component={FriendOne} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/my-profile" component={Profile} />
        <Route exact path="/my-profile/settings" component={UserSettings} />
        <Route exact path="/play" component={LFG} />
        <Route exact path="/lfg" component={LFG} />
        <Route exact path="/games/valorant" component={ValorantG}/>
        <Route exact path="/suggestion" component={Suggestion} />
      </Switch>

    </Router>

  );
}


export default App;
