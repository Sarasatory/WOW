import { Link } from 'react-router-dom';
import MovieSceneDetail from './MovieSceneDetail';

const MovieSceneDetailIf = (props) => {
  let html = '';

  if (!props.sceneFound) {
    html = (
      <Link to={'/'}>
        <h1>Está la cosa chunga, no hay nada aquí :o</h1>
      </Link>
    );
  } else {
    html = <MovieSceneDetail sceneFound={props.sceneFound} />;
  }

  return <>{html}</>;
};
export default MovieSceneDetailIf;
