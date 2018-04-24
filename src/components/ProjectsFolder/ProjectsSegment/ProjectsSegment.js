import React, { Component } from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from 'react-desktop/macOs';
import WebProjects from "./WebProjects/WebProjects";
import PersonalProjects from "./PersonalProjects/PersonalProjects";


export default class extends Component {
    constructor() {
        super();
        this.state = { selected: 1 }
    }

    componentDidMount() {
        document.querySelector('.project-segment-style').children[1].style.overflow = "auto";
    }

    render() {
        return (
            <SegmentedControl box className="project-segment-style">
                {this.renderItems()}
            </SegmentedControl>
        );
    }

    renderItems() {
        return [
            this.renderItem(1, 'Client', <Text><WebProjects/></Text>),
            this.renderItem(2, 'Personal', <Text><PersonalProjects/></Text>),
        ];
    }

    renderItem(key, title, content) {
        return (
            <SegmentedControlItem
                key={key}
                title={title}
                selected={this.state.selected === key}
                onSelect={() => this.setState({ selected: key })}
            >
                {content}
            </SegmentedControlItem>
        );
    }
}