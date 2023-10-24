import { CounterAction } from "./actions";

// counterReducer.ts
interface CounterState {
    count: number;
  }
  
  const initialCounterState: CounterState = {
    count: 0,
  };
  
  const counterReducer = (state = initialCounterState, action: CounterAction): CounterState => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DECREMENT_COUNTER':
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  