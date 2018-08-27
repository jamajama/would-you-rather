import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPoll from './QuestionPoll';
import QuestionPollResults from './QuestionPollResults';
import Navbar from './Navbar';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    {this.props.authenticated == null
                        ? null
                        : <Navbar/>
                    }
                    <div>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Switch>
                                    <Route path="/login" exact component={Login} />
                                    <PrivateRoute path='/' exact component={Dashboard} isAuthenticated={this.props.authenticated} />
                                    <PrivateRoute path='/question/:id' component={QuestionPoll} isAuthenticated={this.props.authenticated} />
                                    <PrivateRoute path='/question/:id/results' component={QuestionPollResults} isAuthenticated={this.props.authenticated} />
                                    <PrivateRoute path='/new' component={NewQuestion} isAuthenticated={this.props.authenticated} />
                                </Switch>
                            </div>
                        }

                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({ users, login}) {
    return {
        loading: users === null,
        loggedInUser: login.loggedInUser,
        authenticated: login.authenticated
    }
}

export default connect(mapStateToProps)(App);
