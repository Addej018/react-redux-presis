    
import reducer from './FriendListingPage/reducers';
import {createStore} from 'redux';
import deepFreeze from 'deep-freeze';

export default function configureStore(initialState) {
    deepFreeze(initialState);
    const store = createStore(reducer, initialState, 
      window.devToolsExtension && window.devToolsExtension()
    );
    return store;
}