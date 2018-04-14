import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navigation from "../../../components/Navigation/Navigation.js";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/index-actions.js";

class PageTwo extends Component {
    render() {
        return (
                <div>
                <Route path="/page-two" exact component={Navigation} />
                <h1>Basic redux example</h1>
                <h4>From central reducer store:</h4>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.mikeObject.age}</p>
                <button onClick={() => this.props.onIncrement(5)}>Increment age</button>
                </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        name: state.pTwo.firstName,
        listOfNameObject: state.pTwo.listOfNames,
        mikeObject: state.pTwo.mikeObject
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: (passedValue) => dispatch(actionCreators.increment(passedValue))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);