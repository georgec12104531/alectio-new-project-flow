import { newProjectTypes } from '../types/new-project-types';

export const dataTypeAction = dataType => (
  { type: newProjectTypes.EDIT_DATA_TYPE, dataType }
);

export const projectNameAction = projectName => (
  { type: newProjectTypes.EDIT_PROJECT_NAME, projectName}
);

export const dataSourceAction = dataSource => (
  { type: newProjectTypes.EDIT_DATA_SOURCE, dataSource }
)

export const onPremInfoAction = (publicAddress, port, trainingSize, problemType, classLabelFile, fileName) => (
  {
    type: newProjectTypes.EDIT_ON_PREM_INFO,
    payload: {
      publicAddress,
      port,
      trainingSize,
      problemType,
      classLabelFile,
      fileName,
    }
  }
);

export const resetNewProjectAction = () => (
  {type: newProjectTypes.RESET_NEW_PROJECT}
)
