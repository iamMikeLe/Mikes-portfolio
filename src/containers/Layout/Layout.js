
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

//Pages
/* import Home from "../../Components/Carousel/HomeCarousel"; */
/* import Navigation from "../../components/Navigation/Navigation.js"; */
import PageOne from "./PageOne/PageOne";
import PageTwo from "./PageTwo/PageTwo";
import MainScreen from "./MainScreen/MainScreen";



class Layout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={MainScreen}  />
                    <Route path="/page-one" exact component={PageOne}  />
                    <Route path="/page-two" exact component={PageTwo}  />
                    <Route render={() => <h1>Page Not Found</h1>}  /> {/*if nothing fits, default error page will be loaded*/}
                    {/*
                    <Route path="/posts" exact component={posts}  />
                    <Route path="/code-snippets" exact component={code-snippets}  />
                    <Route path="/posts/:id" exact component={SinglePost}  />
                    // you can use this.props.match.params.id to access the :id in your component        
                    */}
                </Switch> 
                
            </div>
        );
    };
}

export default Layout; 