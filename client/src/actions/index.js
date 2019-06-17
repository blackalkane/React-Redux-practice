import { getMessages, postMessage, deleteAllMessages } from '../api/messageService';

export function fetchMessages() {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return getMessages()
      .then(res => dispatch(fetchMessagesSuccess(res.data)))
      .catch(error => fetchMessagesFailure(error));
  };
}

export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const fetchMessagesBegin = () => ({
  type: FETCH_MESSAGES_BEGIN
});

export const fetchMessagesSuccess = messages => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: { messages }
});

export const fetchMessagesFailure = error => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: { error }
});

export const addMessage = message => {
  return dispatch => {
    dispatch(addMessageBegin());
    return postMessage(message)
      .then(res => dispatch(addMessageSuccess(res.data)))
      .catch(err => dispatch(addMessageFailure(err)));
  };
};

export const ADD_MESSAGE_BEGIN = 'ADD_MESSAGE_BEGIN';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';

export const addMessageBegin = () => ({
  type: ADD_MESSAGE_BEGIN
});

export const addMessageSuccess = message => ({
  type: ADD_MESSAGE_SUCCESS,
  payload: { message }
});

export const addMessageFailure = error => ({
  type: ADD_MESSAGE_FAILURE,
  payload: { error }
});

export const clearAllMessages = () => {
  return dispatch => {
    dispatch(clearAllMessagesBegin());
    return deleteAllMessages()
      .then(() => dispatch(clearAllMessagesSuccess()))
      .catch(err => dispatch(clearAllMessagesFailure(err)));
  };
};

export const CLEAR_ALL_MESSAGES_BEGIN = 'CLEAR_ALL_MESSAGES_BEGIN ';
export const CLEAR_ALL_MESSAGES_SUCCESS = 'CLEAR_ALL_MESSAGES_SUCCESS ';
export const CLEAR_ALL_MESSAGES_FAILURE = 'CLEAR_ALL_MESSAGES_FAILURE';

export const clearAllMessagesBegin = () => ({
  type: CLEAR_ALL_MESSAGES_BEGIN
});

export const clearAllMessagesSuccess = () => ({
  type: CLEAR_ALL_MESSAGES_SUCCESS
});

export const clearAllMessagesFailure = error => ({
  type: CLEAR_ALL_MESSAGES_FAILURE,
  payload: { error }
});
