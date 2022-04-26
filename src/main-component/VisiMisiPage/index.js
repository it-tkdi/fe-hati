import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import VisiMisi from '../../components/VisiMisi'



const VisiMisiPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'VISI & MISI'} pagesub={'Visi & Misi'}/>
            <VisiMisi/>
            <Footer/>
        </Fragment>
    )
};
export default VisiMisiPage;

