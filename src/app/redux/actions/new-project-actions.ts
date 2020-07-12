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

export const handleSubmitAction = (projectName, dataType, dataSource, publicAddress, port, trainingSize, problemType, classLabelFile, fileName) => (
  {
    type: newProjectTypes.SUBMIT_NEW_PROJECT,
    payload: {
      projectName,
      dataType,
      dataSource,
      publicAddress,
      port,
      trainingSize,
      problemType,
      classLabelFile,
      fileName
    }
  }
);