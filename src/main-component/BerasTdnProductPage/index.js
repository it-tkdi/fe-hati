import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import BerasTdnList from '../../components/BerasTdnList'

const BerasTdnProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <BerasTdnList/>
            <Footer/>
        </Fragment>
    )
};
export default BerasTdnProductPage;

