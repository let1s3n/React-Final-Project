import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./menu/Home";
import Users from "./menu/Users";
import About from "./menu/About";

import Error from "./menu/Error";
import Navigation from "./menu/Navigation";

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <div>
     <Navigation/>
     <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/users" component={Users} />
        <Route path="/about" component={About} />
        <Route component={Error} />
        </Switch>
     </div>
     </BrowserRouter>
    );
  }
}

export default App;
