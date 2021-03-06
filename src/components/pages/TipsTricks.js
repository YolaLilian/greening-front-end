import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
import MainHeroImage from "../TipsTricksPage/MainHeroImage";
import TipsOverview from "../TipsTricksPage/TipsOverview";

function TipsTricks() {
    return (
        <React.Fragment>
            <Navbar />
            <MainHeroImage />
            <TipsOverview />
            <Footer />
        </React.Fragment>
    );
}

export default TipsTricks;
