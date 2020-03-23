import React from "react";
import Routes from "../routes/Index";
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
import axios from 'axios'
import {Check} from "@material-ui/icons";
import Checkout from "./Checkout";
import withStyles from "@material-ui/core/styles/withStyles";
import AllProducts from "./AllProducts";

const useStyles = theme => ({
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


});

class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        const {classes} = this.props;

        return (
            <Router>
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
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/shop/checkout" exact component={Checkout}/>
                        <Route path="/shop" exact component={Shop}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/allproducts" exact component={AllProducts}/>
                    </Switch>
                </Container>
            </Router>
        );
    }
}

export default withStyles(useStyles)(App)

/*
export default function App(props) {

    const classes = useStyles();

    return (
        <Router>
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
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/shop" exact component={Shop}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/checkout" exact component={Checkout}/>
                    </Switch>
                </Container>
        </Router>


    )

}

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        };
        this.updateCurrentUser = this.updateCurrentUser.bind(this)
    }

    componentDidMount() {
        let that = this;
        axios.get('/users/check_for_user', {})
            .then(function (response) {
                if (response.data.email) {
                    that.setState({
                        currentUser: response.data.email
                    })
                } else {
                    that.setState({
                        currentUser: null
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    updateCurrentUser(email) {
        this.setState({
            currentUser: email
        })
    }

    // render() {
    //     const classes = useStyles();
    //     return (
    //         <div>
    //             <Navbar updateCurrentUser={this.updateCurrentUser} />
    //         </div>
    //     );
    // }
}*/
