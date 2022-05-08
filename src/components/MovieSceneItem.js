import { Link } from 'react-router-dom';

import '../styles/components/MovieSceneItem.scss';

const MovieSceneItem = (props) => {
  return (
    <article className='card'>
      <Link to={`/scene/${props.movieScene.id}`}>
        <img
          className='card__img'
          src={props.movieScene.poster}
          alt={props.movieScene.movie}
        />

        <h2 className='card__title'>{props.movieScene.movie}</h2>
        <p className='card__director'>{props.movieScene.director}</p>
        <p className='card__year'>{props.movieScene.year}</p>
        <p className='card__line'>{props.movieScene.full_line}</p>
        <span className='card__timestamp'>"{props.movieScene.timestamp}"</span>
      </Link>
    </article>
  );
};

export default MovieSceneItem;
