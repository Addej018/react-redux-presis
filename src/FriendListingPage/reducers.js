import * as types from './actions/ActionTypes';

let customerId = 3;

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
      customerId = customerId + 1;
      const newFriend = [{id:customerId , name: action.name, starred: false }];
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
