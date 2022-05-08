import { Link } from 'react-router-dom';
import MovieScene404 from './MovieScene404';
import MovieSceneDetail from './MovieSceneDetail';

const MovieSceneDetailIf = (props) => {
  let html = '';

  if (!props.sceneFound) {
    html = (
      <Link to={'/'}>
        <MovieScene404 />
      </Link>
    );
  } else {
    html = <MovieSceneDetail sceneFound={props.sceneFound} />;
  }

  return <>{html}</>;
};
export default MovieSceneDetailIf;
