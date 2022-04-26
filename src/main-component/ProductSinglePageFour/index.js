import React, { Fragment } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProductSingleFour from '../../components/ProductSingleFour'

const ProductSinglePageFour = () => {
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'PRODUCT DETAILS'} pagesub={'Product Details'} />
            <ProductSingleFour />
            <Footer />
        </Fragment>
    )
}

export default ProductSinglePageFour
