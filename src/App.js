import React from 'react';
import Navbar from './components/Navbar';
import FrenchNavbar from './components/FrenchNavbar';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Support from './components/pages/Support';
import LearningHub from './components/pages/LearningHub';
import Library from './components/pages/Library';
import FrenchHome from './components/pages/FrenchHome';
import FrenchSupport from './components/pages/FrenchSupport';
import FrenchLearningHub from './components/pages/FrenchLearningHub';
import FrenchLibrary from './components/pages/FrenchLibrary';
function App() {
  return (
    <>
      <Router basename='/'>
        <Route
          render={({ location }) => {
            const isFrenchPage = location.pathname.includes('/french');
            return (
              <>
                {isFrenchPage ? <FrenchNavbar /> : <Navbar />}
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/support' component={Support} />
                  <Route path='/learning-hub' component={LearningHub} />
                  <Route path='/library' component={Library} />
                  <Route path='/frenchhome' exact component={FrenchHome} />
                  <Route path='/frenchsupport' component={FrenchSupport} />
                  <Route
                    path='/frenchlearning-hub'
                    component={FrenchLearningHub}
                  />
                  <Route path='/frenchlibrary' component={FrenchLibrary} />
                </Switch>
              </>
            );
          }}
        />
      </Router>
    </>
  );
}


export default App;
