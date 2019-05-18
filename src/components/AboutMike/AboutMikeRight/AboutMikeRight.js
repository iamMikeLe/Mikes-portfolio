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
                <Scrollbars>
                    <div className="AboutMike-card-about-inner">
                        <div className="AboutMike-card-about-content">

                            <div className="AboutMike-card-about-title">About Me</div>

                            <div className="AboutMike-row">
                                <div className="AboutMike-col">
                                    <div className="AboutMike-text-box">
                                        <p>
                                        I am a Full-Stack deveIoper with strong focus on Front-End development. <br/><br/>

My journey to becoming a web developer started during High school where with the help of HTML, CSS, and Photoshop, I was considered dangerous enough to be able to create simple websites, manage blogs with the help of Wordpress (f.e. for gaming communities as I am a gamer myself) or even fix a toaster for my father.<br/><br/>

Ever since then I started to be more interested in the area of Web Development and tried a bunch of stuff like Angular 1, JQuery, Java, Ruby until I decided to stop experimenting and start to focus more in one area which I enjoy.
That is when I met React which became my favorite framework and with the help of tools like Redux and Back-end developer, I was able to build more scalable Web Applications.<br/><br/>

Recently I decided to stop being dependent on a Back-end developer and learned Node.js with Express.js framework in order to become a Fullstack Developer and master the ability to turn coffee into bugs, which then creates more work for me that keeps me going and resulting in complete harmonious symbiosis.<br/><br/>

When I am not working, I am usually home learning new programming stuff, play computer games with my friends, play the piano or even enjoy watching other people's misery on youtube.<br/><br/>

I also really enjoy outdoor sports like soccer and basketball or something more slower stuff like a game of Chess or debating about the purpose of life.<br/><br/>

Despite my interest in front-end development, I have been put into managing position several times, which gave me a lot of process/managing knowledge. 
                                                    </p>
                                    </div>
                                    <div className="AboutMike-info-list">
                                        <ul>
                                            <li><strong>Age . . . . .</strong> 27</li>
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
                            <div className="AboutMike-funFacts-title">Random Facts</div>
                            <div className="AboutMike-funFacts-content">

                                <div className="AboutMike-funFacts-content-1">
                                    <div className="AboutMike-funFacts-content-2">

                                        <div className="AboutMike-funFacts-content-3">
                                            <div className="AboutMike-funFacts-icon">
                                                <img alt="Projects" src={ProjectPicture} width="40px" />
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
                                                <img alt="Patience" src={PatiencePicture} width="40px" />
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
                                                <img alt="Languages" src={LanguagePicture} width="40px" />
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
                                                <img alt="Cat" src={CatPicture} width="40px" />
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
                                                <img alt="Piano" src={PianoPicture} width="40px" />
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
                                                <img alt="Basketball" src={BasketballPicture} width="40px" />
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
                                                <img alt="Soccer" src={SoccerPicture} width="40px" />
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
                                                <img alt="Gaming" src={GamingPicture} width="40px" />
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
        );
    };
}
export default AboutMikeRight; 
