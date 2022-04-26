import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import BerasList from '../../components/BerasList'



const BerasProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <BerasList/>
            <Footer/>
        </Fragment>
    )
};
export default BerasProductPage;

