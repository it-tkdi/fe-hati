import React, { Fragment } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProductSingleThree from '../../components/ProductSingleThree'

const ProductSinglePageThree = () => {
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'PRODUCT DETAILS'} pagesub={'Product Details'} />
            <ProductSingleThree />
            <Footer />
        </Fragment>
    )
}

export default ProductSinglePageThree
