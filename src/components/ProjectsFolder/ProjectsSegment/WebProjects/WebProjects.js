
import React, { Component } from 'react';
import ViewVo from "../../../../images/vvlogo.png";
import "./WebProjetcs.css";

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="web-projects-icons">
                    <img src={ViewVo} alt="View Vo" />
                    <span>ViewVo</span> 
                </div>
                <div className="web-projects-icons">
                    <img src={ViewVo} alt="View Vo" />
                    <span>Fibodo</span>
                </div>
                <div className="web-projects-icons">
                    <img src={ViewVo} alt="View Vo" />
                    <span>MoonROK</span>
                </div>
                <div className="web-projects-icons">
                    <img src={ViewVo} alt="View Vo" />
                    <span>DMP Dental</span> 
                </div>
                <div className="web-projects-icons">
                    <img src={ViewVo} alt="View Vo" />
                    <span>Solis Marine</span> 
                </div>
                <div className="web-projects-icons">
                    <img src={ViewVo} alt="View Vo" />
                    <span>Pemberton Capital</span> 
                </div>
                
            </div>
        );
    };
}

export default Layout; 