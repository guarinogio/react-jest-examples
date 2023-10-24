import counterReducer from './counterReducer';
import { incrementCounter, decrementCounter } from './actions';

describe('Counter Reducer', () => {
  it('should handle INCREMENT_COUNTER', () => {
    const initialState = { count: 0 };
    const newState = counterReducer(initialState, incrementCounter());
    expect(newState.count).toEqual(1);
  });

  it('should handle DECREMENT_COUNTER', () => {
    const initialState = { count: 5 };
    const newState = counterReducer(initialState, decrementCounter());
    expect(newState.count).toEqual(4);
  });
});
