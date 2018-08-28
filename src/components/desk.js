import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TaskDraggable from './TaskDraggable';
import Slideshow from './taskSlideshow';

class Desk extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container topWrap">
                    <Slideshow />
                    <TaskDraggable />                                        
                </div>
            </div>
        );
    }
}

export default Desk;
