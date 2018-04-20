import * as actions from '../actions/question';

const initialState = {
	question: {},
	score: 0,
	loading: false,
	error: null
};

export default function questionReducer(state = initialState, action) {
	if (action.type === actions.FETCH_QUESTION_REQUEST) {
		console.log('REDUCER');
		return Object.assign({}, state, {
			loading: true
		});
	}
	if (action.type === actions.FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			question: action.question
		});
	}
	if (action.type === actions.FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	} else if (action.type === actions.SUBMIT_ANSWER_REQUEST) {
        return Object.assign({}, state, {
          loading: true
        });
    } else if (action.type === actions.SUBMIT_ANSWER_SUCCESS) {
        return Object.assign({}, state, {
          loading: false
        });
    } else if (action.type === actions.SUBMIT_ANSWER_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        })
	}
	if (action.type === actions.UPDATE_SCORE_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			score: action.score
		});
	}
	return state;
}