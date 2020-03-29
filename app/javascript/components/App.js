import React, {Component} from 'react';
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
import {withStyles} from '@material-ui/core/styles';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Search from './Search';
import history from './utils/history';

import Registration from './auth/Registration';
import PropTypes from 'prop-types';
import Login from './auth/Login';

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

class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    axios.delete('/api/v1/logout', {withCredentials: true}).then((response) => {
      this.props.handleLogout();
    }).catch((error) => {
      console.log('logout error', error);
    });
  }

  render() {
    const {classes} = this.props;
    if (this.props.loggedInStatus === 'LOGGED_IN') {
      return (
          <div>
            <Button color={'inherit'} variant={'text'}
                    onClick={() => this.handleLogoutClick()}>Logout</Button>
          </div>
      );
    } else {
      return (
          <Link to="/login" className={classes.linkFix}>
            <Button color={'inherit'} variant={'text'}>Login</Button>
          </Link>
      );
    }
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedInStatus: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
      customer: {},
    };

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.checkLoginStatus();

  }

  handleLogout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
      customer: {},
    });
  }

  checkLoginStatus() {
    axios.get('api/v1/logged_in', {withCredentials: true}).then((response) => {
      if (response.data.logged_in && this.state.loggedInStatus ===
          'NOT_LOGGED_IN') {
        this.setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
          customer: response.data.customer,
        });
      } else if (!response.data.logged_in && this.state.loggedInStatus ===
          'LOGGED_IN') {
        this.setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
          customer: {},
        });
      }
    }).catch((error) => {
      console.log('check login error', error);
    });
  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data);
    history.push('/');
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
      customer: data.customer,
    });
  }

  render() {
    const {classes} = this.props;

    return (

        <Router history={history}>
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
                  <Auth handleLogout={this.handleLogout}
                        loggedInStatus={this.state.loggedInStatus}
                        classes={classes}/>

                </Toolbar>
              </AppBar>
            </Box>
          </Container>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/shop/products" exact component={Products}/>
            <Route path="/shop/checkout" exact component={Checkout}/>
            <Route path="/shop" exact>
              <Shop loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user} customer={this.state.customer}/>
            </Route>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/login" exact>
              <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </Route>
            <Route path="/register">
              <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </Route>


            <Route path="/product/detail" exact component={ProductDetail}/>

            <Route path="/search" exact component={Search}/>
          </Switch>
        </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
