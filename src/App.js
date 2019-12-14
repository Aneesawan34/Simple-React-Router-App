import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './nav.js';
import About from './about.js';
import Shop from './shop.js';


class App extends Component {
  render() {
    return (
      <div>
       <Router>
        <Nav />
         <Switch>
           <Route path="/" exact  component={Home}/>
           <Route path="/about" exact component={About} />
           <Route path="/shop" exact  component={Shop} />
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