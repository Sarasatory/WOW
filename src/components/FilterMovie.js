const FilterMovie = (props) => {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  const handlePress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  };

  return (
    <>
      <label htmlFor='movie'>Película: </label>
      <input
        type='text'
        name='movie'
        id='movie'
        placeholder='Buscar...'
        value={props.filterMovie}
        onChange={handleChange}
        onKeyPress={handlePress}
      />
    </>
  );
};
export default FilterMovie;
