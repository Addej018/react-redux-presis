import React from 'react';
import styles from './base.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {addFriend, deleteFriend}  from './actions/actionCreators';
import FriendList from './FriendList';
import AddFriendInput from './AddFriendInput';

const FriendListingPage = ({friendlist, addFriend, deleteFriend}) => {
    const actions = { deleteFriend };
    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={addFriend} />
        <FriendList friends={friendlist} actions={actions} />
      </div>
    );
}

const mapStateToLinkProps = (state) => ({
  friendlist: state.friends 
})

const mapDispatchToLinkProps = (dispatch) => ({
    addFriend(name){
      return dispatch(addFriend(name));
    },
    deleteFriend(id){
      return dispatch(deleteFriend(id));
    }
})

export default connect(mapStateToLinkProps,mapDispatchToLinkProps)(FriendListingPage);
