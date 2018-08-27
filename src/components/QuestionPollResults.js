import React, {Component} from 'react';
import {connect} from 'react-redux';


class QuestionPollResults extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <div className='projectContainer'>

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