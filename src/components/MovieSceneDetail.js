import { Link } from 'react-router-dom';

const MovieSceneDetail = (props) => {
  let html = '';

  if (!props.sceneFound) {
    html = <h1>Está la cosa chunga, no hay nada aquí :o</h1>;
  } else {
    html = (
      <Link to={'/'}>
        <h1>Hola tusha ^^</h1>
        <h1>{props.sceneFound.id}</h1>
      </Link>
    );
  }

  return <>{html}</>;
};
export default MovieSceneDetail;
