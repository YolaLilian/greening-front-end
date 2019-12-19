import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';
import MainHeroImage from '../ShowIdeasPage/MainHeroImage';
// import { BrowserRouter, Route } from 'react-router-dom';

function Ideas() {
    return (
        // <BrowserRouter>
            // <Route exact path="/" render={props => (
                <React.Fragment>
                    <Navbar />
                    <MainHeroImage />
                    <Footer />
                </React.Fragment>
            // )} />
        // </BrowserRouter>
    )
}

export default Ideas;