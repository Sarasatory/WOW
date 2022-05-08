import Filters from './Filters';

import logo from '../images/logo.png';

import '../styles/components/Header.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <img className='header__logo__img' src={logo} alt='Logo' />
        </div>
        <Filters
          filterMovie={props.filterMovie}
          handleFilterMovie={props.handleFilterMovie}
          handleFilterYear={props.handleFilterYear}
          uniqueYear={props.uniqueYear}
          actualiceOrderProperty={props.actualiceOrderProperty}
        />
      </div>
      <p className='header__results'>
        Showing: {props.sceneFilters.length} results
      </p>
    </div>
  );
};
export default Header;
