import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

import './FormEdit.css';

export default class FormEdit extends Component {
  static propTypes = {
    item: PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
    handleEditItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      itemValue: props.item.value,
    };
  }

  handleItemChange = e =>
    this.setState({
      itemValue: e.target.value,
    });

  handleEditAndResetForm = e => {
    e.preventDefault();
    this.props.handleEditItem({
      ...this.props.item,
      value: this.state.itemValue,
    });
    this.setState({ itemValue: '' });
    return;
  };

  render() {
    return (
      <li className="form_edit__component list-group-item">
        <form method="POST" onSubmit={this.handleEditAndResetForm}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="input-edit-message-item"
                name="edit-message-item"
                value={this.state.itemValue}
                onChange={this.handleItemChange}
                autoFocus
              />
            </div>

            <div className="col-auto">
              <button
                type="submit"
                id="submit-edit-message-item"
                className="btn btn-primary form_edit__button--first"
                disabled={!this.state.itemValue}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          </div>
        </form>
      </li>
    );
  }
}
