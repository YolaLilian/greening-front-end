import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
import MainHeroImage from "../IndividualIdea/MainHeroImage";
import IndividualIdea from "../IndividualIdea/IndividualIdea";

function Idea() {
    return (
        <React.Fragment>
            <Navbar />
            <MainHeroImage />
            <IndividualIdea />
            <Footer />
        </React.Fragment>
    );
}

export default Idea;
