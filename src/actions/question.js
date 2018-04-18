import { API_BASE_URL } from "../config";

export const FETCH_QUESTION_REQUEST = "FETCH_QUESTION_REQUEST";
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS";
export const fetchQuestionSuccess = (question) => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const FETCH_QUESTION_ERROR = "FETCH_QUESTION_ERROR";
export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});

export const SUBMIT_ANSWER_REQUEST = 'SUBMIT_ANSWER_REQUEST';
export const submitAnswerRequest = () => ({
    type: SUBMIT_ANSWER_REQUEST
})

export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
export const submitAnswerSuccess = () => ({
    type: SUBMIT_ANSWER_SUCCESS
})

export const SUBMIT_ANSWER_ERROR = 'SUBMIT_ANSWER_ERROR';
export const submitAnswerError = error => ({
    type: SUBMIT_ANSWER_ERROR,
    error
})

export const fetchQuestion = () => (dispatch, getState) => {
  const jwt = getState().auth.authToken;
  fetch(`${API_BASE_URL}/user/question`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(question => {
      dispatch(fetchQuestionSuccess(question));
    })
    .catch(err => {
      dispatch(fetchQuestionError(err));
    });
};

export const submitAnswer = (input) => (dispatch, getState) => {
  dispatch(submitAnswerRequest());
  const jwt = getState().auth.authToken;
  return fetch (`${API_BASE_URL}/user/validate`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json',
          Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        input
      })
  })
  .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      dispatch(submitAnswerSuccess());
      dispatch(fetchQuestion());
  }).catch(err =>
      dispatch(submitAnswerError(err))
  );
}
