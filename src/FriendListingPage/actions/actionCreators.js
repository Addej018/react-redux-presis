import * as types from './ActionTypes';

let customerId = 3;


export function addFriend(name) {
  customerId = customerId + 1;
  return {
    type: types.ADD_FRIEND,
    friend : {id:customerId , name:name, starred: false }
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}
