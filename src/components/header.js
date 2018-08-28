import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
// import { getUserDetails } from './../actions';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    logout() {
        cookie.remove('session', { path: '/' });
        window.location.href = '/';
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light headerShadow fixed-top bg-light">
                {/* // Embed Logo here */}
                {/* <img src="/src/assets/img/jaishu.png" className="img-rounded logoWrap" alt="Logo"  width='100' height='30' /> */}
                {/* <img src="/src/assets/img/trellLogo.png" className="img-rounded logoWrap" alt="Logo"  width='30' height='30' /> */}
                <img src="/src/assets/img/trellLogo-2.png" className="" alt="Logo"  width='60' />
                {/* <a className="navbar-brand" href="#">Trell</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <ul className="nav justify-content-end">
                        <li className="nav-item dropdown">
                            <button className="btn btn-trell btn-sm nav-link dropdown-toggle text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon icon="user-circle" />  John Doe
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)" onClick={this.logout}>Sign Out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapState(state) {
    return {};
}

export default (connect(mapState, {}))(Header);