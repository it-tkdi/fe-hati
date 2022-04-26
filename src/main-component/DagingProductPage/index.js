import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import DagingList from '../../components/DagingList'



const DagingProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <DagingList/>
            <Footer/>
        </Fragment>
    )
};
export default DagingProductPage;

