import { Link } from 'react-router-dom';

const MovieScene404 = (props) => {
  return (
    <>
      <Link to={'/'}>
        <h1>404 ^^</h1>
        <h1>Pos eso</h1>
        {/* <h1>{props.sceneFound4.id}</h1> */}
      </Link>
    </>
  );
};
export default MovieScene404;
