import { UserAction } from "./actions";

// userReducer.ts
interface UserState {
    name: string;
  }
  
  const initialUserState: UserState = {
    name: 'John Doe',
  };
  
  const userReducer = (state = initialUserState, action: UserAction): UserState => {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          name: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  