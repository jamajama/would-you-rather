import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPoll from './QuestionPoll';
import Navbar from './Navbar';
import LoadingBar from 'react-redux-loading';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>

                <Fragment>
                    {/*<LoadingBar/>*/}
                    <Navbar />
                    <div>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route path='/' exact component={Dashboard} />
                                <Route path='/question/:id' component={QuestionPoll} />
                                <Route path='/new' component={NewQuestion} />
                            </div>
                        }

                    </div>
                </Fragment>
            </Router>


        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);
