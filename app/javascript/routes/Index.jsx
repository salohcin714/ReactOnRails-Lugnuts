import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Shop from '../components/Shop';
import Contact from '../components/Contact';
import Checkout from '../components/Checkout';
import AllProducts from '../components/AllProducts';
import ProductDetail from '../components/ProductDetail';
import Registration from '../components/auth/Registration';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/shop/checkout" exact component={Checkout}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path={'/register'} exact component={Registration}/>
      <Route path="/allproducts" exact component={AllProducts}/>
      <Route path="/productdetail" exact component={ProductDetail}/>
    </Switch>
  );
}
