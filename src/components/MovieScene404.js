import { Link } from 'react-router-dom';

import '../styles/components/MovieScene404.scss';

const MovieScene404 = (props) => {
  return (
    <section className='page404'>
      <Link to={'/'}>
        <div className='page404__container'>
          <span className='page404__container__letter-w'>
            W<span className='page404__container__letter-w__l4tl'>4</span>
          </span>
          <span className='page404__container__letter-o'>O</span>
          <span className='page404__container__letter-w'>
            W<span className='page404__container__letter-w__l4br'>4</span>
          </span>
        </div>
        <p className='page404__container__span-text'>
          This page does not exist yet!
        </p>
      </Link>
    </section>
  );
};
export default MovieScene404;
