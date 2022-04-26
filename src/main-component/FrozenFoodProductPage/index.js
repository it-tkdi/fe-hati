import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import FrozenFoodList from '../../components/FrozenFoodList'

const FrozenFoodProductPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'PRODUCTS'} pagesub={'Products'}/>
            <FrozenFoodList/>
            <Footer/>
        </Fragment>
    )
};
export default FrozenFoodProductPage;

