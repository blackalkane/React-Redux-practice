import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';
const AddMessage = ({ dispatch }) => {
  let gg;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!gg.value.length) {
            return;
          }
          dispatch(addMessage(gg.value));
          gg.value = '';
        }}>
        <input 
          type="text"
          className="form-control"
          id="new-message-item"
          name="new-message-item"
          placeholder="WE THE NORTH!!!" 
          ref={node => (gg = node)} />
        <div className="col-auto">
          <button type="submit" className="button_base b03_skewed_slide_in">Add</button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddMessage);
