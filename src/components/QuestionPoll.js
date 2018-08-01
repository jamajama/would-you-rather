import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';
import Navbar from "./Navbar";


class QuestionPoll extends Component {

    handleSubmit() {

    }

    render() {

        console.log(this.props);

        const {id, question, author} = this.props;

        return (
            <div>
                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                <div className='card'>
                                    <div className='card-header bold'>{author.name} asks...</div>
                                    <div className='card-body'>
                                        <div className='container'>
                                            <div className='row justify-content-center'>
                                                <div className='col-sm-4 border-right center'>
                                                    <img src={author.avatarURL}
                                                         alt={`Avatar of ${author.name}`}
                                                         className='avatar'/>
                                                </div>
                                                <div className='col-sm-8'>
                                                    <div className='question-info'>
                                                        <h3 className='center'><strong>Would You
                                                            Rather...</strong></h3>
                                                        <form>
                                                            <div className="form-check">
                                                                <input className="form-check-input"
                                                                       type="radio"
                                                                       name="questionPoll"
                                                                       id="optionOne"
                                                                       value="optionOne" checked/>
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="optionOne">
                                                                    {question.optionOneText}
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input"
                                                                       type="radio"
                                                                       name="questionPoll"
                                                                       id="optionTwo"
                                                                       value="optionTwo"/>
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="exampleRadios2">
                                                                    {question.optionTwoText}
                                                                </label>
                                                            </div>
                                                            <button type="submit"
                                                                    className="btn-sm btn-primary">Submit
                                                            </button>
                                                        </form>
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


export default connect(mapStateToProps)(QuestionPoll);