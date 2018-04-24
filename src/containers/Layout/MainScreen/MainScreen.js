
import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
/* import { Route, Switch } from "react-router-dom"; */
import "./MainScreen.css";
import { Text } from 'react-desktop/macOs';
import Dock from "react-apple-menu";
import Typist from 'react-typist';

//components
import Preloader from "./Preloader/Preloader";
import ProjectsFolder from "../../../components/ProjectsFolder/ProjectsFolder";
import AboutMike from "../../../components/AboutMike/AboutMike";
import WelcomeConsole from "../../../components/WelcomeConsole/WelcomeConsole";
import ContactMe from "../../../components/ContactMe/ContactMe";


//images
import folderImage from "../../../images/folder.png";
import contactImage from "../../../images/contact.png";
import meImage from "../../../images/me.png";
import aboutImage from "../../../images/about.png";
import backgroundImage from "../../../images/backgroundCover.png";
import inImage from "../../../images/in.png";
import ghImage from "../../../images/gh.png";

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`
    /* backgroundColor: "#323437" */
};


class MainScreen extends Component {
    state = {
        isFolderOpen: false,
        isMikeFolderOpen: false,
        isContactMikeOpen: false,
        isLoaded: false
    }

    onCloseCM = () => {
        this.setState({
            isContactMikeOpen: false
        });
    }

    onOpenCM = () => {
        this.setState({
            isContactMikeOpen: true
        });
    }

    onCloseFolder = () => {
        this.setState({
            isFolderOpen: false
        });
    }

    onOpenFolder = () => {
        this.setState({
            isFolderOpen: true
        });
    }

    onCloseMikeFolder = () => {
        this.setState({
            isMikeFolderOpen: false
        });
    }

    onOpenMikeFolder = () => {
        this.setState({
            isMikeFolderOpen: true
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState( {
                isLoaded: true
            });
        }, 4000);
    }

    render() {
        let pd = { padding: "8px 0", cursor: "pointer", margin: "0 8px" };
        let projectsFile;
        let aboutMikeFile;
        let ContactMike;


        if (this.state.isContactMikeOpen) {
            ContactMike = (
                <ContactMe
                onClose={this.onCloseCM}
                />
            );
        }

        if (this.state.isFolderOpen) {
            projectsFile = (
                <ProjectsFolder
                    onClose={this.onCloseFolder}
                />
            );
        }

        if (this.state.isMikeFolderOpen) {
            aboutMikeFile = (
                <AboutMike
                    onClose={this.onCloseMikeFolder}    
                />
            );
        }

        let mainScreenElements = (
            <div className="main-preloader">
                <div className="main-preloader-container">
                    <Preloader />
                </div>
                <div className="main-preloader-text">
                    <Text textAlign="center" size="14" color="white">
                        <Typist>
                            <span>Loading Mike's portfolio...</span>
                            {/* <Typist.Backspace count={23} delay={200} />
                                <span>Loading Mikes portfolio</span> */}
                        </Typist>
                    </Text>
                </div>
            </div>
        );


        if (this.state.isLoaded) {
            mainScreenElements = (
                <div className="main-window" style={backgroundStyle}>

                    <Draggable bounds="parent">
                        <div className="main-icons main-icons-me" onDoubleClick={() => (window.open('https://www.linkedin.com/in/iammikele/'))}>
                            <img src={inImage} alt="developer" height="50" width="50" />
                            <span><Text textAlign="center" size="14" color="white">LinkedIn</Text></span>
                            <div className="main-icon-overlay"></div>
                        </div>
                    </Draggable>

                    <Draggable bounds="parent">
                        <div className="main-icons main-icons-cv">
                            <img src={aboutImage} alt="developer" height="50" width="50" />
                            <span><Text textAlign="center" size="14" color="white">CV</Text></span>
                            <div className="main-icon-overlay"></div>
                        </div>
                    </Draggable>

                    
                    {aboutMikeFile}
                    {projectsFile}
                    {ContactMike}
                    <WelcomeConsole/>

                    <Dock>
                        <img style={pd} onClick={this.onOpenMikeFolder} src={meImage} />
                        <img style={pd} onClick={this.onOpenFolder} src={folderImage} />
                        <img style={pd} onClick={this.onOpenCM} src={contactImage} />
                        <img style={pd} onClick={() => (window.open('https://github.com/iamMikeLe/'))} src={ghImage} />
                    </Dock>
                </div>
            );
        }

        return (
            <div>
                {mainScreenElements}
            </div>
        );
    };
}

export default MainScreen; 