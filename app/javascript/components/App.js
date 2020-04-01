import React, {Component} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Router, Link, Route, Switch} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Container} from '@material-ui/core';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import axios from 'axios';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import history from './utils/history';
import Registration from './auth/Registration';
import PropTypes from 'prop-types';
import Login from './auth/Login';
import Cart from './Cart';


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
    if (this.props.loggedInStatus === 'LOGGED_IN') {
      return (
          <div>
            <Button color={'inherit'} variant={'text'}
                    onClick={() => this.handleLogoutClick()}>Logout</Button>
          </div>
      );
    } else {
      return (
          <Link to="/login" className={'linkFix'}>
            <Button color={'inherit'} variant={'text'}>Login</Button>
          </Link>
      );
    }
  }
}

Auth.propTypes = {
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
      cart: [],
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


    return (

        <Router history={history}>
          <Container>
            <Box mb={1}>
              <AppBar position="static">
                <Toolbar>
                  <Link to={'/'} className={'linkFix'} style={{flexGrow: 1}}>
                    <Typography variant="h6" className={'nav-title'}>
                      Lugnuts
                    </Typography>
                  </Link>
                  <Link to="/about" className={'linkFix'}>
                    <Button color={'inherit'} variant={'text'}>About</Button>
                  </Link>
                  <Link to="/shop" className={'linkFix'}>
                    <Button color={'inherit'} variant={'text'}>Shop</Button>
                  </Link>
                  <Link to="/contact" className={'linkFix'}>
                    <Button color={'inherit'} variant={'text'}>Contact</Button>
                  </Link>
                  <Auth handleLogout={this.handleLogout}
                        loggedInStatus={this.state.loggedInStatus}
                  />

                </Toolbar>
              </AppBar>
            </Box>
          </Container>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/shop/checkout" exact component={Checkout}/>
            <Route path="/shop" exact>
              <Shop loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user} customer={this.state.customer}/>
            </Route>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/login" exact>
              <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </Route>
            <Route path={'/cart'} exact component={Cart}/>
            <Route path="/register">
              <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </Route>


            <Route path="/product/detail" exact component={ProductDetail}/>


          </Switch>
        </Router>
    );
  }
}

export default App;
