import React, { Component } from 'react';
import Homepage from './Homepage';
import '../css/homepage.css';
import '../css/info.css';
import Info from './Info';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" history={history}>
          <Navbar />
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/info' component={Info} />
        </div>
      </Router>
    );
  }
}

export default App;
