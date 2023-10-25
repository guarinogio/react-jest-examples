import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export default store;
