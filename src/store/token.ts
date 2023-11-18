import { createSlice, ThunkAction } from '@reduxjs/toolkit';
import { AppState, AppThunk } from 'src/store/index';

const tokenSlice = createSlice({
  name: 'token',
  initialState: localStorage.getItem('token'),
  reducers: {
    gen: () => Math.random().toString(16),
    same: (state) => state,
  },
});
export const tokenActions = tokenSlice.actions;

export const genWithSaving: AppThunk = (dispatch, getState) => {
  dispatch(tokenActions.gen());
  const state = getState();
  localStorage.setItem('token', state.token);
};

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] => {
    console.log('tokenSelectors get');

    return state.token;
  },
};

export const token = tokenSlice.reducer;
