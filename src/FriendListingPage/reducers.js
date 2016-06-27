import * as types from './actions/ActionTypes';

export const initialState = {
  friends: [
    {
      id: 1,
      name: 'Theodore Roosevelt',
      starred: false
    },
    {
      id: 2,
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      id: 3,
      name: 'George Washington',
      starred: true
    }]
};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newFriend = [action.friend];
      return {
        friends: state.friends.concat(newFriend)
      }

    case types.DELETE_FRIEND:
      return {
        friends: state.friends.filter(friend => friend.id !== action.id),
      }

    default:
      return state;
  }
}
