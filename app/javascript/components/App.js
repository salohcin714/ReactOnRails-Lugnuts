import React, {Component} from 'react';
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
import Testimonials from './Testimonials';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import {ShoppingCart} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import NewTestimonial from './NewTestimonial';

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
    const linkFix = {
      textDecoration: 'none',
      color: '#FFFFFF',
    };
    if (this.props.loggedInStatus === 'LOGGED_IN') {
      return (
          <div>
            <Button color={'inherit'} variant={'text'}
                    onClick={() => this.handleLogoutClick()}>Logout</Button>
          </div>
      );
    } else {
      return (
          <Link to="/login" style={linkFix}>
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
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
      customer: {},
      cart: [],
    };

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
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

  handleAddToCart(product) {
    this.setState({
      cart: this.state.cart.concat(product),
    });
  }

  handleRemoveFromCart(product) {
    const array = [...this.state.cart];
    const index = array.indexOf(product);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({cart: array});
    }
  }

  render() {

    const linkFix = {
      textDecoration: 'none',
      color: '#FFFFFF',
    };

    const root = {
      flexGrow: 1,
    };
    return (

        <Router history={history}>
          <Container style={root}>
            <Box mb={1}>
              <AppBar position="static">
                <Toolbar>
                  <Link to={'/'} style={{...linkFix, ...root}}>
                    <Typography variant="h6">
                      Lugnuts
                    </Typography>
                  </Link>
                  <Link to="/about" style={linkFix}>
                    <Button color={'inherit'} variant={'text'}>About</Button>
                  </Link>
                  <Link to="/shop" style={linkFix}>
                    <Button color={'inherit'} variant={'text'}>Shop</Button>
                  </Link>
                  <Link to="/contact" style={linkFix}>
                    <Button color={'inherit'} variant={'text'}>Contact</Button>
                  </Link>
                  <Link to={'/cart'} style={linkFix}>
                    <Tooltip title={'Cart'}>

                      <IconButton color={'inherit'}>
                        <Badge badgeContent={this.state.cart.length}
                               color={'secondary'}>
                          <ShoppingCart/>
                        </Badge>

                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Auth handleLogout={this.handleLogout}
                        loggedInStatus={this.state.loggedInStatus}
                  />

                </Toolbar>
              </AppBar>
            </Box>

            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/shop/checkout" exact component={Checkout}/>
              <Route path="/shop" exact>
                <Shop loggedInStatus={this.state.loggedInStatus}
                      user={this.state.user} customer={this.state.customer}/>
              </Route>
              <Route path="/contact" exact component={Contact}>
              </Route>
              <Route path="/login" exact>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
              </Route>
              <Route path={'/cart'} exact>
                <Cart cart={this.state.cart}
                      handleRemoveFromCart={this.handleRemoveFromCart}/>
              </Route>
              <Route path="/register">
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
              </Route>
              <Route path="/product/detail" exact render={routeProps => (
                  <ProductDetail {...routeProps}
                                 handleAddToCart={this.handleAddToCart}/>
              )}/>
              <Route path={'/new'} exact component={NewTestimonial}/>
              <Route path={'/testimonials'} exact component={Testimonials}/>
            </Switch>
          </Container>
        </Router>
    );
  }
}

export default App;
