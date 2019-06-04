import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { default as AppLayout } from '../components/Layout/App';
import { AddItem } from '../actions/AddItem';
import { DeleteItem } from '../actions/DeleteItem';
import { EditItem } from '../actions/EditItem';
import { CheckDetailedItem } from '../actions/CheckDetailedItem';

const appPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleCheckDetailedItem: PropTypes.func.isRequired,
};

class App extends Component {
  handleAddItem = itemValue => this.props.handleAddItem(itemValue);
  handleDeleteItem = selectedItemId => this.props.handleDeleteItem(selectedItemId);
  handleEditItem = modifiedItem => this.props.handleEditItem(modifiedItem);
  handleCheckDetailedItem = checkedItem => this.props.handleCheckDetailedItem(checkedItem);
  render() {
    return <AppLayout {...this.props} />;
  }
}

const mapStateToProps = state => ({
  items: state.messages.items,
  editingItem: state.messages.editingItem,
});

const mapDispatchToProps = {
  handleAddItem: AddItem,
  handleDeleteItem: DeleteItem,
  handleEditItem: EditItem,
  handleCheckDetailedItem: CheckDetailedItem,
};

App.propTypes = appPropTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
