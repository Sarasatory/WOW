import { Link } from 'react-router-dom';

const MovieSceneDetail = (props) => {
  return (
    <>
      <Link to={'/'}>
        <h1>Hola tusha ^^</h1>
        <h1>{props.sceneFound.id}</h1>
      </Link>
    </>
  );
};
export default MovieSceneDetail;
