

export interface IAppState {
  todos: any;
}

export const INITIAL_STATE: IAppState = {
  todos: {
    prop: [1, 2, 3, 4],
  },
};

export function rootReducer(state, action) {
  return state;
}
