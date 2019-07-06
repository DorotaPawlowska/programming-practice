import React from 'react';
import Navbar from './components/layout/Navbar'; 
import Index from './components/layout/Index'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Provider from './context';

import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
