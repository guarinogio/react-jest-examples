import userReducer from './userReducer';
import { updateUser } from './actions';

describe('User Reducer', () => {
  it('should handle UPDATE_USER', () => {
    const initialState = { name: 'John Doe' };
    const newState = userReducer(initialState, updateUser('Jane Smith'));
    expect(newState.name).toEqual('Jane Smith');
  });
});
