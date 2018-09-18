import {saveQuestion, saveQuestionAnswer, getQuestions} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {login} = getState();
        const author = login.loggedInUser.id;

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
            .then((question) => dispatch(addQuestion(question)));
    }
}

export function handleAddQuestionAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const {login} = getState();
        const authedUser = login.loggedInUser.id;

        return saveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer
        });
    }
}

export function handleGetQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        return getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
    }
}