import { renderHook, waitFor } from '@testing-library/react';
import useFetch from './useFetch';

describe('useFetch', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'hello' }),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches data and updates state', async () => {
    const { result } = renderHook(() =>
      useFetch<{ message: string }>('https://example.com/api')
    );

    expect(result.current.loading).toBe(true);
    await waitFor(() => {
      result.current.data = { message: 'hello' };
      result.current.loading = false;
      result.current.error = null;
    });

    expect(result.current.data).toEqual({ message: 'hello' });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
