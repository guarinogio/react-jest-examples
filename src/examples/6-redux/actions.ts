// actions.ts
export const incrementCounter = () => ({
    type: 'INCREMENT_COUNTER' as const,
  });
  
  export const decrementCounter = () => ({
    type: 'DECREMENT_COUNTER' as const,
  });
  
  export type CounterAction = ReturnType<typeof incrementCounter | typeof decrementCounter>;
  
  export const updateUser = (name: string) => ({
    type: 'UPDATE_USER' as const,
    payload: name,
  });
  
  export type UserAction = ReturnType<typeof updateUser>;
  