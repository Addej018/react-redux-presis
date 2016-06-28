import React from 'react';
import styles from './base.css';
import { connect } from 'react-redux';
import FriendList from './FriendList';
import AddFriendInput from './AddFriendInput';

const FriendListingPage = () => {
    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput />
        <FriendList />
      </div>
    );
}


export default connect()(FriendListingPage);
