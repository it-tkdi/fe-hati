import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import DagingSapiList from '../../components/DagingSapiList'

const DagingSapiProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <DagingSapiList/>
            <Footer/>
        </Fragment>
    )
};
export default DagingSapiProductPage;

