import axios from 'axios';

const messageApi = axios.create({
  baseURL: 'http://localhost:5000/'
});

export const getMessages = () => {
  return messageApi
    .get('/messages')
    .then(res => res)
    .catch(err => err);
};

export const postMessage = message => {
  return messageApi
    .post('/messages/add', { msg: message })
    .then(res => res)
    .catch(err => err);
};

export const deleteAllMessages = () => {
  return messageApi
    .delete('/messages/clear-all')
    .then(res => res)
    .catch(err => err);
};
