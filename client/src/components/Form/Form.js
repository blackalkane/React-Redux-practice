import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';
import './Form.css';
const Form = ({ dispatch }) => {
  let gg;

  return (
    <div className="cover">
      <h1>add some message</h1>
      <form className="flex-form"
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
          <button type="submit" className="a">Add</button>
        </div>
      </form>
    </div>
  );
};

export default connect()(Form);
