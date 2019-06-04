import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Form from '../Form/Form';
import FormEdit from '../FormEdit/FormEdit';
import FormItem from '../FormItem/FormItem';

import './Content.css';

class Content extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    editingItem: PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
    className: PropTypes.string.isRequired,
    handleAddItem: PropTypes.func.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    handleEditItem: PropTypes.func.isRequired,
    handleCheckDetailedItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    items: [],
    editingItem: {},
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="container">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">GG</h5>
                <p className="card-text">add some message</p>
                <div className="d-inline-block">
                  <Form handleAddItem={this.props.handleAddItem} />
                </div>
              </div>
            </div>
          </div>
          {this.props.items.length ? (
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="content__messages">
                  <ul className="list-group content__messages__ul">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                      <Droppable droppableId="droppable">
                        {provided => (
                          <div ref={provided.innerRef}>
                            {this.props.items.map((item, index) => (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {provided => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="content__messages__li">
                                    {this.props.editingItem.id === item.id ? (
                                      <FormEdit
                                        item={this.props.editingItem}
                                        handleEditItem={this.props.handleEditItem}
                                      />
                                    ) : (
                                      <FormItem
                                        item={item}
                                        handleDeleteItem={this.props.handleDeleteItem}
                                        handleCheckDetailedItem={this.props.handleCheckDetailedItem}
                                      />
                                    )}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Content;
