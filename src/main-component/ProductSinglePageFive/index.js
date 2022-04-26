import React, { Fragment } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProductSingleFive from '../../components/ProductSingleFive'

const ProductSinglePageFive = () => {
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'PRODUCT DETAILS'} pagesub={'Product Details'} />
            <ProductSingleFive />
            <Footer />
        </Fragment>
    )
}

export default ProductSinglePageFive
