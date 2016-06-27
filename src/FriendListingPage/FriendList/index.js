import React from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

export default ({friends, actions}) => (
  <ul className={styles.friendList}>
    {friends.map(friend =>
      <FriendListItem
        key={friend.id}
        friend={friend}
        deleteFriend={actions.deleteFriend}
        />) }
  </ul>
);