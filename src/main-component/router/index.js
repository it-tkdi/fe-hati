import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import AboutPage from '../AboutPage'
import TeamPage from '../TeamPage'
import VisiMisiPage from '../VisiMisiPage'
import ContactPage from '../ContactPage'
import ErrorPage from '../ErrorPage'
import OurServicePage from '../OurServicePage';
import ProductPage from '../ProductPage';
import ProductSinglePage from '../ProductSinglePage';
import ProductSinglePageTwo from '../ProductSinglePageTwo';
import ProductSinglePageThree from '../ProductSinglePageThree';
import ProductSinglePageFour from '../ProductSinglePageFour';
import ProductSinglePageFive from '../ProductSinglePageFive';
import ProductSinglePageSix from '../ProductSinglePageSix';
import ServicePage from '../ServicePage';
import ServiceSinglePage from '../ServiceSinglePage';
import BerasProductPage from '../BerasProductPage';
import BumbuProductPage from '../BumbuProductPage';
import DagingProductPage from '../DagingProductPage';
import DagingSapiProductPage from '../DagingSapiProductPage';
import DagingKerbauProductPage from '../DagingKerbauProductPage';
import FrozenFoodProductPage from '../FrozenFoodProductPage';
import BerasBasmatiProductPage from '../BerasBasmatiProductPage';
import BerasDaawatProductPage from '../BerasDaawatProductPage';
import BerasTdnProductPage from '../BerasTdnProductPage';
      

const AllRoute = () => { 

  return (
    <div>
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/home' component={Homepage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/products' component={ProductPage} />
            <Route path='/products-beras' component={BerasProductPage} />
            <Route path='/products-beras-basmati' component={BerasBasmatiProductPage} />
            <Route path='/products-beras-daawat' component={BerasDaawatProductPage} />
            <Route path='/products-beras-tdn' component={BerasTdnProductPage} />
            <Route path='/products-bumbu' component={BumbuProductPage} />
            <Route path='/products-daging' component={DagingProductPage} />
            <Route path='/products-daging-sapi' component={DagingSapiProductPage} />
            <Route path='/products-daging-kerbau' component={DagingKerbauProductPage} />
            <Route path='/products-frozen-food' component={FrozenFoodProductPage} />
            <Route path='/products-single' component={ProductSinglePage} />
            <Route path='/products-single-two' component={ProductSinglePageTwo} />
            <Route path='/products-single-three' component={ProductSinglePageThree} />
            <Route path='/products-single-four' component={ProductSinglePageFour} />
            <Route path='/products-single-five' component={ProductSinglePageFive} />
            <Route path='/products-single-six' component={ProductSinglePageSix} />
            <Route path='/service' component={ServicePage} />
            <Route path="/service-single" component={ServiceSinglePage} />
            <Route path='/ourservices' component={OurServicePage} />
            <Route path='/team' component={TeamPage} />
            <Route path='/visimisi' component={VisiMisiPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/404' component={ErrorPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default AllRoute;