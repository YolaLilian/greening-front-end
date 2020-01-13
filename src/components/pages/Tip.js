import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
import MainHeroImage from "../DetailTips/MainHeroImage";
import DetailTip from "../DetailTips/DetailTip";

function Tip() {
    return (
        <React.Fragment>
            <Navbar />
            <MainHeroImage />
            <DetailTip />
            <Footer />
        </React.Fragment>
    );
}

export default Tip;