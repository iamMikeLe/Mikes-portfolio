import React, { Component } from 'react';
import { FadeLoader } from 'halogenium';

export default class Preloader extends Component {
    render() {
        return (
            <FadeLoader color="#f6f6f6" size="80px" margin="4px"/>
        );
    }
}