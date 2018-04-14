
import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
/* import { Route, Switch } from "react-router-dom"; */
import "./MainScreen.css";
import { Text } from 'react-desktop/macOs';
import Dock from "react-apple-menu";

//components
import ProjectsFolder from "../../../components/ProjectsFolder/ProjectsFolder";
//images
import folderImage from "../../../images/folder.png";
import contactImage from "../../../images/contact.png";
import meImage from "../../../images/me.png";
import aboutImage from "../../../images/about.png";
import backgroundImage from "../../../images/background.jpg";

//Pages
/* import Home from "../../Components/Carousel/HomeCarousel"; */
/* import Navigation from "../../components/Navigation/Navigation.js";
import PageOne from "./PageOne/PageOne";
import PageTwo from "./PageTwo/PageTwo";
 */

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`
    /* backgroundColor: "#323437" */
};


class MainScreen extends Component {
    state = {
        isOpen: false
    }

    onCloseFolder = () => {
        this.setState({
            isOpen: false
        });
    }

    onOpenFolder = () => {
        this.setState({
            isOpen: true
        });
    }

    render() {
        let pd = {padding:"8px 0", cursor:"pointer", margin:"0 8px"};
        let projectsFile = null;
        
        if (this.state.isOpen) {
            projectsFile = (
                <ProjectsFolder 
                onClose={this.onCloseFolder}
                />
            );
        }

        return (
            <div className="main-window" style={backgroundStyle}>
                <Draggable bounds="parent">
                    <div className="main-icons main-icons-me">
                        <img src={meImage} alt="developer" height="50" width="50" />
                        <span><Text textAlign="center" size="14" color="white">About</Text></span>
                        <div className="main-icon-overlay"></div>
                    </div>
                </Draggable>

                <Draggable bounds="parent">
                    <div className="main-icons main-icons-cv">
                        <img src={aboutImage} alt="developer" /* height="50" width="50" */ />
                        <span><Text textAlign="center" size="14" color="white">CV.pdf</Text></span>
                        <div className="main-icon-overlay"></div>
                    </div>
                </Draggable>

                <Draggable bounds="parent">
                    <div className="main-icons main-icons-folder" onDoubleClick={this.onOpenFolder}>
                        <img src={folderImage} alt="developer" height="50" width="50" />
                        <span><Text textAlign="center" size="14" color="white">Projects</Text></span>
                        <div className="main-icon-overlay"></div>
                    </div>
                </Draggable>

                <Draggable bounds="parent">
                    <div className="main-icons main-icons-contact">
                        <img src={contactImage} alt="developer" height="50" width="50" />
                        <span><Text textAlign="center" size="14" color="white">Contacts</Text></span>
                        <div className="main-icon-overlay"></div>
                    </div>
                </Draggable>

                {projectsFile}

                <Dock>
                    <img style = {pd} onClick = { () => ( alert ("hello") )}  src={meImage}/>
                    <img style = {pd} src = {aboutImage}/>
                    <img style = {pd} onClick={this.onOpenFolder} src = {folderImage}/>
                    <img style = {pd} src = {contactImage}/>
                    <img style = {pd} src = "https://raw.githubusercontent.com/Sherryer/Sherry-npm/master/static/images/5.png"/>
                </Dock>
            </div>

        );
    };
}

export default MainScreen; 