import axios from 'axios';

//_________________________________________________________________
// fetch all the messages 
export function fetchMessages() {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return getMessages()
      .then(res => dispatch(fetchMessagesSuccess(res.data)))
      .catch(error => fetchMessagesFailure(error));
  };
}

export const getMessages = () => {
  return axios({
      method: 'get',
      url: '/messages',
      timeout: 5000
    })
    .then(res => res)
    .catch(err => err);
};

export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const fetchMessagesBegin = () => ({
  type: FETCH_MESSAGES_BEGIN
});

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const fetchMessagesSuccess = messages => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: { messages }
});

export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';
export const fetchMessagesFailure = error => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: { error }
});
//_________________________________________________________________
// add a message
export const addMessage = message => {
  return dispatch => {
    dispatch(addMessageBegin());
    return postMessage(message)
      .then(res => dispatch(addMessageSuccess(res.data)))
      .catch(err => dispatch(addMessageFailure(err)));
  };
};

export const postMessage = message => {
  return axios({
    method: 'post',
    url: '/messages/add',
    timeout: 18000,
    data: {
      msg: message
    }
  })
    .then(res => res)
    .catch(err => err);
};

export const ADD_MESSAGE_BEGIN = 'ADD_MESSAGE_BEGIN';
export const addMessageBegin = () => ({
  type: ADD_MESSAGE_BEGIN
});

export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const addMessageSuccess = message => ({
  type: ADD_MESSAGE_SUCCESS,
  payload: { message }
});

export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';
export const addMessageFailure = error => ({
  type: ADD_MESSAGE_FAILURE,
  payload: { error }
});
//_________________________________________________________________
// delete all the messages
export const clearAllMessages = () => {
  return dispatch => {
    dispatch(clearAllMessagesBegin());
    return deleteAllMessages()
      .then(() => dispatch(clearAllMessagesSuccess()))
      .catch(err => dispatch(clearAllMessagesFailure(err)));
  };
};

export const deleteAllMessages = () => {
  return axios({
    method: 'delete',
    url: 'messages/clear-all',
    timeout: 5000
  })
    .then(res => res)
    .catch(err => err);
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

//_________________________________________________________________
// edit a message
export const editMessage = (id, message) => {
  return dispatch => {
    dispatch(editMessageBegin());
    return putMessage(id, message)
      .then(res => dispatch(editMessageSuccess(res.data)))
      .catch(err => dispatch(editMessageFailure(err)));
  };
};

export const putMessage = (id, message) => {
  return axios
    .put(`/messages/${id}`, { msg: message })
    .then(res => res)
    .catch(err => err);
};

export const EDIT_MESSAGE_BEGIN = 'EDIT_MESSAGE_BEGIN';
export const editMessageBegin = () => ({
  type: EDIT_MESSAGE_BEGIN
});

export const EDIT_MESSAGE_SUCCESS = 'EDIT_MESSAGE_SUCCESS';
export const editMessageSuccess = message => ({
  type: EDIT_MESSAGE_SUCCESS,
  payload: { message }
});

export const EDIT_MESSAGE_FAILURE = 'EDIT_MESSAGE_FAILURE';
export const editMessageFailure = error => ({
  type: EDIT_MESSAGE_FAILURE,
  payload: { error }
});







