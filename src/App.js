import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project">
              <Project />
            </Route >

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
