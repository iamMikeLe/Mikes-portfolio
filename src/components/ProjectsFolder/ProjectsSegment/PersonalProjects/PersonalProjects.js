
import React, { Component } from 'react';
import "./PersonalProjetcs.css";

//images
import Shrooms from "../../../../images/shrooms.png";
import Hangry from "../../../../images/hangry.png";



class PersonalProjects extends Component {
    state = {
        selected: 0,
        projects: [
            {   
                title: "Shrooms",
                link: "https://github.com/iamMikeLe/Shrooms",
                image: "https://firebasestorage.googleapis.com/v0/b/mike-s-portfolip.appspot.com/o/viewVo.png?alt=media&token=834a59f6-7a5f-4c92-8159-6bbb33d48663",
                description: "Turn based tile game build using Html5, CSS3, Canvas, object oriented Javascript and JQuery" 
            },
            { 
                title: "Hangry",
                link: "https://github.com/iamMikeLe/Hangry",
                image: "https://firebasestorage.googleapis.com/v0/b/mike-s-portfolip.appspot.com/o/phoneFi.png?alt=media&token=f26e6b8d-899a-44b1-a7b7-84dc6bdb437d",
                description: "Restaurant review web application build using React and google API to show nearby restaurant. Users can browse/Filter nearby restaurant, leave comments and review." 
            },
            
        ]
    }

    onSelect = (selectedElement) => {
        document.querySelector(".web-projects-icon-selector").children[this.state.selected].classList.remove('web-project-icon-selected');
        this.setState({
            selected: selectedElement
        });
        document.querySelector(".web-projects-icon-selector").children[selectedElement].classList.add('web-project-icon-selected');
    }

    componentDidMount() {
        document.querySelector(".web-projects-icon-selector").children[this.state.selected].classList.add('web-project-icon-selected');
    }

    render() {
        return (
            <div className="web-projects-wrapper">
                <div className="web-projects-icon-selector">
                    <div className="web-projects-icons" onClick={() => { this.onSelect(0) }}>
                        <img src={Shrooms} alt="Shrooms" height="50" width="50" />
                        <div className="web-projects-title">
                            <p>Shrooms</p>
                        </div>
                    </div>
                    <div className="web-projects-icons" onClick={() => { this.onSelect(1) }}>
                        <img src={Hangry} alt="Hangry" height="50" width="50" />
                        <div className="web-projects-title">
                            <p>Hangry</p>
                        </div></div>

                </div>
                <div className="web-projects-info">
                    <div className="web-projects-info-left">
                        <div style={{marginBottom: "10px"}}> <img src={this.state.projects[this.state.selected].image} alt="View Vo" /></div>
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

export default PersonalProjects; 