import '../styles/components/FilterYear.scss';

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
    <div className='filter-year'>
      <div className='input-icon-container'>
        <select
          className='filter-movie filter-select'
          name='filterYear'
          id='filterYear'
          onChange={handleChange}
        >
          <option value='0' selected>
            All years
          </option>
          {optionsHtml}
        </select>
      </div>
    </div>
  );
};
export default FilterYear;
