import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Support from './components/pages/Support';
import LearningHub from './components/pages/LearningHub';
import Library from './components/pages/Library';

function App() {
  return (
    <>
      <Router basename='/'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/support' component={Support} />
          <Route path='/learning-hub' component={LearningHub} />
          <Route path='/library' component={Library} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
