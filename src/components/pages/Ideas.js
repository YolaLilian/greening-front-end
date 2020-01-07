import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';
import MainHeroImage from '../ShowIdeasPage/MainHeroImage';
import IdeasOverview from '../ShowIdeasPage/ideas/IdeasOverview';
// import { BrowserRouter, Route } from 'react-router-dom';

function Ideas() {
    return (
        // <BrowserRouter>
            // <Route exact path="/" render={props => (
                <React.Fragment>
                    <Navbar />
                    <MainHeroImage />
                    <IdeasOverview />
                    <Footer />
                </React.Fragment>
            // )} />
        // </BrowserRouter>
    )
}

export default Ideas;