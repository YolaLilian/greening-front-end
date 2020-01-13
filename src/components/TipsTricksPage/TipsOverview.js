import React, { Component } from "react";
import TipsCards from "./TipsCards";

class Ideas extends Component {
    constructor() {
        super();
        this.state = {
            title: "Greening"
        };
        console.log("Hallo ik ben er");
    }

    render() {
        return (
            <div className="App">
                <TipsCards />
            </div>
        );
    }
}

export default Ideas;
