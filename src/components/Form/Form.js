import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
export default class Form extends Component {
  static propTypes = {
    handleAddItem: PropTypes.func.isRequired,
  };

  state = { itemValue: '' };

  handleSubmitAndResetForm = e => {
    e.preventDefault();
    this.props.handleAddItem(this.state.itemValue);
    this.setState({
      itemValue: '',
    });
    return;
  };

  handleItemChange = e =>
    this.setState({
      itemValue: e.target.value,
    });

  render() {
    return (
      <div>
        <form method="POST" autoComplete="on" onSubmit={this.handleSubmitAndResetForm}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="new-message-item"
                name="new-message-item"
                placeholder="WE THE NORTH!!!"
                value={this.state.itemValue}
                onChange={this.handleItemChange}
              />
            </div>

            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!this.state.itemValue}>
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
