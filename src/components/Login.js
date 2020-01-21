import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadInitialUsers} from '../actions/users';
import {handleLoginUser} from '../actions/auth';
import LoadingBar from "react-redux-loading";

class Login extends Component {
    state = {
        userSelected: ''
    };

    componentDidMount() {
        this.props.dispatch(loadInitialUsers());
    }

    handleChange = (e) => {
        const userSelected = e.target.value;

        this.setState(() => ({
            userSelected
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { userSelected } = this.state;

        this.props.dispatch(handleLoginUser(userSelected));
    };

    render() {

        const { loading, users, isAuthed } = this.props;

        if (loading === true || !users) {
            return <div/>;
        }

        if (isAuthed) {
            return <Redirect to="/"/>;
        }

        return (
            <div>
                <LoadingBar />
                <div className="container">


                    <h1 className="form-heading">Login Form</h1>
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h3>Login</h3>
                                <h2>Would you Rather Project</h2>
                                <p>Please select a user to log in as.</p>
                            </div>
                            <form id="Login" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <select className="form-control" id="userId"
                                            onChange={(e) => this.handleChange(e)}>
                                        <option></option>
                                        {
                                            Object.keys(users).map((user) => {
                                                return <option key={users[user].id}
                                                               value={users[user].id}>{users[user].name}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <button type="submit" className="login-btn login-bg-r login-b" disabled={this.state.userSelected === ''}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({users, login}) {
    return {
        loading: users === null,
        users,
        isAuthed: login.authenticated
    }
}

export default connect(mapStateToProps)(Login);