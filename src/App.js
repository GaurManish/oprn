import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// Pages
import LandingPage from './Pages/landingPage';
import MarketPage from './Pages/marketPage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

// Routes
const routes = [
  { path: '/', name: 'LandingPage', Component: LandingPage },
  { path: '/marketplace', name: 'MarketPage', Component: MarketPage },
];

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
