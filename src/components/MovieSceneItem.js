import { Link } from 'react-router-dom';
import '../styles/components/movieSceneItem.scss';

const MovieSceneItem = (props) => {
  return (
    <div className='card'>
      <Link to={`/scene/${props.movieScene.id}`}>
        <img
          className='card__img'
          src={props.movieScene.poster}
          alt={props.movieScene.movie}
        />
        <h2 className='card__title'>ID: {props.movieScene.id}</h2>
        <h2 className='card__title'>
          {props.movieScene.movie} - {props.movieScene.year}
        </h2>
        <p className='card__line'>{props.movieScene.full_line}</p>
        <smal className='card__timestamp'>"{props.movieScene.timestamp}"</smal>
        <p className='card__director'>{props.movieScene.director}</p>
      </Link>
    </div>
  );
};

export default MovieSceneItem;
