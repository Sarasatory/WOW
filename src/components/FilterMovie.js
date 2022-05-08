import '../styles/components/FilterMovie.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
    <div className='filter-movie'>
      <div className='input-icon-container'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='content-icon' />
        <input
          className='filter-movie filter-input'
          type='text'
          name='movie'
          id='movie'
          placeholder='Search'
          value={props.filterMovie}
          onChange={handleChange}
          onKeyPress={handlePress}
        />
      </div>
    </div>
  );
};
export default FilterMovie;
