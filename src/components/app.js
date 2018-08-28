import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "babel-polyfill";
import Header from './header';
import Sidebar from './sidebar';
import Login from './login';
import cookie from 'react-cookies';

import TaskDraggable from './taskDraggable';
import Slideshow from './taskSlideshow';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { AnimatedSwitch } from 'react-router-transition';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillMount() {
        this.setState({
            isSession: cookie.load('session'),
        })
    }

    render() {
        if (this.state.isSession) {
            return (
                <BrowserRouter>

                    <div>
                        <Header />
                        <div id="wrapper" className="toggled deskWrap">
                            <Sidebar />
                            <div id="page-content-wrapper">
                                <ReactCSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnterTimeout={1000}
                                    transitionLeaveTimeout={1000}>
                                    <AnimatedSwitch
                                        atEnter={{ opacity: 0 }}
                                        atLeave={{ opacity: 2 }}
                                        atActive={{ opacity: 1 }}
                                        mapStyles={styles => {
                                            if (styles.opacity > 1) {
                                                return { display: 'none' }
                                            }
                                            return { opacity: styles.opacity }
                                        }}
                                    >
                                        <Route path="/" exact={true} component={Slideshow} />
                                        <Route path="/task_draggable" component={TaskDraggable} />
                                    </AnimatedSwitch>
                                </ReactCSSTransitionGroup>
                            </div>
                            {/* <Desk /> */}
                        </div>
                    </div>
                </BrowserRouter>
            );
        } else {
            return (
                <div>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={1000}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        <Login key="1" />
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
    }
}
