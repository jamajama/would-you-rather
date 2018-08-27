import { saveQuestion, saveQuestionAnswer, getQuestions } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { loggedInUser } = getState();
        const userId = loggedInUser.id;

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: userId
        })
            .then((question) => dispatch(addQuestion(question)));
    }
}

export function handleAddQuestionAnswer (questionId, answer) {
    return (dispatch, getState) => {
        const { loggedInUser } = getState();
        const userId = loggedInUser.id;

        return saveQuestionAnswer({
            userId,
            qid: questionId,
            answer
        });
    }
}

export function handleGetQuestions() {
    return (dispatch) => {
        return getQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)));
    }
}