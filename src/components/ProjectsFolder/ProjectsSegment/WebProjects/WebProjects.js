
import React, { Component } from 'react';
import "./WebProjetcs.css";

//images
import ViewVo from "../../../../images/vvlogo.png";
import ViewvoScreen from "../../../../images/viewvoScreen.png";

import Fibodo from "../../../../images/fibodo.png";
import FibodoScreen from "../../../../images/fibodoScreen.png";

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
                description: "ViewVo is a Web Application that provides job shadowing opportunities. Users search different kinds of jobs and activities, book time with a professional mentor and follow him for agreed duration of time to learn from him/her. In case you are a professional, who would like to pass knowledge to someone else. You can apply to be a mentor, Make some money or choose to donate it to Charity!" },
            { 
                title: "Fibodo",
                link: "http://fibodo.com",
                description: "I worked on Fibodo IOS application as a Project Manager. Fibodo is a sport oriented app for users looking for activities around them. They can search and book activities, connect and chat with organizers and much more!" },
            { 
                title: "MoonROK",
                link: "http://www.moonrok.com",
                image: "https://firebasestorage.googleapis.com/v0/b/mike-s-portfolip.appspot.com/o/moonrok.png?alt=media&token=86057a6c-216d-47b8-8743-930538b7627f",
                description: "If you are searching for the latest news of K-Pop, Moonrok is your website!" },
            { 
                title: "DMP Dental",
                link: "http://dmpdental.us",
                image: "https://firebasestorage.googleapis.com/v0/b/mike-s-portfolip.appspot.com/o/dental.png?alt=media&token=3e8d34a5-0217-4c12-9461-2babc1cdebbb",
                description: "DMP Dental is a website selling high-quality dental materials. For more info, visit their website by clicking the link above." },
            { 
                title: "Solis Marine",
                link: "http://solis-marine.com",
                image: "https://firebasestorage.googleapis.com/v0/b/mike-s-portfolip.appspot.com/o/solis.png?alt=media&token=d07f5f7c-7a13-4a84-9d6d-24791186cf97",
                description: "Solis Marine is a Company website. Users can find information about their business. One of their specialties is providing independent expert advice on maritime and shipping incidents." },
            { 
                title: "Pemberton Capital",
                link: "http://pembertoncapital.co.uk",
                image: "https://firebasestorage.googleapis.com/v0/b/mike-s-portfolip.appspot.com/o/pemberton.png?alt=media&token=f3894cdb-18ee-4577-89fc-5b4864865aa5",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
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
                selectedScreen: MoonrokScreen
            });
            break;

            case 3:
            this.setState({
                selectedScreen: DmpScreen
            });
            break;

            case 4:
            this.setState({
                selectedScreen: SolisScreen
            });
            break;

            case 5:
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
                        <img src={Fibodo} alt="View Vo" height="50" width="50" />
                        <div className="web-projects-title">
                            <p>Fibodo</p>
                        </div></div>
                    <div className="web-projects-icons" onClick={() => { this.onSelect(2) }}>
                        <img src={Moonrok} alt="View Vo" height="50" width="50" />
                        <div className="web-projects-title">
                            <p>MoonROK</p>
                        </div></div>
                    <div className="web-projects-icons" onClick={() => { this.onSelect(3) }}>
                        <img src={Dmp} alt="View Vo" height="50" width="50" />
                        <div className="web-projects-title">
                            <p>DMP</p>
                        </div></div>
                    <div className="web-projects-icons" onClick={() => { this.onSelect(4) }}>
                        <img src={Solis} alt="View Vo" height="50" width="50" />
                        <div className="web-projects-title">
                            <p>S. Marine</p>
                        </div></div>
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