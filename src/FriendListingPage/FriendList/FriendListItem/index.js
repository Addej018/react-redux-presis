import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';


export default ({friend, deleteFriend}) => (
  <li className={styles.friendListItem}>
    <div className={styles.friendInfos}>
      <div><span>{friend.name}</span></div>
    </div>
    <div className={styles.friendActions}>
      <button className={`btn btn-default ${styles.btnAction}`} >
        <i className={classnames('fa', { 'fa-star': friend.starred }, { 'fa-star-o': !friend.starred }) } />
      </button>
      <button className={`btn btn-default ${styles.btnAction}`} onClick={e => deleteFriend(friend.id) }>
        <i className="fa fa-trash" />
      </button>
    </div>
  </li>
);
