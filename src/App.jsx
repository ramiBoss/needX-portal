import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Contact from './pages/contact';
import './App.css';
import PublicRoute from './components/shells/PublicRoute';
import SignUp from './pages/login';
import SignIn from './pages/login';


export default function App () {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <PublicRoute  path="/" component={Dashboard} />
          <PublicRoute  path="/signin" component={SignIn} />
          <PublicRoute  path="/register" component={SignUp} />
          <PublicRoute  path="/about" component={About} />
          <PublicRoute  path="/contact" component={Contact} />    
        </Switch>
        </Router>
    </React.Fragment>
  );
}