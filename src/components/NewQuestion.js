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
            return <Redirect to='/'/>;
        }

        return (
            <div>
                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                <div className='card'>
                                    <div className='card-header bold'>Create New Question</div>
                                    <div className='card-body'>
                                        <div className='container'>
                                            <div className='row justify-content-center p-20-top-bottom'>
                                                <div className='col-sm-12'>
                                                    <form onSubmit={this.handleSubmit}>
                                                        <div className='form-group'>
                                                            <label><strong>Option One</strong></label>
                                                            <input
                                                                className='form-control'
                                                                placeholder='Enter option one text here...'
                                                                value={optionOneText}
                                                                onChange={this.handleOptionOneTextChange}
                                                            />
                                                        </div>
                                                        <div className='form-group'>
                                                            <label><strong>Option Two</strong></label>
                                                            <input
                                                                className='form-control'
                                                                placeholder='Enter option two text here...'
                                                                value={optionTwoText}
                                                                onChange={this.handleOptionTwoTextChange}
                                                            />
                                                        </div>
                                                        <input type='submit' name='submit' id='submit' value='Submit'
                                                               className='btn btn-outline-primary'
                                                               disabled={optionOneText === '' || optionTwoText === ''} />
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
        )
    }
}

export default connect()(NewQuestion);