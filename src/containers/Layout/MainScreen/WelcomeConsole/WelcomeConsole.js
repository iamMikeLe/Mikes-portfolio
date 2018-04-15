import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/macOs';

export default class WelcomeConsole extends Component {
    render() {
        return (
            <div className="console-style">
                <Window
                    chrome
                    height="300px"
                    width="200px"
                    padding="10px"
                >
                    <TitleBar title="Console" controls />
                    <Text>Hello World</Text>
                </Window>
            </div>
        );
    }
}