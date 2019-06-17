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
    const { messages, error, fetching } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (fetching) {
      return <div>fetching....</div>;
    }
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="content__messages">
            <ul className="list-group">
              {messages.map(message => (
                <FormItem key={message.id} msg={message.data.msg} />
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
  fetching: state.messages.fetching,
  error: state.messages.error
});

export default connect(mapSateToProps)(FormList);
