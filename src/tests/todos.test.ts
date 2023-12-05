import { AppState, ExtraParams } from '../store/index';
import { todos, fetchTodos, initialState } from '../store/todos';
import { mockTodoResponse, mockErrorResponse } from './mocks';

global.fetch = jest.fn();

describe('fetchTodos', () => {
  it('should fetchTodos with fulfilled', async () => {
    (fetch as jest.Mock).mockResolvedValue({ json: () => Promise.resolve(mockTodoResponse) });

    const dispatch = jest.fn();
    const thunk = fetchTodos('');

    await thunk(dispatch, () => ({}) as AppState, {
      url: 'https://jsonplaceholder.typicode.com/',
    } as ExtraParams);

    const calls = dispatch.mock.calls;
    const [pendingСall, fulfilledCall] = calls;

    // показать успешный кейс
    console.log('fulfilledCall: ', fulfilledCall);

    expect(calls).toHaveLength(2);
    expect(pendingСall[0].type).toBe('todos/fetchTodos/pending');
    expect(fulfilledCall[0].type).toBe('todos/fetchTodos/fulfilled');
    expect(fulfilledCall[0].payload).toBe(mockTodoResponse);
  });

  it('should fetchTodos with rejected', async () => {
    (fetch as jest.Mock).mockResolvedValue({ json: () => Promise.reject(mockErrorResponse) });

    const dispatch = jest.fn();
    const thunk = fetchTodos('');

    await thunk(dispatch, () => ({}) as AppState, {
      url: 'https://jsonplaceholder.typicode.com/',
    } as ExtraParams);

    const calls = dispatch.mock.calls;
    const [pendingСall, rejectedCall] = calls;

    // показать ошибку
    console.log('rejectedCall: ', rejectedCall);

    expect(calls).toHaveLength(2);
    expect(pendingСall[0].type).toBe(fetchTodos.pending.type);
    expect(rejectedCall[0].type).toBe(fetchTodos.rejected.type);
    expect(rejectedCall[0].payload).toBeUndefined();
  });
});

describe('todosSlice extraReducers', () => {
  it('should change status for fetchTodos.pending', () => {
    const state = todos(initialState, fetchTodos.pending('', '', ''));

    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  it('should change status for fetchTodos.fulfilled', () => {
    const state = todos(initialState, fetchTodos.fulfilled(mockTodoResponse, '', ''));

    expect(state.status).toBe('succeeded');
    expect(state.todos).toStrictEqual(mockTodoResponse);
  });

  it('should change status for fetchTodos.rejected', () => {
    const state = todos(initialState, fetchTodos.rejected(mockErrorResponse, '', ''));

    expect(state.status).toBe('failed');
    expect(state.todos).toStrictEqual([]);
  });
});
