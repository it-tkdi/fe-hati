import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import BumbuList from '../../components/BumbuList'



const BumbuProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <BumbuList/>
            <Footer/>
        </Fragment>
    )
};
export default BumbuProductPage;

