import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  state = {
    questionsToShow: "unanswered",
    activeTab: "unanswered"
  };

  handleTabChange = (tab) => {
    this.setState(() => ({
      questionsToShow: tab,
      activeTab: tab
    }));
  };

  render() {
    const { questionsToShow, activeTab } = this.state;
    const { questionIds } = this.props;

    return (
      <div>
        <div className="projectContainer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <div className="center">
                  <button
                    type="button"
                    className={
                      "btn btn-danger " +
                      (activeTab === "unanswered" ? "active" : null)
                    }
                    onClick={e => this.handleTabChange("unanswered")}
                  >
                    Unanswered Questions
                  </button>
                  <button
                    type="button"
                    className={
                      "btn btn-success " +
                      (activeTab === "answered" ? "active" : null)
                    }
                    onClick={e => this.handleTabChange("answered")}
                  >
                    Answered Questions
                  </button>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-sm-8">
                {questionIds.map(id => {
                  return (
                    <Question
                      key={id}
                      id={id}
                      questionsToShow={questionsToShow}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
  };
}

export default connect(mapStateToProps)(Dashboard);
