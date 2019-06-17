import React, { Component } from 'react';
import Form from '../Form/Form';
import ClearAll from '../ClearAll';
import MessageList from '../FormList/MessageList';
import './Content.css';

class Content extends Component {
  render() {
    return (
        <div>
          <div className="col-14">
            <div className="card text-center">
              <div className="card-body">
                <p className="card-text">add some message</p>
                <div className="d-inline-block">
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <ClearAll />
        <MessageList />
        
        </div>
    )
  }
}

export default Content;
