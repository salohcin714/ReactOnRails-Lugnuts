import React from "react";
import Routes from "../routes/Index";
import Navbar from "./Navbar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Container} from "@material-ui/core";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import {makeStyles} from "@material-ui/core/styles";
import HeroImage from "../assets/images/heroimage.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    linkFix: {
        textDecoration: 'none',
        color: "#FFFFFF"

    }


}));

export default function App(props) {

    const classes = useStyles();

    return (
        <Router>
            <div>
                <Container>
                    <Box mb={1}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    Lugnuts
                                </Typography>
                                <Link to="/about" className={classes.linkFix}>
                                    <Button color={"inherit"} variant={"text"}>About</Button>
                                </Link>
                                <Link to="/shop" className={classes.linkFix}>
                                    <Button color={"inherit"} variant={"text"}>Shop</Button>
                                </Link>
                                <Link to="/contact" className={classes.linkFix}>
                                    <Button color={"inherit"} variant={"text"}>Contact</Button>
                                </Link>
                                <Link to="/" className={classes.linkFix}>
                                    <Button color={"inherit"} variant={"text"}>Login</Button>
                                </Link>
                            </Toolbar>
                        </AppBar>
                    </Box>

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
                </Container>
            </div>
        </Router>


    )

}