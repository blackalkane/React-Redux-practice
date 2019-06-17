import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../Message';
import { fetchMessages } from '../../actions';
import './MessageList.css';
class MessageList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMessages());
  }

  render() {
    const { messages, error, loading } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <div>Loading....</div>;
    }
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="content__messages">
            <ul className="list-group content__messages__ul">
              {messages.map(message => (
                <Message key={message.id} msg={message.data.msg} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  messages: state.messages.items,
  loading: state.messages.loading,
  errno: state.messages.error
});

export default connect(mapSateToProps)(MessageList);
