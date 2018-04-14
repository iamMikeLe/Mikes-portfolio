import React, { Component } from 'react';
import { FadeLoader } from 'halogenium';

export default class Preloader extends Component {
    render() {
        return (
            <FadeLoader color="#26A65B" size="80px" margin="4px"/>
        );
    }
}