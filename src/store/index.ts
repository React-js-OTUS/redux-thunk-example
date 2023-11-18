import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { count } from 'src/store/count';
import { token } from 'src/store/token';
import { items } from './items';

export const store = configureStore({
  reducer: {
    items,
    count,
    token,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          url: 'https://jsonplaceholder.typicode.com/todos',
          version: '1',
        },
      },
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  { url: string; version: string },
  AnyAction
>;
