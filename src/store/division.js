import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api';

// Slice
const slice = createSlice({
  name: 'division',
  initialState: {
    metricSummary: [],
    divisionSummary: null,
    moduleHistory: [],
  },
  reducers: {
    fetchMetricSummarySuccess: (state, action) => {
      state.metricSummary = action.payload.metricSummary;
    },
    fetchDivisionSummarySuccess: (state, action) => {
      state.divisionSummary = action.payload.divisionSummary;
    },
    fetchModuleHistorySuccess: (state, action) => {
      state.moduleHistory = action.payload.moduleHistory;
    },
  },
});

export default slice.reducer;

// Actions
const { fetchMetricSummarySuccess, fetchDivisionSummarySuccess, fetchModuleHistorySuccess } = slice.actions;

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
    const result = await api.get('/04a4d06b');
    dispatch(fetchDivisionSummarySuccess({ divisionSummary: result.data }));
    return result.data;
  } catch (err) {
    throw err;
  }
};

export const fetchModuleHistory = () => async (dispatch) => {
  try {
    const result = await api.get('/08464f58');
    dispatch(fetchModuleHistorySuccess({ moduleHistory: result.data }));
    return result.data;
  } catch (err) {
    throw err;
  }
};
