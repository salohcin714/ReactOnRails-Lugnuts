import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Shop from "../components/Shop";
import Contact from "../components/Contact";
import Checkout from "../components/Checkout";

export default function Routes() {
    return (
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
            <Route path="/checkout">
                <Checkout />
            </Route>
        </Switch>
    </Router>
);
}