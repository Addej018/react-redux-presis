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
    default:
      return state;
  }
}
