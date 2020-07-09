export interface IAppState {
  todos: any;
  navItems: any;
}

export const INITIAL_STATE: IAppState = {
  todos: {
    prop: [1, 2, 3, 4],
  },
  navItems: [
    { name: 'Home', selected: true, path: 'home', id: 1 },
    { name: 'New Project', selected: false, path: 'new-project', id: 2 },
    { name: 'All Projects', selected: false, path: 'all-projects', id: 3 },
    { name: 'Archives', selected: false, path: 'archives', id: 4 },
    { name: 'Workflow', selected: false, path: 'workflow', id: 5 },
  ],
};

export function rootReducer(state, action) {
  return state;
}
