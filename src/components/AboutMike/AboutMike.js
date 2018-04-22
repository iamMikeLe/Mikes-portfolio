import React, { Component } from 'react';
import { Window, TitleBar, SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import Draggable, { DraggableCore } from 'react-draggable';
import "./AboutMike.css";
import ProfilePicture from "../../images/profilePicture.png";
import ProjectPicture from "../../images/code.png";
import PatiencePicture from "../../images/patience.png"
import LanguagePicture from "../../images/language.png"
import CatPicture from "../../images/cat.png"

//componenets
/* import Segment from "./ProjectsSegment/ProjectsSegment"; */

export default class AboutMike extends Component {

    componentDidMount() {
        document.querySelector('.mover').children[1].style.cursor = "all-scroll";
        }

    render() {
        
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
                                    <a href="#" className="lnk lnkBefore">
                                        <span className="AboutMike-card-buttons-text">About Mike</span>
                                        
                                    </a>
                                    <a href="#" className="lnk discover">
                                        <span className="AboutMike-card-buttons-text">Resume</span>
                                        
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/*Right side*/}
                        <div className="AboutMike-card-about">
                            <div className="AboutMike-card-about-inner">
                                <div className="AboutMike-card-about-content">

                                    <div className="AboutMike-card-about-title">About Me</div>
                                    
                                    <div className="AboutMike-row">
                                        <div className="AboutMike-col">
                                            <div className="AboutMike-text-box">
                                                    <p>
                                                        I am Hien Minh Le. For some "unknown" reason, my friends find it hard to remember, therefore, I was given a stage name “Mike” :). 
                                                        I have rich experience in Web Development and Project Management.
                                                    </p>
                                            </div>
                                            <div className="AboutMike-info-list">
                                                <ul>
                                                    <li><strong>Age . . . . .</strong> 25</li>
                                                    <li><strong>Residence . . . . .</strong> Germany</li>
                                                    <li><strong>Freelance . . . . .</strong> Available</li>
                                                    <li><strong>Current Location . . . . .</strong> Berlin</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
        
                                </div>

                                <div className="AboutMike-funFacts-row">
                                    <div className="AboutMike-funFacts-title">Random Fact</div>
                                    <div className="AboutMike-funFacts-content">

                                        <div className="AboutMike-funFacts-content-1">
                                            <div className="AboutMike-funFacts-content-2">

                                                <div className="AboutMike-funFacts-content-3">
                                                    <div className="AboutMike-funFacts-icon">
                                                        <img src={ProjectPicture} width="40px" />
                                                    </div>
                                                </div>
                                                <div className="AboutMike-funFacts-content-4">
                                                    18 Projects worked on
                                                </div>

                                            </div>
                                        </div>

                                        <div className="AboutMike-funFacts-content-1">
                                            <div className="AboutMike-funFacts-content-2">

                                                <div className="AboutMike-funFacts-content-3">
                                                    <div className="AboutMike-funFacts-icon">
                                                    <img src={PatiencePicture} width="40px" />
                                                    </div>
                                                </div>
                                                <div className="AboutMike-funFacts-content-4">
                                                    high level of patience
                                                </div>

                                            </div>
                                        </div>

                                        <div className="AboutMike-funFacts-content-1">
                                            <div className="AboutMike-funFacts-content-2">

                                                <div className="AboutMike-funFacts-content-3">
                                                    <div className="AboutMike-funFacts-icon">
                                                    <img src={LanguagePicture} width="40px" />
                                                    </div>
                                                </div>
                                                <div className="AboutMike-funFacts-content-4">
                                                    2 Mother languages
                                                </div>

                                            </div>
                                        </div>

                                        <div className="AboutMike-funFacts-content-1">
                                            <div className="AboutMike-funFacts-content-2">

                                                <div className="AboutMike-funFacts-content-3">
                                                    <div className="AboutMike-funFacts-icon">
                                                        <img src={CatPicture} width="40px" />
                                                    </div>
                                                </div>
                                                <div className="AboutMike-funFacts-content-4">
                                                    Cat person
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </Window>
            </Draggable>

        );
    }
}
