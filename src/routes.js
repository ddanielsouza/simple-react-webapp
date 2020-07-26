import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main'
import Product from './pages/product'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/products/:id" component={Product}></Route>
        </Switch>
    </BrowserRouter>
);