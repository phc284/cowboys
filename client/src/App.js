import React, { Component } from 'react';
import Homepage from './components/Homepage';
import Info from './components/Info';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './components/homepage.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" history={history}>
          <Navbar />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/info' component={Info} />
        </div>
      </Router>
    );
  }
}

export default App;
