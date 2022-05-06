const FilterYear = (props) => {
  const optionsHtml = props.uniqueYear.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };

  return (
    <>
      <label htmlFor='filterYear'>Year</label>
      <select name='filterYear' id='filterYear' onChange={handleChange}>
        {/* <option value='0'>Todos los años</option> */}
        {optionsHtml}
      </select>
    </>
  );
};
export default FilterYear;
