import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Question from './Question';
// import { } from 'reactstrap';

class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
    };

    handleOptionOneTextChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            optionOneText: text
        }));
    };

    handleOptionTwoTextChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            optionTwoText: text
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // todo: redirect to the home view if submitted

        const { optionOneText, optionTwoText } = this.state;

        // todo: add question to store

        console.log(`New Question: ${optionOneText} OR ${optionTwoText}`);

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: ''
        }));
    };

    render() {
        const { optionOneText, optionTwoText } = this.state;

        return (
            <div>
                <h3 className='center'>Create New Question</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <input
                        placeholder='Enter option one text here...'
                        value={ optionOneText }
                        onChange={this.handleOptionOneTextChange}
                    />
                    <input
                        placeholder='Enter option two text here...'
                        value={ optionTwoText }
                        onChange={this.handleOptionTwoTextChange}
                    />
                    <button
                        className='btn btn-outline-primary'
                        type='submit'
                        disabled={optionOneText === '' || optionTwoText === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

// function mapStateToProps ({ questions }) {
//     return {
//         questionIds: Object.keys(questions)
//             .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
//     }
// }

export default NewQuestion;