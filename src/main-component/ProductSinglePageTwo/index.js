import React, { Fragment } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProductSingleTwo from '../../components/ProductSingleTwo'

const ProductSinglePageTwo = () => {
    return (
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCT DETAILS'} pagesub={'Product Details'} />
            <ProductSingleTwo />
            <Footer/>
        </Fragment>
    )
}

export default ProductSinglePageTwo
