import React, { Component } from 'react';
import { Window, TitleBar } from 'react-desktop/macOs';
import Draggable from 'react-draggable';

import "./ContactMe.css";



//componenets
/* import Segment from "./ProjectsSegment/ProjectsSegment"; */

export default class ContactMe extends Component {
    render() {
        return (
            <Draggable handle=".folder-mover" bounds="parent" defaultPosition={{ x: 45, y: 45 }}>
                <Window
                    className="project-folder-style"
                    chrome
                    height="375px"
                    padding="25px"
                    width="600px"
                >
                    <TitleBar className="folder-mover mover" controls onCloseClick={this.props.onClose} />
                    <div className="AboutMike-window">
                    
                        <div className="CM-title">Get in touch!</div>


                        <div className="CM-row">
                            <div className="CM-col">
                                <div className="CM-contact-form">
                                    {/*start form*/}
                                    <form id="cform" action="https://formspree.io/iam@mike-le.info"
                                    method="POST">
                                        <div className="CM-row">

                                            <div className="CM-col-small">
                                                <div className="CM-group-val">
                                                    <input type="text" name="name" placeholder="Name"/>
                                                </div>
                                            </div>

                                            <div className="CM-col-small">
                                                <div className="CM-group-val">
                                                    <input type="email" name="_replyto" placeholder="Email Address"/>
                                                </div>
                                            </div>


                                            <div className="CM-col-bg">
                                                <div className="CM-group-val">
                                                    <textarea name="message" placeholder="Your Message"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="CM-align-left">
                                        <button className="CM-button" type="submit" value="Send">
                                            Send Message
                                        </button>
                                            
                                        </div>
                                    </form>
                                    {/*end form*/}
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </Window>
            </Draggable>

        );
    }
}
