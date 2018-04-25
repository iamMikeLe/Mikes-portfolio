import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import ProjectPicture from "../../../images/code.png";
import PatiencePicture from "../../../images/patience.png"
import LanguagePicture from "../../../images/language.png"
import CatPicture from "../../../images/cat.png"

import PianoPicture from "../../../images/piano.png";
import BasketballPicture from "../../../images/basketball.png"
import SoccerPicture from "../../../images/soccer.png"
import GamingPicture from "../../../images/gaming.png"


class AboutMikeRight extends Component {

    render() {
        return (
            <div className="AboutMike-card-about">
                <Scrollbars>
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

                        <div className="AboutMike-funFacts-row">
                            <div className="AboutMike-funFacts-title">Hobbies</div>
                            <div className="AboutMike-funFacts-content">

                                <div className="AboutMike-funFacts-content-1">
                                    <div className="AboutMike-funFacts-content-2">

                                        <div className="AboutMike-funFacts-content-3">
                                            <div className="AboutMike-funFacts-icon">
                                                <img src={PianoPicture} width="40px" />
                                            </div>
                                        </div>
                                        <div className="AboutMike-funFacts-content-4">
                                            Piano
                                        </div>

                                    </div>
                                </div>

                                <div className="AboutMike-funFacts-content-1">
                                    <div className="AboutMike-funFacts-content-2">

                                        <div className="AboutMike-funFacts-content-3">
                                            <div className="AboutMike-funFacts-icon">
                                                <img src={BasketballPicture} width="40px" />
                                            </div>
                                        </div>
                                        <div className="AboutMike-funFacts-content-4">
                                            Basketball
                                                </div>

                                    </div>
                                </div>

                                <div className="AboutMike-funFacts-content-1">
                                    <div className="AboutMike-funFacts-content-2">

                                        <div className="AboutMike-funFacts-content-3">
                                            <div className="AboutMike-funFacts-icon">
                                                <img src={SoccerPicture} width="40px" />
                                            </div>
                                        </div>
                                        <div className="AboutMike-funFacts-content-4">
                                            Soccer
                                        </div>

                                    </div>
                                </div>

                                <div className="AboutMike-funFacts-content-1">
                                    <div className="AboutMike-funFacts-content-2">

                                        <div className="AboutMike-funFacts-content-3">
                                            <div className="AboutMike-funFacts-icon">
                                                <img src={GamingPicture} width="40px" />
                                            </div>
                                        </div>
                                        <div className="AboutMike-funFacts-content-4">
                                            PC Gaming
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Scrollbars>
            </div>
        );
    };
}
export default AboutMikeRight; 
