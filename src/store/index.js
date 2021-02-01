import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import user from './user';
import division from './division';

const reducer = combineReducers({
  user,
  division,
});

const store = configureStore({
  reducer,
});

export default store;
