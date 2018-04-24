import React, { Component } from 'react';
import { Window, TitleBar, SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import Draggable, { DraggableCore } from 'react-draggable';
/* import "./AboutMike.css"; */



//componenets
/* import Segment from "./ProjectsSegment/ProjectsSegment"; */

export default class ContactMe extends Component {
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
                        Hello
                    </div>

                </Window>
            </Draggable>

        );
    }
}
