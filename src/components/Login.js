import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleGetUsers} from '../actions/users';
import {handleLoginUser} from '../actions/login';

class Login extends Component {

    state = {
        userSelected: '',
        redirectToReferrer: false,
    };

    componentDidMount() {
        this.props.dispatch(handleGetUsers());
    }

    handleChange = (e) => {
        const userSelected = e.target.value;

        this.setState(() => ({
            userSelected
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.dispatch(handleLoginUser(this.state.userSelected));

        this.setState(() => ({
            redirectToReferrer: true
        }));
    };

    render() {
        if (!this.props.users) {
            return <div />;
        }

        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer} = this.state;

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <div className="container">
                <h1 className="form-heading">login Form</h1>
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>Login</h2>
                            <p>Please select a user to log in as.</p>
                        </div>
                        <form id="Login">
                            <div className="form-group">
                                <select className="form-control" id="userId" onChange={(e) => this.handleChange(e)}>
                                    <option></option>
                                    {
                                        Object.keys(this.props.users).map((user) => {
                                            return <option key={this.props.users[user].id} value={this.props.users[user].id}>{this.props.users[user].name}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        loading: users === null,
        users
    }
}

export default connect(mapStateToProps)(Login);