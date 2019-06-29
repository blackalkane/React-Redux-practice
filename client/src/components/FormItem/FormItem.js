import React from 'react';
import './FormItem.css';
import { connect } from 'react-redux';
import { removeMessage } from '../../actions';

const FormItem = ({ id, msg, dispatch }) => {
  return (
    <div>
      <li className="form_item__component list-group-item form-control" key={id} onClick={() => dispatch(removeMessage(id))}>{id}: {msg}</li>
    </div>

    );
}

export default connect()(FormItem);
