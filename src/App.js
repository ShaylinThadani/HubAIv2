import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Support from './components/pages/Support';
import LearningHub from './components/pages/LearningHub';
import Library from './components/pages/Library';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/HubAI/' exact component={Home} />
          <Route path='/HubAI/support' component={Support} />
          <Route path='/HubAI/learning-hub' component={LearningHub} />
          <Route path='/HubAI/library' component={Library} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
