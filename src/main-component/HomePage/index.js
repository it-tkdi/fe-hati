import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero from '../../components/hero'
import About from '../../components/about'
import Footer from '../../components/footer'
import ProductSection from '../../components/ProductSection';



const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero/>
            <About/>
            <ProductSection/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage;

