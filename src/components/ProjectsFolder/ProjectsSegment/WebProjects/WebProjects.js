
import React, { Component } from 'react';
import "./WebProjetcs.css";

//images
import ViewVo from "../../../../images/vvlogo.png";
import ViewvoScreen from "../../../../images/viewvoScreen.png";

import Fibodo from "../../../../images/fibodo.png";
import FibodoScreen from "../../../../images/fibodoScreen.png";

import Amplify from "../../../../images/amplify.png";
import AmplifyScreen from "../../../../images/amplifyScreen.png";

import Parlour from "../../../../images/parlour.png";
import ParlourScreen from "../../../../images/parlourScreen.png";

import Candc from "../../../../images/candc.png";
import CandcScreen from "../../../../images/candcScreen.png";


import Moonrok from "../../../../images/moonrok.png";
import MoonrokScreen from "../../../../images/moonrokScreen.png";

import Dmp from "../../../../images/dmp.png";
import DmpScreen from "../../../../images/dmpScreen.png";

import Solis from "../../../../images/solis.png";
import SolisScreen from "../../../../images/solisScreen.png";

import Pemberton from "../../../../images/pemberton.png";
import PembertonScreen from "../../../../images/pembertonScreen.png";

class WebProjects extends Component {
    state = {
        selected: 0,
        selectedScreen: ViewvoScreen,
        projects: [
            {   title: "ViewVo",
                link: "http://viewvo.com",
                description: "ViewVo is a Web Application that provides job shadowing opportunities. Users search different kinds of jobs and activities, book time with a professional mentor and follow him/her for agreed duration of time to learn from him/her. In case you are a professional, who would like to pass knowledge to someone else. You can apply to be a mentor, make some money or choose to donate it to Charity!" 
            },
            { 
                title: "Fibodo",
                link: "http://fibodo.com",
                description: "Fibodo is a Web/Mobile application that helps manage and promote your business. You can sign up and use booking management platform to grow/promote your business by creating activities, which will be displayed to clients using the app and thanks to easy to use platform, clients can FInd, BOok and DO activities!" 
            },
            { 
                title: "Amplify",
                link: "http://amplify.me.uk",
                description: "Do you need to speak in front of a huge crowd, but you are too scared and your voice trembles too much? If yes, Amplify company might be the right solution for you. They help clients to build their brand, tell their story and excite their audiences." 
            },
            { 
                title: "Parlour",
                link: "https://parlourkensal.com",
                description: "If you are in London and hungry and would like to pick a dish from Full English menu, visit Parlour Restaurant and I guarantee you won't leave unsatisfied! You can make a reservation on their website." 
            },
            { 
                title: "Caiger&Co",
                link: "http://caigerandcocatering.co.uk",
                description: "Caiger&Co. Catering provides catering for a variety of events from small dinners and lunch parties, to large events and weddings.  Their food quality is high-end and they have a large menu you can choose from. Make sure to visit their website if you are hosting an event!" 
            },
            { 
                title: "MoonROK",
                link: "http://www.moonrok.com",
                description: "MoonRok is a web application that helps K-Pop fans keep track of the latest K-Pop news. You can find latest K-Pop singles, world tours or browse songs, artists, albums, etc..." 
            },
            { 
                title: "DMP Dental",
                link: "http://dmpdental.us",
                description: "DMP Dental is a company selling high-quality dental materials. Visit their website for more info." 
            },
            { 
                title: "Solis Marine",
                link: "http://solis-marine.com",
                description: "Solis Marine was established to provide independent expert advice on maritime and shipping incidents. Visit their website for more info." 
            },
            { 
                title: "Pemberton Capital",
                link: "http://pembertoncapital.co.uk",
                description: "Pemberton Capital is a special situations investor in UK Businesses. They make controlling investments exclusively in small and medium sized businesses in the UK. Their goal is to apply sound financial and management inputs to facilitate profitable growth.  " 
            }
        ]
    }

