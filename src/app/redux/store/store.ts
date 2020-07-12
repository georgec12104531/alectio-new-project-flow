// import { NewProject } from './../pages/new-project/new-project.component';
import { newProjectTypes } from '../types/new-project-types';

export interface IAppState {
  default: any;
  newProject: any;
  navItems: any;
}

interface DataType {
  value: string;
  viewValue: string;
}

const dataTypes: DataType[] = [
  {value: 'image-data', viewValue: 'Image Data'},
  {value: 'text-data', viewValue: 'Text Data'},
  {value: 'numberica-data', viewValue: 'Numerical Data'}
];

interface DataSource {
  value: string;
  viewValue: string;
}

const dataSources: DataSource[] = [
  {value: 'on-prem', viewValue: 'On-Prem'},
  {value: 'dataset-library', viewValue: 'Dataset Library'},
];

interface trainingSize {
  value: string;
  viewValue: string;
}

const trainingSizes: trainingSize[] = [
  {value: '1', viewValue: '1'},
  {value: '2', viewValue: '2'},
  {value: '3', viewValue: '3'},
  {value: '4', viewValue: '4'},
  {value: '5', viewValue: '5'},
  {value: '6', viewValue: '6'},
  {value: '7', viewValue: '7'},
  {value: '8', viewValue: '8'},
  {value: '9', viewValue: '9'},
  {value: '10', viewValue: '10'},
];


interface problemType {
  value: string;
  viewValue: string;
}

const problemTypes: problemType[] = [
  {value: 'object-detection', viewValue: 'Object Detection'},
  {value: 'classification', viewValue: 'Classification'},
  {value: 'text-classification', viewValue: 'Text Classification'}
];

export const INITIAL_STATE: IAppState = {
  default: {
    dataTypes,
    dataSources,
    trainingSizes,
    problemTypes
  },
  newProject: {
    projectName: '',
    dataType: '',
    dataSource: '',
    publicAddress: '',
    port: '',
    trainingSize: '',
    problemType: '',
    classLabelFile: '',
    fileName: ''
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
    case newProjectTypes.EDIT_PROJECT_NAME:
      return {
        ...state,
        newProject: {
          ...state.newProject,
          projectName: action.projectName
        }
      };
    case newProjectTypes.EDIT_DATA_TYPE:
        return {
        ...state,
        newProject: {
          ...state.newProject,
          dataType: action.dataType
        }
      };
    case newProjectTypes.EDIT_DATA_SOURCE:
      return {
        ...state,
        newProject: {
          ...state.newProject,
          dataSource: action.dataSource
        }
      };
    case newProjectTypes.EDIT_ON_PREM_INFO:
      return {
        ...state,
        newProject: {
          ...state.newProject,
          publicAddress: action.payload.publicAddress,
          port: action.payload.port,
          trainingSize: action.payload.trainingSize,
          problemType: action.payload.problemType,
          classLabelFile: action.payload.classLabelFile,
          fileName: action.payload.fileName
        }
      };
    default:
      return state;

  }
}
