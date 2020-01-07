import React from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';
import MainHeroImage from '../TipsTricksPage/MainHeroImage';
import TipsOverview from '../TipsTricksPage/tipsTricks/TipsOverview';

// import { BrowserRouter, Route } from 'react-router-dom';

function TipsTricks() {
    return (
        // <BrowserRouter>
            // <Route exact path="/" render={props => (
                <React.Fragment>
                    <Navbar />
                    <MainHeroImage />
                    <TipsOverview />
                    <Footer />
                </React.Fragment>
            // )} />
        // </BrowserRouter>
    )
}

export default TipsTricks;