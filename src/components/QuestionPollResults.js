import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleGetQuestions} from "../actions/questions";

class QuestionPollResults extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetQuestions());
    }

    render() {
        const {question, author} = this.props;

        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        let optionOneChosen = (question.optionOne.votes.indexOf(author.id) > -1);
        let optionTwoChosen = false;

        if (!optionOneChosen) {
            optionTwoChosen = (question.optionOne.votes.indexOf(author.id) > -1);
        }

        let optionOneWidth = (question.optionOne.votes.length / totalVotes) * 100;
        let optionTwoWidth = (question.optionTwo.votes.length / totalVotes) * 100;

        return (
            <div>
                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                <div className='card'>
                                    <div className='card-header bold'>Added by {author.name}</div>
                                    <div className='card-body'>
                                        <div className='container'>
                                            <div className='row justify-content-center'>
                                                <div className='col-sm-4 border-right vert-align'>
                                                    <img src={author.avatarURL}
                                                         alt={`Avatar of ${author.name}`}
                                                         className='avatar'/>
                                                </div>
                                                <div className='col-sm-8'>
                                                    <div className='question-info'>
                                                        <div className='col-sm-12 '>
                                                            <div className='results-header'>Results:</div>
                                                            <div className={"card card-poll-results " + (optionOneChosen  ? "chosen-answer" : "") }>Would you rather {question.optionOne.text}?

                                                                <div className="progress m-progress--sm">
                                                                    <div className="progress-bar m--bg-success"
                                                                         style={{ width: optionOneWidth + '%' }}
                                                                         ></div>
                                                                </div>
                                                                <div>
                                                                    <span>{question.optionOne.votes.length} out of {totalVotes} votes. ({optionTwoWidth}%)</span>
                                                                </div>

                                                            </div>
                                                            <div className={"card card-poll-results " + (optionTwoChosen  ? "chosen-answer" : "") }>Would you rather {question.optionTwo.text}?

                                                                <div className="progress m-progress--sm">
                                                                    <div className="progress-bar m--bg-success"
                                                                         style={{ width: optionTwoWidth + '%' }}
                                                                    ></div>
                                                                </div>
                                                                <div>
                                                                    <span>{question.optionTwo.votes.length} out of {totalVotes} votes. ({optionTwoWidth}%)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const {id} = props.match.params;
    const specificQuestion = questions[id];

    return {
        id,
        question: specificQuestion,
        author: users[specificQuestion['author']]
    }
}

export default connect(mapStateToProps)(QuestionPollResults);