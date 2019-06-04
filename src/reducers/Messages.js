import uuid from 'uuid/v1';
import { ADD_ITEM } from '../actions/AddItem';
import { DELETE_ITEM } from '../actions/DeleteItem';
import { EDIT_ITEM } from '../actions/EditItem';
import { CHECK_DETAILED_ITEM } from '../actions/CheckDetailedItem';

const initState = {
  items: [
    {id: '1', value: "LET'S GO RAPTORS!!!"},
    {id: '2', value: "GSW SUCKS!!!"},  
  ],
};

// previousState + action => newState
const messagesReducer = (state = initState, action) => {
  switch (action.type) {
    
    case ADD_ITEM: {
      const id = uuid();
      const messageItem = {
        id,
        value: action.payload.value,
      };
      return { ...state, items: [...state.items, messageItem] };
    }

    case DELETE_ITEM: {
      const items = state.items.filter(({ id }) => id !== action.payload.id);
      return { ...state, items };
    }

    case EDIT_ITEM: {
      const items = state.items.map(item => {
        if (item.id === action.payload.editedItem.id) {
          item.value = action.payload.editedItem.value;
        }

        return item;
      });

      return { ...state, items, editingItem: {} };
    }

    case CHECK_DETAILED_ITEM: {
      const item = state.items.find(({ id }) => id === action.payload.id);
      return { ...state, editingItem: item };
    }

    default: {
      return state;
    }
  }
};

export default messagesReducer;
