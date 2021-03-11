import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';

//pages
import Home from './pages/Home/Home';
import Friends from './pages/Friends/Friends';

function App() {

  return (
    <Router >

      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/friends" component={Friends} />
      </Switch>

    </Router>

  );
}

export default App;
