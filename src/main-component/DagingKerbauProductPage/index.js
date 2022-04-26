import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import DagingKerbauList from '../../components/DagingKerbauList'



const DagingKerbauProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <DagingKerbauList/>
            <Footer/>
        </Fragment>
    )
};
export default DagingKerbauProductPage;

