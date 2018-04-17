
import React, { Component } from 'react';
import "./PersonalProjetcs.css";

//images
import ViewVo from "../../../../images/vvlogo.png";
import Fibodo from "../../../../images/fibodo.png";
import Moonrok from "../../../../images/moonrok.png";
import Dmp from "../../../../images/dmp.png";
import Solis from "../../../../images/solis.png";
import Pemberton from "../../../../images/pemberton.png";

class PersonalProjects extends Component {
    render() {
        const fn = function () {
            /* do your action */
        }

        return (
            <div>
                <div className="web-projects-icons">
                    <img src={ViewVo} alt="View Vo" height="50" width="50" />
                    <div className="web-projects-title">
                        <p>ViewVo</p>
                    </div>
                </div>
                <div className="web-projects-icons">
                    <img src={Fibodo} alt="View Vo" height="50" width="50" />
                    <div className="web-projects-title">
                        <p>Fibodo</p>
                    </div></div>
                <div className="web-projects-icons">
                    <img src={Moonrok} alt="View Vo" height="50" width="50" />
                    <div className="web-projects-title">
                        <p>MoonROK</p>
                    </div></div>
                <div className="web-projects-icons">
                    <img src={Dmp} alt="View Vo" height="50" width="50" />
                    <div className="web-projects-title">
                        <p>DMP</p>
                    </div></div>
                <div className="web-projects-icons">
                    <img src={Solis} alt="View Vo" height="50" width="50" />
                    <div className="web-projects-title">
                        <p>S. Marine</p>
                    </div></div>
                <div className="web-projects-icons">
                    <img src={Pemberton} alt="View Vo" height="50" width="50" />
                    <div className="web-projects-title">
                    <p>P. Capital</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default PersonalProjects; 