import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div id="sidebar-wrapper">
                <div className="list-unstyled">
                    <NavLink exact to="/" className="list-group-item list-group-item-action"><FontAwesomeIcon icon="cogs" /> Task 1 <FontAwesomeIcon icon="caret-left" className="pointing" size="2x" /></NavLink>
                    <NavLink exact to="/task_draggable" className="list-group-item list-group-item-action"><FontAwesomeIcon icon="list" /> Task 2 <FontAwesomeIcon icon="caret-left" className="pointing" size="2x" /></NavLink>
                </div>
            </div>
        );
    }
}

export default Sidebar