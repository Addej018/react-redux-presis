import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

const keyCodeEnter = 13;

export default class AddFriendInput extends Component {
  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={this.state.name}
        onChange={this.handleChange.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }
}

AddFriendInput.PropTypes = {
    addFriend: PropTypes.func.isRequired
}