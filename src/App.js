import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Dashboard from './components/layout/Dashboard';
import NavBar from './components/layout/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard />
        </div>
    </div>
  );
}

export default App;
