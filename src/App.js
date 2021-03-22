import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NavB from './nav.js';
import About from './about.js';
import Shop from './shop.js';
import Contact from './Contact.js';
import Auth from './Auth.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './Contactus.js';

const PrivateRoute = ({component : Component, ...rest})=>{
  return(
    <Route 
    {...rest}
    render = {props=>
      Auth.getAuth() ?
    <Component {...props} />
    :
    <Redirect to={
      {
        pathname : '/'
      }
    } />
    }
    />
  )
}

class App extends Component {
  render() {
    return (
      <div>
       <Router>
        <NavB />
         <Switch>
           <Route path="/" exact  component={Home}/>
           <Route path="/about" exact component={About} />
           <PrivateRoute path="/shop" exact component={Shop} />
           {/* <Route path="/contact" exact component={Contact} /> */}
           <Route path="/contact" exact component={Contactus} />
           {/* <Route path="/shop" exact  component={Shop} /> */}
         </Switch>
       </Router>
      {/* <About /> */}
      </div>
    );
  }
}

const Home = ()=>{
  return(
    <h1>Home Page</h1>
  )
}
export default App;