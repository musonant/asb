import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api';

// Slice
const slice = createSlice({
  name: 'division',
  initialState: {
    metricSummary: [],
  },
  reducers: {
    fetchMetricSummarySuccess: (state, action) => {
      state.metricSummary = action.payload.metricSummary;
    },
  },
});

export default slice.reducer;

// Actions
const {fetchMetricSummarySuccess} = slice.actions;

export const fetchMetricSummary = () => async (dispatch) => {
  try {
    const result = await api.get('/efb0e592');
    dispatch(fetchMetricSummarySuccess({ metricSummary: result.data }));
    return result.data;
  } catch (err) {
    throw err;
  }
};

export const fetchDivisionSummary = () => async (dispatch) => {
  try {
    const result = await api.get('/f2ccc878');
    dispatch(fetchMetricSummarySuccess({ metricSummary: result.data }));
    return result.data;
  } catch (err) {
    throw err;
  }
};

export const fetchModuleHistory = () => async (dispatch) => {
  try {
    const result = await api.get('/f2ccc878');
    dispatch(fetchMetricSummarySuccess({ metricSummary: result.data }));
    return result.data;
  } catch (err) {
    throw err;
  }
};
