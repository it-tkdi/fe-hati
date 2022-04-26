import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import BerasDaawatList from '../../components/BerasDaawatList'

const BerasDaawatProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <BerasDaawatList/>
            <Footer/>
        </Fragment>
    )
};
export default BerasDaawatProductPage;

