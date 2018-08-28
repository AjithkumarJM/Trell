import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Loader from 'react-loader-advanced';
// import { login } from './../actions';
import userImage from '../assets/img/user.png'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginError: false,
        };

        this.generateInput = this.generateInput.bind(this);
    }
    generateInput(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        const errClassName = `${touched && error ? 'error ' : 'displayNone'}`
        return (
            <div className={className}>
                <input
                    className="form-control"
                    type={field.type}
                    placeholder={field.placeholder}
                    {...field.input}
                />
                <span className={errClassName}>{field.meta.touched ? field.meta.error : ''}</span>
            </div>
        )
    }
    loggin(values) {
        console.log(values);
        if (values.username == "user" && values.password == "password") {
            cookie.save('session', true, { path: '/' });
            this.setState({ loginError: false });
            window.location.reload();
        } else {
            this.setState({ loginError: true, });
        }
        // this.props.login(values, (response) => {
        //     cookie.save('session', response.data, { path: '/' });
        //     // cookie.save('session', true, {path: '/'});
        //     this.setState({ loginError: false });
        //     window.location.reload();
        // }, (error) => {
        //     if (error) {
        //         this.setState({ loginError: true});
        //     }
        // });
    }
    renderLoginError() {
        if (this.state.loginError) {
            return (
                <p className="text-danger login-error">
                    Invalid username or password
                    <i className="fa fa-times-circle-o pull-right" onClick={() => { this.setState({ loginError: false }); }}></i>
                </p>
            );
        }
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <section className="login" style={{ backgroundImage: 'url("/src/assets/img/bgImg.jpeg")' }}>
                <div className="container col-md-6 col-sm-12 col-lg-3 align-self-center mask">
                    <div className="card text-center">
                        <div className="card-header">
                            <img src="/src/assets/img/trellLogo-2.png" className="loginlogoWrap" alt="Card image cap" height='30' width='70' />
                            {/* Logo */}
                        </div>
                        <div className="card-body">
                            <img className="card-img-top user-icon" src={userImage} alt="Card image cap" />
                            <form onSubmit={handleSubmit(this.loggin.bind(this))}>
                                <Field
                                    placeholder="Username"
                                    name="username"
                                    type="text"
                                    component={this.generateInput}
                                />
                                <Field
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    component={this.generateInput}
                                />
                                <button type="submit" className="btn btn-block btn-sm btn-trell text-white">Sign In</button>
                            </form>
                            {this.renderLoginError()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.username)
        errors.username = "Enter username";
    if (!values.password)
        errors.password = "Enter password";
    return errors;
}

export default reduxForm({
    validate,
    form: 'logInForm'
})(connect(null, {})(Login));