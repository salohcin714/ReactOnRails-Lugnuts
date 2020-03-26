import React from 'react';
import Routes from '../routes/Index';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Container} from '@material-ui/core';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import axios from 'axios';
import Checkout from './Checkout';
import withStyles from '@material-ui/core/styles/withStyles';
import AllProducts from './AllProducts';
import ProductDetail from './ProductDetail';
import history from "./utils/history";

import Registration from './auth/Registration';
import PropTypes from "prop-types";
import Login from "./auth/Login";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkFix: {
    textDecoration: 'none',
    color: '#FFFFFF',

  },


});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    };

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  checkLoginStatus() {
    axios.get("api/v1/logged_in", {withCredentials: true})
      .then(response => {
        if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          })
        }
      })
      .catch(error => {
        console.log("check login error", error)
      })
  }


  handleSuccessfulAuth(data) {
    this.handleLogin(data);
    history.push("/")
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    const {classes} = this.props;

    return (

      <Router history={history}>
        <h1>Status: {this.state.loggedInStatus}</h1>
        <Container>
          <Box mb={1}>
            <AppBar position="static">
              <Toolbar>
                <Link to={'/'} className={classes.linkFix}
                      style={{flexGrow: 1}}>
                  <Typography variant="h6" className={classes.title}>
                    Lugnuts
                  </Typography>
                </Link>
                <Link to="/about" className={classes.linkFix}>
                  <Button color={'inherit'} variant={'text'}>About</Button>
                </Link>
                <Link to="/shop" className={classes.linkFix}>
                  <Button color={'inherit'} variant={'text'}>Shop</Button>
                </Link>
                <Link to="/contact" className={classes.linkFix}>
                  <Button color={'inherit'} variant={'text'}>Contact</Button>
                </Link>
                <Link to="/login" className={classes.linkFix}>
                  <Button color={'inherit'} variant={'text'}>Login</Button>
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
        </Container>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/shop/checkout" exact component={Checkout}/>
          <Route path="/shop" exact render={(props) => (
            <Shop {...props} loggedInStatus={this.state.loggedInStatus}/>
          )}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/login" exact>
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
          </Route>
          <Route path="/register">
            <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
          </Route>

          <Route path="/allproducts" exact component={AllProducts}/>
          <Route path="/productdetail" exact component={ProductDetail}/>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
