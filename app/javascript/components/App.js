import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Router, Link, Route, Switch} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
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
import {
  AccountCircle, Info, Mail,
  ShoppingCart, Store,
  VpnKey,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import NewTestimonial from './NewTestimonial';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Profile from './Profile';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      anchorOriginVertical: 'bottom',
      anchorOriginHorizontal: 'right',
      transformOriginVertical: 'top',
      transformOriginHorizontal: 'right',
      anchorReference: 'anchorEl',
    };

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleLogoutClick() {
    axios.delete('https://localhost:3000/api/v1/logout',
      {withCredentials: true}).then((response) => {
      this.props.handleLogout();
    }).catch((error) => {
      console.log('logout error', error);
    });
  }

  render() {
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);

    const linkFix = {
      textDecoration: 'none',
      color: '#FFFFFF',
    };
    if (this.props.loggedInStatus === 'LOGGED_IN') {
      return (
          <div>
            <Tooltip title={'Account'}>
              <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color={'inherit'}
              >
                <AccountCircle/>
              </IconButton>
            </Tooltip>
            <Menu id={'menu-appbar'} anchorEl={anchorEl} open={open}
                  onClose={this.handleClose}>
              <Link to={'/profile'} style={linkFix}>
                <MenuItem onClick={this.handleClose}
                          style={{color: 'black'}}>Profile</MenuItem>
              </Link>
              <Link to={'/login'} style={linkFix}>
                <MenuItem onClick={() => this.handleLogoutClick()}
                          style={{color: 'black'}}>Logout</MenuItem>
              </Link>
            </Menu>
          </div>
      );
    } else {
      return (
          <Link to="/login" style={linkFix}>
            <Tooltip title={'Login'}>
              <IconButton color={'inherit'}>
                <VpnKey/>
              </IconButton>
            </Tooltip>
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
    this.handleUpdateCustomerInfo = this.handleUpdateCustomerInfo.bind(this);
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

  handleUpdateCustomerInfo(customer) {
    axios.patch(`api/v1/customers/${this.state.customer.id}`,
        {
          customer: {
            id: this.state.customer.id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            phone: customer.phone,
            address: customer.address,
            city: customer.city,
            state: customer.state,
            postalCode: customer.postalCode,
          },
        }, {withCredentials: true}).then((response) => {
      this.setState({
        customer: {
          id: this.state.customer.id,
          firstName: response.data.customer.firstName,
          lastName: response.data.customer.lastName,
          phone: response.data.customer.phone,
          address: response.data.customer.address,
          city: response.data.customer.city,
          state: response.data.customer.state,
          postalCode: response.data.customer.postalCode,
          country: response.data.customer.country,
        },
      });
      window.alert('Your info has been updated!');
    });
  }

  handleSuccessfulAuth(data, prevLocation) {
    this.handleLogin(data);
    if (prevLocation === 'register') {
      history.push('/profile');
    } else {
      history.push('/');
    }
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
                    <Tooltip title={'About'}>
                      <IconButton color={'inherit'}>
                        <Info/>
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Link to="/shop" style={linkFix}>
                    <Tooltip title={'Shop'}>
                      <IconButton color={'inherit'}>
                        <Store/>
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Link to="/contact" style={linkFix}>
                    <Tooltip title={'Contact'}>
                      <IconButton color={'inherit'}>
                        <Mail/>
                      </IconButton>
                    </Tooltip>
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
                      handleRemoveFromCart={this.handleRemoveFromCart}
                      loggedInStatus={this.state.loggedInStatus}/>
              </Route>
              <Route path="/register">
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
              </Route>
              <Route path="/product/detail" exact render={routeProps => (
                <ProductDetail {...routeProps}
                               handleAddToCart={this.handleAddToCart}/>
              )}/>
              <Route path={'/testimonials/new'} exact
                     component={NewTestimonial}/>
              <Route path={'/testimonials'} exact component={Testimonials}/>
              <Route path={'/checkout'} exact>
                <Checkout customer={this.state.customer}
                          cart={this.state.cart}/>
              </Route>
              <Route path={'/profile'} exact>
                <Profile customer={this.state.customer}
                         handleUpdateCustomerInfo={this.handleUpdateCustomerInfo}/>
              </Route>
            </Switch>
          </Container>
        </Router>
    );
  }
}

export default App;
