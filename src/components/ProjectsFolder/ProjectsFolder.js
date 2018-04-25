import React, { Component } from 'react';
import { Window, TitleBar } from 'react-desktop/macOs';
import Draggable from 'react-draggable';
import "./ProjectsFolder.css";

//componenets
import Segment from "./ProjectsSegment/ProjectsSegment";

export default class ProjectsFolder extends Component {

componentDidMount() {
  document.querySelector('.mover').children[1].style.cursor = "all-scroll";
}

  render() {
    return (
      <Draggable handle=".folder-mover" bounds="parent" defaultPosition={{ x: 30, y: 30 }}>
        <Window
          className="project-folder-style"
          chrome
          height="600px"
          padding="10px"
          width="1100px"
        >
          <TitleBar className="folder-mover mover" title="Projects I worked on" controls onCloseClick={this.props.onClose} />
          <Segment/>

        </Window>
      </Draggable>

    );
  }
}
