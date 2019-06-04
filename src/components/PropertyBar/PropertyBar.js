import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faTrash } from '@fortawesome/free-solid-svg-icons';

import './PropertyBar.css';

const propertyBarPropTypes = {
  id: PropTypes.string.isRequired,
  handleCheckDetailedItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

const PropertyBar = props => (
  <div className="property_bar__component">

    <button
      className="btn btn-secondary property_bar__button"
      onClick={() => props.handleCheckDetailedItem(props.id)}>
      <FontAwesomeIcon icon={faAdjust} />
    </button>

    <button 
      className="btn btn-danger property_bar__button" 
      onClick={() => props.handleDeleteItem(props.id)}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
    
  </div>
);

PropertyBar.propTypes = propertyBarPropTypes;

export default PropertyBar;
