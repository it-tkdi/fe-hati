import React, { Fragment } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProductSingleSix from '../../components/ProductSingleSix'

const ProductSinglePageSix = () => {
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'PRODUCT DETAILS'} pagesub={'Product Details'} />
            <ProductSingleSix />
            <Footer />
        </Fragment>
    )
}

export default ProductSinglePageSix
