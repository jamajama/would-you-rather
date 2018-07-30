import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion, formatDate } from "../utils/helpers";
// import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CardHeader, Container, Row, Col, Button} from 'reactstrap';

class Question extends Component {

    toQuestion = (e, id) => {
        e.preventDefault();
        // todo: Redirect to the question.

    };


    render() {

        const { question } = this.props;

        if (question === null) {
            return <p>This question doesn't exist.</p>
        }

        const {
            name, id, timestamp, avatar, optionOne, optionTwo, hasVoted
        } = question;


        return (
            <div className='margin-top-10'>
                <div className='card'>
                    <div className='card-header bold'>{name} asks...</div>
                    <div className='card-body'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-sm-4 border-right center'>
                                    <img src={avatar} alt={`Avatar of ${name}`} className='avatar' />
                                </div>
                                <div className='col-sm-8'>
                                    <div className='question-info'>
                                        <p className='center'><strong>Would You Rather?</strong></p>
                                        <p className='center'>{optionOne.text} <strong>OR</strong> {optionTwo.text}</p>
                                        <button onClick={(e) => this.toQuestion(e, id)} className='btn btn-outline-primary reset-vertical-margin'>View Poll</button>
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

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id];

    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default connect(mapStateToProps)(Question);