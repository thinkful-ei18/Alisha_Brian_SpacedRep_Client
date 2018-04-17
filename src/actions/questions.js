import { API_BASE_URL } from '../config';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionsRequest = () => ({
	type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionsSuccess = (question, index) => ({
	type: FETCH_QUESTION_SUCCESS,
	video
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionsError = error => ({
	type: FETCH_QUESTION_ERROR,
	error
});

export const fetchQuestions = () => dispatch => {
	dispatch(fetchQuestionsRequest());
	fetch(`${API_BASE_URL}/questions`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(questions => {
			console.log('ACTIONS', questions);
			dispatch(fetchQuestionsSuccess(questions));
		})
		.catch(err => {
			dispatch(fetchQuestionsError(err));
		});
};
