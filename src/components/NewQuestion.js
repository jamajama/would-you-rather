import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddQuestion} from '../actions/questions';
import {Redirect} from 'react-router-dom';

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

        const {optionOneText, optionTwoText} = this.state;
        const {dispatch} = this.props;

        dispatch(handleAddQuestion(optionOneText, optionTwoText));

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toDashboard: true
        }));
    };

    render() {
        const {optionOneText, optionTwoText, toDashboard} = this.state;

        if (toDashboard === true) {
            return <Redirect to='/' />;
        }

        return (
            <div>
                <h3 className='center'>Create New Question</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <input
                        placeholder='Enter option one text here...'
                        value={optionOneText}
                        onChange={this.handleOptionOneTextChange}
                    />
                    <input
                        placeholder='Enter option two text here...'
                        value={optionTwoText}
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

export default connect()(NewQuestion);