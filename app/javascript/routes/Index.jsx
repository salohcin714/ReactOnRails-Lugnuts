import React from "react";
import {} from 'react-router'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../components/Home";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
    </Router>
);