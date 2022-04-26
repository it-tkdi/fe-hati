import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import ProductSingle from '../../components/ProductSingle'



const ProductSinglePage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCT DETAILS'} pagesub={'Product Details'}/>
            <ProductSingle/>
            <Footer/>
        </Fragment>
    )
};
export default ProductSinglePage;

