import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormItem from '../FormItem/FormItem';
import { fetchMessages } from '../../actions';
import './FormList.css';
class FormList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchMessages());
  }

  render() {
    const { messages } = this.props;
    
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="content__messages">
          <h5> click the message to kill it</h5>
            <ul className="list-group">
              {messages.map(message => (
                <FormItem key={message.id} id={message.id} msg={message.data.msg} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  messages: state.messages.items
});

export default connect(mapSateToProps)(FormList);
