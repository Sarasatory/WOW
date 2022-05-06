const deleteDuplicates = (entry) => {
  // Filtrar el array para evitar los elementos repetidos.
  const uniqueDataSet = new Set(entry);
  const uniqueData = [...uniqueDataSet];

  return uniqueData;
};
export default deleteDuplicates;
