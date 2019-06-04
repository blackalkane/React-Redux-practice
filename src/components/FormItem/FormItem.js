import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormItem.css';
import PropertyBar from '../PropertyBar/PropertyBar';

export default class FormItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
    handleDeleteItem: PropTypes.func.isRequired,
    handleCheckDetailedItem: PropTypes.func.isRequired,
  };

  state = 
    { displayMenu: false, 
      
    };

  setDisplayMenu = bool => {
    if (this.state.displayMenu !== bool) {
      this.setState({ displayMenu: bool });
    }
  };

  render() {
    return (
      <li
        className="form_item__component list-group-item form-control"
        onMouseMove={() => this.setDisplayMenu(true)}
        onMouseLeave={() => this.setDisplayMenu(false)}>
        <div className="text-truncate">
          <div className="form_item__checkout d-inline-block">
          </div>
          <span className="form_item__text">{this.props.item.value}</span>
        </div>
          <PropertyBar
            id={this.props.item.id}
            handleCheckDetailedItem={this.props.handleCheckDetailedItem}
            handleDeleteItem={this.props.handleDeleteItem}
          />
      </li>
    );
  }
}
