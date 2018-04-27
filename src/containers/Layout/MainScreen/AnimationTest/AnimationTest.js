import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

class AnimationTest extends Component {
    state = {
        showBlock: false
    }

    render() {
        let styles = {
            width: "100px",
            height: "100px",
            backgroundColor: "red",
            position: "absolute"
        }

        const boxStyle = {
            backgroundColor: "blue",
            width: 50,
            height: 50,
            margin: "auto",
            transition: "opacity .3s ease-out",
        };

        const transitionStyles = {
            entering: { opacity: 0 },
            entered:  { opacity: 1 },
            exiting:  { opacity: 0 },
        };

        return (
            <div style={styles}>
                <button onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
                    <Transition in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit>
                        {state => (
                            <div style={{
                                ...boxStyle,
                                ...transitionStyles[state]
                            }}>{state}</div>
                        )}
                    </Transition>
            </div>
        );
    };
}

export default AnimationTest; 