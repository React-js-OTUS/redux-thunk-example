import { createSlice } from '@reduxjs/toolkit';
import { AppState, AppThunk } from 'src/store/index';

export type User = Record<string, unknown>;

const userSlice = createSlice({
  name: 'user',
  initialState: null as User,
  reducers: {
    set: (_, action) => action.payload,
  },
});
export const userActions = userSlice.actions;

const getByCountThunk =
  (): AppThunk =>
  async (dispatch, getState, { url }) => {
    const { count } = getState();
    const response = await fetch(`${url}users/${count}`).then((res) => res.json());
    dispatch(userActions.set(response));
  };

export const userThunks = {
  getByCount: getByCountThunk,
};

export const userSelectors = {
  get: (state: AppState): AppState['user'] => {
    console.log('userSelectors get');

    return state.user;
  },
};

export const user = userSlice.reducer;
