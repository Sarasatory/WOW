const orderBy = (arrayEntry, propertyEntry) => {
  if (propertyEntry === '') {
    return arrayEntry;
  } else {
    // Creamos un array temporal que contiene los objetos con una posición y un valor de ordenamiento.
    //   Este valor hace referencia a una de sus "propiedades", que es por la que ordenamos.
    var mapped = arrayEntry.map(function (el, i) {
      return { index: i, value: el[propertyEntry].toString().toLowerCase() };
    });

    // Ordenamos el array mapeado que contiene los valores reducidos.
    mapped.sort(function (a, b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    // Constante con un nuevo array con el orden resultante.
    const arrayOrdered = mapped.map(function (el) {
      return arrayEntry[el.index];
    });

    return arrayOrdered;
  }
};

export default orderBy;
