import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Blog from '../pages/Blog';
import About from '../pages/About'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/catalog' component={Catalog}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/catalog/:slug' component={Product}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  )
}

export default Routes
