import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPoll from './QuestionPoll';
import QuestionPollResults from './QuestionPollResults';
import Navbar from './Navbar';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    {this.props.authenticated == null
                        ? null
                        : <Navbar loggedInUser={this.props.loggedInUser} />
                    }
                    <div>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Switch>
                                    <ProtectedRoute path='/' exact component={Dashboard} isAuthenticated={this.props.authenticated} />
                                    <ProtectedRoute path='/question/:id' component={QuestionPoll} isAuthenticated={this.props.authenticated} />
                                    <ProtectedRoute path='/question/:id/results' component={QuestionPollResults} isAuthenticated={this.props.authenticated} />
                                    <ProtectedRoute path='/new' component={NewQuestion} isAuthenticated={this.props.authenticated} />
                                    <Route path="/login" exact component={withRouter(Login)} />
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
        loading: false,
        loggedInUser: login.loggedInUser,
        authenticated: login.authenticated
    }
}

export default connect(mapStateToProps)(App);
