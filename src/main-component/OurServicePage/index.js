import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Service from '../../components/OurService'



const OurServicePage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'OUR SERVICES'} pagesub={'Our services'}/>
            <Service/>
            <Footer/>
        </Fragment>
    )
};
export default OurServicePage;

