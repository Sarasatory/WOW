import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/logo.png';

import '../styles/components/HeaderLittle.scss';

const HeaderLittle = (props) => {
  return (
    <Link to={'/'} title='Volver'>
      <div className='header-little'>
        <div className='back'>
          <FontAwesomeIcon icon={faArrowLeftLong} className='back__icon' />
          <img className='back__img' src={logo} alt='Logo' />
        </div>
      </div>
    </Link>
  );
};
export default HeaderLittle;
