import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {receiveAuthLogout} from '../actions/auth';

class Logout extends Component {
    componentDidMount() {

        console.log('hello world');

        this.props.dispatch(receiveAuthLogout());
    }

    render() {
        return (
            <Redirect to="/login" />
        );
    }

}

export default connect()(Logout);