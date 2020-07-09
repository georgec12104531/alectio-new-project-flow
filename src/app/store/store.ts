export interface IAppState {
  newProject: any;
  navItems: any;
}

export const INITIAL_STATE: IAppState = {
  newProject: {
    projectName: "",
    dataType: ""
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
  switch(action.type) {
    case'EDIT_PROJECT_NAME':
      return {
        ...state,
        newProject: {
          ...state.newProject,
          projectName: action.projectName
        }
      }
    case 'EDIT_DATA_TYPE': 
        return {
        ...state,
        dataType: {
          ...state.newProject,
          dataType: action.dataType
        }
      }
    default: 
      return state

  }
}
