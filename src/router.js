import React from 'react';
import { Router, Route, Switch } from 'dva/router';
//import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import ProductsDetail from './routes/ProductsDetail';
import Orders from './routes/Orders';
import Mycourses from './routes/Mycourses';
import Login from './routes/Login';
//import dynamic from 'dva/dynamic';
import Layouts from './layouts/index';

function RouterConfig({app,history}) {
  console.log(app._store.getState())
  console.log(app)
  /* const Products = dynamic({
    app,
    models:()=>[import('./models/products')],
    component: ()=>import('./routes/Products')
  })
  const ProductsDetail = dynamic({
    app,
    models:()=>[import('./models/products')],
    component: ()=>import('./routes/ProductsDetail')
  }) */
  
  return (
    <Router history = {history}>
      <div>
        <Route path="/" component={Layouts} />
        <Switch>
          {/* <Route path="/" exact component={IndexPage} /> */}
          <Route path="/" exact component={Products} />
          <Route path="/course/:id" component={ProductsDetail} />
          <Route path="/myorders" exact component={Orders} />
          <Route path="/mycourses" exact component={Mycourses} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>    
    </Router>
  );
}

export default RouterConfig;