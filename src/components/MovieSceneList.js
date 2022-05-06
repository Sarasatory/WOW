import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = (props) => {
  let movSceItem = '';

  if (props.sceneFilters.length === 0) {
    movSceItem = (
      <li>
        <h1>Hola</h1>
        <h2>Nada que ver</h2>
        <p>Haz esto todo lo complejo que quieras</p>
      </li>
    );
  } else {
    movSceItem = props.sceneFilters.map((item) => {
      return (
        <li key={item.id}>
          <MovieSceneItem movieScene={item} />
        </li>
      );
    });
  }

  return (
    <section>
      <ul>{movSceItem}</ul>
    </section>
  );
};

export default MovieSceneList;
