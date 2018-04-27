import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import WorkPicture from "../../../images/work.png";
import StudyPicture from "../../../images/study.png"
import ProjectPicture from "../../../images/code.png";
import OtherSkillsPicture from "../../../images/otherskills.png"


class ResumeRight extends Component {

    render() {
        return (
                <Scrollbars>
                            <div className="AboutMike-card-about-inner">
                                <div className="AboutMike-card-about-content">

                                    <div className="AboutMike-card-about-title">Resume</div>
                                    
                                    <div className="AboutMike-row">
                                        <div className="AboutMike-resume-col">
                                            <div className="AboutMike-resume-title">
                                                <div className="AboutMike-resume-icon">
                                                    <img alt="Work" src={WorkPicture}  />
                                                </div>
                                                <div className="AboutMike-resume-name">
                                                    Experience
                                                </div>
                                            </div>

                                            <div className="AboutMike-resume-item">
                                                <div className="AboutMike-resume-item-content AboutMike-resume-border">

                                                    <div className="AboutMike-resume-item-date AboutMike-active">
                                                        Jun 2017 - Present
                                                    </div>

                                                    <div className="AboutMike-resume-item-name">
                                                        Freelancer
                                                    </div>

                                                    

                                                    <p>Freelance Front-End development and Project Management.</p>
                                                </div>

                                                <div className="AboutMike-resume-item-content AboutMike-resume-border">

                                                    <div className="AboutMike-resume-item-date">
                                                        Feb 2017 - Jun 2017
                                                    </div>

                                                    <div className="AboutMike-resume-item-name">
                                                        Project Manager
                                                    </div>

                                                    <div className="AboutMike-resume-item-company">
                                                        <a href="https://mbj.london" target="_blank" rel="noopener noreferrer">MBJ London</a>
                                                    </div>

                                                    <p>Managing development team to build web and mobile applications.</p>
                                                </div>

                                                <div className="AboutMike-resume-item-content ">

                                                    <div className="AboutMike-resume-item-date">
                                                        Dec 2015 - Feb 2017
                                                    </div>

                                                    <div className="AboutMike-resume-item-name">
                                                        Front-End Developer
                                                    </div>

                                                    <div className="AboutMike-resume-item-company">
                                                        <a href="https://mbj.london" target="_blank" rel="noopener noreferrer">MBJ London</a>
                                                    </div>

                                                    <p>Developing responsive websites base on provided designs.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="AboutMike-resume-col">
                                            <div className="AboutMike-resume-title">
                                                <div className="AboutMike-resume-icon">
                                                    <img alt="Study" src={StudyPicture} />
                                                </div>
                                                <div className="AboutMike-resume-name">
                                                    Education
                                                </div>
                                            </div>

                                            <div className="AboutMike-resume-item">
                                                <div className="AboutMike-resume-item-content AboutMike-resume-border">

                                                    <div className="AboutMike-resume-item-date AboutMike-active">
                                                        Jun 2017 - Present
                                                    </div>

                                                    <div className="AboutMike-resume-item-name">
                                                        Open Classrooms
                                                    </div>

                                                    

                                                    <p>Bachelor's Degree in Front-End Development.</p>
                                                </div>

                                                <div className="AboutMike-resume-item-content AboutMike-resume-border">

                                                    <div className="AboutMike-resume-item-date AboutMike-active">
                                                        2010 - Present
                                                    </div>

                                                    <div className="AboutMike-resume-item-name">
                                                        Programming courses
                                                    </div>


                                                    <p>Coursework - React/Redux, JQuery, PHP, Git, Javascript, HTML5/CSS3, Project Management,...</p>
                                                </div>

                                                <div className="AboutMike-resume-item-content">

                                                    <div className="AboutMike-resume-item-date">
                                                        2006 - 2010
                                                    </div>

                                                    <div className="AboutMike-resume-item-name">
                                                        Gymnazium Cheb
                                                    </div>
                                                    <p>IT subjects: Java SE, HTML, CSS</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
        
                                </div>

                                <div className="AboutMike-card-about-content">
                                    <div className="AboutMike-card-about-title">Skills</div>

                                    <div className="AboutMike-row">
                                    <div className="AboutMike-resume-col">
                                    <div className="AboutMike-resume-title">
                                        <div className="AboutMike-resume-icon">
                                            <img alt="Skills" src={ProjectPicture} width="30px" />
                                        </div>
                                        <div className="AboutMike-resume-name">
                                            Skills
                                        </div>
                                    </div>

                                    <ul>
                                        <li className="AboutMike-skill-li-border">
                                            <div className="AboutMike-skill-name">HTML5/CSS3</div>
                                            <div className="AboutMike-skill-progress">
                                                <div className="AboutMike-skill-percentage" style={{width: "95%"}}></div>
                                            </div>
                                        </li>
                                        <li className="AboutMike-skill-li-border">
                                            <div className="AboutMike-skill-name">Javascript(ES6)</div>
                                            <div className="AboutMike-skill-progress">
                                                <div className="AboutMike-skill-percentage" style={{width: "90%"}}></div>
                                            </div>
                                        </li>
                                        <li className="AboutMike-skill-li-border">
                                            <div className="AboutMike-skill-name">React/Redux</div>
                                            <div className="AboutMike-skill-progress">
                                                <div className="AboutMike-skill-percentage" style={{width: "85%"}}></div>
                                            </div>
                                        </li>
                                        <li className="AboutMike-skill-li-border">
                                            <div className="AboutMike-skill-name">REST API</div>
                                            <div className="AboutMike-skill-progress">
                                                <div className="AboutMike-skill-percentage" style={{width: "80%"}}></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="AboutMike-skill-name">JQuery</div>
                                            <div className="AboutMike-skill-progress">
                                                <div className="AboutMike-skill-percentage" style={{width: "85%"}}></div>
                                            </div>
                                        </li>
                                        <li className="AboutMike-skill-li-border">
                                                    <div className="AboutMike-skill-name">Bootstrap</div>
                                                    <div className="AboutMike-skill-progress">
                                                        <div className="AboutMike-skill-percentage" style={{width: "90%"}}></div>
                                                    </div>
                                        </li>
                                    </ul>
                                </div>

                                        <div className="AboutMike-resume-col">
                                            <div className="AboutMike-resume-title">
                                                <div className="AboutMike-resume-icon">
                                                    <img alt="Other Skills" src={OtherSkillsPicture}/>
                                                </div>
                                                <div className="AboutMike-resume-name">
                                                    Other Skills
                                                </div>
                                            </div>

                                            <ul>
                                                <li className="AboutMike-skill-li-border">
                                                    <div className="AboutMike-skill-name">Wordpress</div>
                                                    <div className="AboutMike-skill-progress">
                                                        <div className="AboutMike-skill-percentage" style={{width: "80%"}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="AboutMike-skill-name">MySQL</div>
                                                    <div className="AboutMike-skill-progress">
                                                        <div className="AboutMike-skill-percentage" style={{width: "65%"}}></div>
                                                    </div>
                                                </li>
                                                <li className="AboutMike-skill-li-border">
                                                    <div className="AboutMike-skill-name">Git</div>
                                                    <div className="AboutMike-skill-progress">
                                                        <div className="AboutMike-skill-percentage" style={{width: "85%"}}></div>
                                                    </div>
                                                </li>
                                                <li className="AboutMike-skill-li-border">
                                                    <div className="AboutMike-skill-name">Photoshop</div>
                                                    <div className="AboutMike-skill-progress">
                                                        <div className="AboutMike-skill-percentage" style={{width: "65%"}}></div>
                                                    </div>
                                                </li>
                                                <li className="AboutMike-skill-li-border">
                                                    <div className="AboutMike-skill-name">Illustrator</div>
                                                    <div className="AboutMike-skill-progress">
                                                        <div className="AboutMike-skill-percentage" style={{width: "45%"}}></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="AboutMike-skill-name">UML</div>
                                                    <div className="AboutMike-skill-progress">
                                                        <div className="AboutMike-skill-percentage" style={{width: "65%"}}></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            </Scrollbars>
        );
    };
}
export default ResumeRight; 
