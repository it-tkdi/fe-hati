import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import BerasBasmatiList from '../../components/BerasBasmatiList'

const BerasBasmatiProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <BerasBasmatiList/>
            <Footer/>
        </Fragment>
    )
};
export default BerasBasmatiProductPage;

