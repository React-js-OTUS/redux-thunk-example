import { AppState, ExtraParams } from '../store/index';
import { userThunks } from '../store/user';
import { mockUserResponse } from './mocks';

global.fetch = jest.fn();

describe('getByCountThunk', () => {
  it('should getByCountThunk with fulfilled', async () => {
    (fetch as jest.Mock).mockResolvedValue({ json: () => Promise.resolve(mockUserResponse) });

    const dispatch = jest.fn();
    const thunk = userThunks.getByCount();

    await thunk(dispatch, () => ({ count: 1 }) as AppState, {
      url: 'https://jsonplaceholder.typicode.com/',
    } as ExtraParams);

    const calls = dispatch.mock.calls;

    expect(calls).toHaveLength(1);
    expect(calls[0][0].type).toBe('user/set');
    expect(calls[0][0].payload).toBe(mockUserResponse);
  });
});
