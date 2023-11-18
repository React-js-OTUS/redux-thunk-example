import { createSlice } from '@reduxjs/toolkit';
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

const genWithSavingThunk =
  (): AppThunk =>
  (dispatch, getState, { version }) => {
    dispatch(tokenActions.gen());
    const state = getState();
    localStorage.setItem(`token-v: ${version}`, state.token);
  };

export const tokenThunks = {
  genWithSaving: genWithSavingThunk,
};

export const tokenSelectors = {
  get: (state: AppState): AppState['token'] => {
    console.log('tokenSelectors get');

    return state.token;
  },
};

export const token = tokenSlice.reducer;
