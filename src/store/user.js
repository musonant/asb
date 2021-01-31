import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api';

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {
    fetchUsersSsuccess: (state, action) => {
      state.users = action.payload.users;
    },
  },
});

export default slice.reducer;

// Actions
const {fetchUsersSsuccess} = slice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    const result = await api.get('/f2ccc878');
    dispatch(fetchUsersSsuccess({ users: result.data }));
    return result.data;
  } catch (err) {
    throw err;
  }
};
