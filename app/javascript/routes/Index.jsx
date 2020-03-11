import React from "react";
import {} from 'react-router'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Shop from "../components/Shop";
import Contact from "../components/Contact"

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}>
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/shop">
                <Shop/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
        </Switch>
    </Router>
);