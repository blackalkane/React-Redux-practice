import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormItem.css';
import FunctionalButtons from '../FunctionalButtons/FunctionalButtons';

export default class FormItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
    handleDeleteItem: PropTypes.func.isRequired,
    handleCheckDetailedItem: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li
        className="form_item__component list-group-item form-control">
          <span>{this.props.item.value}</span>
          <FunctionalButtons
            id={this.props.item.id}
            handleCheckDetailedItem={this.props.handleCheckDetailedItem}
            handleDeleteItem={this.props.handleDeleteItem}
          />
      </li>
    );
  }
}
