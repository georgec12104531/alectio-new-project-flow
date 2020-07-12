export const handleSubmitNewProject = async (projectName, dataType, dataSource, publicAddress, port, trainingSize, problemType, classLabelFile, fileName) => {
  const config = {
    method: 'POST',
    body: JSON.stringify({
      projectName,
      dataType,
      dataSource,
      publicAddress,
      port,
      trainingSize,
      problemType,
      classLabelFile,
      fileName
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(`API END POINT`, config);
    const dataJSON = response.json();
    return dataJSON;
  } catch {
    return 'There was an error!!!';
  }
}