    onSelect = (selectedElement) => {
        document.querySelector(".web-projects-icon-selector").children[this.state.selected].classList.remove('web-project-icon-selected');
        this.setState({
            selected: selectedElement
        });
        document.querySelector(".web-projects-icon-selector").children[selectedElement].classList.add('web-project-icon-selected');

        switch(selectedElement){
            case 0:
            this.setState({
                selectedScreen: ViewvoScreen
            });
            break;

            case 1:
            this.setState({
                selectedScreen: FibodoScreen
            });
            break;

            case 2:
            this.setState({
                selectedScreen: AmplifyScreen
            });
            break;

            case 3:
            this.setState({
                selectedScreen: ParlourScreen
            });
            break;

            case 4:
            this.setState({
                selectedScreen: CandcScreen
            });
            break;

            case 5:
            this.setState({
                selectedScreen: MoonrokScreen
            });
            break;

            case 6:
            this.setState({
                selectedScreen: DmpScreen
            });
            break;

            case 7:
            this.setState({
                selectedScreen: SolisScreen
            });
            break;

            case 8:
            this.setState({
                selectedScreen: PembertonScreen
            });
            break;

            default:
            console.log("error, element does not exist");
        }
    }

    componentDidMount() {
        document.querySelector(".web-projects-icon-selector").children[this.state.selected].classList.add('web-project-icon-selected');
    }

    

    render() {
        return (
            <div className="web-projects-wrapper">
                <div className="web-projects-icon-selector">
                        <div className="web-projects-icons" onClick={() => { this.onSelect(0) }}>
                            <img src={ViewVo} alt="View Vo" height="50" width="50" />
                            <div className="web-projects-title">
                                <p>ViewVo</p>
                            </div>
                        </div>
                        <div className="web-projects-icons" onClick={() => { this.onSelect(1) }}>
                            <img src={Fibodo} alt="Fibodo" height="50" width="50" />
                            <div className="web-projects-title">
                                <p>Fibodo</p>
                            </div>
                        </div>
                        {/*edit*/}
                        <div className="web-projects-icons" onClick={() => { this.onSelect(2) }}>
                            <img src={Amplify} alt="Fibodo" height="50" width="50" />
                            <div className="web-projects-title">
                                <p>Amplify</p>
                            </div>
                        </div>
                        <div className="web-projects-icons" onClick={() => { this.onSelect(3) }}>
                            <img src={Parlour} alt="Fibodo" height="50" width="50" />
                            <div className="web-projects-title">
                                <p>Parlour</p>
                            </div>
                        </div>
                        <div className="web-projects-icons" onClick={() => { this.onSelect(4) }}>
                            <img src={Candc} alt="Fibodo" height="50" width="50" />
                            <div className="web-projects-title">
                                <p>Caiger&Co</p>
                            </div>
                        </div>
                        {/*end edit*/}
                        <div className="web-projects-icons" onClick={() => { this.onSelect(5) }}>
                            <img src={Moonrok} alt="Moonrok" height="50" width="50" />
                            <div className="web-projects-title">
                                <p>MoonROK</p>
                            </div>
                        </div>
                        <div className="web-projects-icons" onClick={() => { this.onSelect(6) }}>
                            <img src={Dmp} alt="DMP Dental" height="50" width="50" />
                            <div className="web-projects-title">
                                <p>DMP</p>
                            </div>
                        </div>
                        <div className="web-projects-icons" onClick={() => { this.onSelect(7) }}>
                            <img src={Solis} alt="Solis" height="50" width="50" />
                            <div className="web-projects-title">
                                <p>S. Marine</p>
                            </div>
                        </div>
                            <div className="web-projects-icons" onClick={() => { this.onSelect(8) }}>
                                <img src={Pemberton} alt="Pemberton" height="50" width="50" />
                                <div className="web-projects-title">
                                    <p>P. Capital</p>
                            </div>
                        </div>
                </div>
                <div className="web-projects-info">
                    <div className="web-projects-info-left">
                        <div style={{marginBottom: "10px"}}> <img src={this.state.selectedScreen} alt="View Vo" /></div>
                        <div><a href={this.state.projects[this.state.selected].link} target="_blank" rel="noopener noreferrer">{">>> Website here <<<"}</a></div>
                    </div>

                    <div className="web-projects-info-right">
                        <div>
                            <h2>{this.state.projects[this.state.selected].title}</h2>
                            <p> {this.state.projects[this.state.selected].description}</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
}

export default WebProjects; 