import * as actions from '../actions/questions';

const initialState = {
	questions: [],
	loading: false,
	error: null
};

export default function reducer(state = initialState, action) {
	if (action.type === actions.FETCH_QUESTION_REQUEST) {
		console.log('REDUCER');
		return Object.assign({}, state, {
			loading: true
		});
	}
	if (action.type === actions.FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			questions: action.question
		});
	}
	if (action.type === actions.FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	return state;
}
