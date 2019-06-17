import React from 'react';
import { connect } from 'react-redux';
import { clearAllMessages } from '../../actions';
import './FunctionalButton.css';

const FunctionalButton = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => {dispatch(clearAllMessages());}} type="button" className="btn-hover">
        Kill Them All!!!
      </button>
    </div>
  );
};

export default connect()(FunctionalButton);
