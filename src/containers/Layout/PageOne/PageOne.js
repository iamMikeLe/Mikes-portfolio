import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navigation from "../../../components/Navigation/Navigation.js";
import axios from "../../../axios-base.js";

class PageOne extends Component {

        state = { sampleArray: null }

    componentDidMount () {
        axios.get("/postList.json")
        .then(response => {
            this.setState({sampleArray: response.data})
            console.log(response);
            console.log(this.state.sampleArray);
        });
    }


    render() {
        return (
                <div>
                <Route path="/page-one" exact component={Navigation}  />
                <h1>Axios example (console)</h1>
                </div>
        );
    };
}
export default PageOne; 
