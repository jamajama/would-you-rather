import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import Login from "./Login";
import Logout from "./Logout";
import QuestionPoll from "./QuestionPoll";
import QuestionPollResults from "./QuestionPollResults";
import AuthedRoute from "./AuthedRoute";
import LoadingBar from "react-redux-loading";
import PageNotFound from "./PageNotFound";
import { loadInitialQuestions } from "../actions/questions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadInitialQuestions());
  }

  render() {
    const { loading, authenticated, loggedInUser } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {authenticated == null ? null : (
            <Navbar loggedInUser={loggedInUser} />
          )}
          <div>
            {loading === true ? null : (
              <div>
                <Switch>
                  <AuthedRoute
                    path="/"
                    exact
                    component={Dashboard}
                    isAuthenticated={authenticated}
                  />
                  <AuthedRoute
                    path="/question/:id"
                    exact
                    component={QuestionPoll}
                    isAuthenticated={authenticated}
                  />
                  <AuthedRoute
                    path="/question/:id/results"
                    exact
                    component={QuestionPollResults}
                    isAuthenticated={authenticated}
                  />
                  <AuthedRoute
                    path="/add"
                    exact
                    component={NewQuestion}
                    isAuthenticated={authenticated}
                  />
                  <AuthedRoute
                    path="/leaderboard"
                    exact
                    component={Leaderboard}
                    isAuthenticated={authenticated}
                  />
                  <Route path="/login" exact component={withRouter(Login)} />
                  <Route path="/logout" exact component={withRouter(Logout)} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ login }) {
  return {
    loading: false,
    loggedInUser: login.loggedInUser,
    authenticated: login.authenticated
  };
}

export default connect(mapStateToProps)(App);
