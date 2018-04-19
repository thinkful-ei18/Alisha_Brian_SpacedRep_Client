import * as actions from '../actions/question';

const initialState = {
	question: {},
	loading: false,
	error: null,
	score: 0
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
			question: action.question,
  //======ADDING SCORE>>
			
			score: action.score
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
	return state;
}
