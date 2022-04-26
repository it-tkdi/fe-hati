import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import ProductList from '../../components/ProductList'



const ProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <ProductList/>
            <Footer/>
        </Fragment>
    )
};
export default ProductPage;

