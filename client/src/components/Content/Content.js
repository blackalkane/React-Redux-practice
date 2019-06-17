import React, { Component } from 'react';
import Form from '../Form/Form';
import FunctionalButton from '../FunctionalButton/FunctionalButton';
import FormList from '../FormList/FormList';
import './Content.css';

class Content extends Component {
  render() {
    return (
        <div>
          <div className="col-14">
            <div className="card text-center">
              <div className="card-body">
                <div className="d-inline-block">
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <FunctionalButton />
          <FormList />
        </div>
    )
  }
}

export default Content;
