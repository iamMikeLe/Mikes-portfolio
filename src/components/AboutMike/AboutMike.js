import React, { Component } from 'react';
import { Window, TitleBar, SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import Draggable, { DraggableCore } from 'react-draggable';
import "./AboutMike.css";

import ResumeRight from "./ResumeRight/ResumeRight"
import AboutMikeRight from "./AboutMikeRight/AboutMikeRight"
import ProfilePicture from "../../images/profilePicture.png";

//componenets
/* import Segment from "./ProjectsSegment/ProjectsSegment"; */

export default class AboutMike extends Component {
    state = {
        aboutMike: true
    }

    aboutHandler = () => {
        this.setState({
            aboutMike: true
        });
        document.querySelector('.AboutMike-card-buttons').children[0].classList.add("AboutMike-nav-color");
        document.querySelector('.AboutMike-card-buttons').children[1].classList.remove("AboutMike-nav-color");
    }

    resumeHandler = () => {
        this.setState({
            aboutMike: false
        });
        document.querySelector('.AboutMike-card-buttons').children[1].classList.add("AboutMike-nav-color");
        document.querySelector('.AboutMike-card-buttons').children[0].classList.remove("AboutMike-nav-color");
    }


    componentDidMount() {
            document.querySelector('.mover').children[1].style.cursor = "all-scroll";
        }

    render() {
        
        let cardDisplay = null;
        if(this.state.aboutMike){
            cardDisplay = (<AboutMikeRight/>);
        }
        else{
            cardDisplay =(<ResumeRight/>);
        }

        return (
            <Draggable handle=".folder-mover" bounds="parent" defaultPosition={{ x: 15, y: 15 }}>
                <Window
                    className="project-folder-style"
                    chrome
                    height="675px"
                    padding="25px"
                    width="1100px"
                >
                    <TitleBar className="folder-mover mover" title="Mike Le" controls onCloseClick={this.props.onClose} />
                    <div className="AboutMike-window">
                        {/*left side*/}
                        <div className="AboutMike-card">
                            <div className="AboutMike-card-profile">
                                <div className="AboutMike-card-cover"></div>
                                <div className="AboutMike-card-image">
                                    <img src={ProfilePicture} width="140px" height="140px" />
                                </div>
                                <div className="AboutMike-card-title">Mike Le</div>
                                <div className="AboutMike-card-subtitle">Front-End Developer</div>
                                <div className="AboutMike-card-buttons">
                                    <div className="lnk lnkBefore AboutMike-nav-color" onClick={this.aboutHandler}>
                                        <span className="AboutMike-card-buttons-text">About Mike</span>
                                        
                                    </div>
                                    <div className="lnk discover" onClick={this.resumeHandler}>
                                        <span className="AboutMike-card-buttons-text">Resume</span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        {cardDisplay}
                    </div>

                </Window>
            </Draggable>

        );
    }
}
