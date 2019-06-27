import { FETCH_MESSAGES_BEGIN, FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILURE,
  ADD_MESSAGE_BEGIN, ADD_MESSAGE_SUCCESS, ADD_MESSAGE_FAILURE,
  REMOVE_MESSAGE_BEGIN, REMOVE_MESSAGE_SUCCESS, REMOVE_MESSAGE_FAILURE,
  CLEAR_ALL_MESSAGES_BEGIN, CLEAR_ALL_MESSAGES_SUCCESS, CLEAR_ALL_MESSAGES_FAILURE
} from '../actions';

const initialState = {
  items: [],
  fetching: false,
  error: null
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    // fetch
    case FETCH_MESSAGES_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        fetching: false,
        items: action.payload.messages
      };
    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
        items: []
      };
    // add
    case ADD_MESSAGE_BEGIN:
      return {
        ...state,
        error: null
      };
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload.message],
        error: null
      };
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    // delete all
    case CLEAR_ALL_MESSAGES_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case CLEAR_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        items: []
      };
    case CLEAR_ALL_MESSAGES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error
      };
    // delete one
    case REMOVE_MESSAGE_BEGIN:
      return {
        ...state,
        error: null
      };
    case REMOVE_MESSAGE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload.id),
        error: null
      };
    case REMOVE_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}
