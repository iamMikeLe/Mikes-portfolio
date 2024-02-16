import React, { Component } from "react";
import { TitleBar, Window } from "react-desktop/macOs";
import Draggable from "react-draggable";
import Typist from "react-typist";
import "./WelcomeConsole.css";

export default class WelcomeConsole extends Component {
  state = {
    consoleDisplay: true,
  };

  consoleWindowHandler = () => {
    this.setState({
      consoleDisplay: false,
    });
  };

  componentDidMount() {
    if (this.state.consoleDisplay) {
      /* document.querySelector(".console-style").children[0].style.cursor="all-scroll"; */
      document.querySelector(".console-mover").children[1].style.cursor =
        "all-scroll";
      document.querySelector(
        ".console-style"
      ).children[1].style.backgroundColor = "white";
      document.querySelector(".console-style").children[1].style.textAlign =
        "left";
    }
  }

  render() {
    let consoleElement = <span></span>;

    if (this.state.consoleDisplay) {
      consoleElement = (
        <Window
          className="console-style"
          chrome
          height="500px"
          width="800px"
          padding="10px"
        >
          <TitleBar
            className="console-mover"
            title="Welcome console"
            controls
            onCloseClick={this.consoleWindowHandler}
          />

          <Typist avgTypingSpeed={2000}>
            <Typist.Delay ms={3000} />
            <span>
              Hello Visitor
              <br />
              <br />
            </span>

            <Typist.Delay ms={1500} />
            <span>
              Options you can find on the dock bellow: <br /> <br />
            </span>

            <Typist.Delay ms={1000} />
            <span>
              About Mike <br />
              Mike's projects <br />
              Contact Mike <br />
              Mike's Github page
              <br />
              <br />
              To download Mike's CV or visit his LinkedIn, double click icons on
              the top left.
              <br />
              <br />
              <Typist.Delay ms={1500} />
              NOTE: You can freely move windows around or close them if needed
              (you can move icons as well)
              <br />
              FYI: Responsiveness and animations are still being implemented
            </span>
          </Typist>
        </Window>
      );
    }
    return (
      <Draggable
        handle=".console-mover"
        bounds="parent"
        defaultPosition={{ x: 250, y: 150 }}
      >
        {consoleElement}
      </Draggable>
    );
  }
}
