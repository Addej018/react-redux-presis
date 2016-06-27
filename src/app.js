import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import {initialState} from './FriendListingPage/reducers';
import FriendListingPage from './FriendListingPage';


const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={ store }>
        <FriendListingPage />
    </Provider>,
    document.getElementById('root')
);

