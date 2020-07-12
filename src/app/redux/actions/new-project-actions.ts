export const dataTypeAction = dataType => (
  { type: 'EDIT_DATA_TYPE', dataType }
);

export const projectNameAction = projectName => (
  { type: 'EDIT_PROJECT_NAME', projectName}
);

export const dataSourceAction = dataSource => (
  { type: 'EDIT_DATA_SOURCE', dataSource }
)

export const onPremInfoAction = (publicAddress, port, trainingSize, problemType, classLabelFile, fileName) => (
  {
    type: 'EDIT_ON_PREM_INFO',
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

export const resetNewProjectAction = () => ({type: 'RESET_NEW_PROJECT'})
