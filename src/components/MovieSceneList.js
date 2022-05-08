import MovieSceneItem from './MovieSceneItem';

import '../styles/components/MovieSceneList.scss';

const MovieSceneList = (props) => {
  let movSceItem = '';

  if (props.sceneFilters.length === 0) {
    movSceItem = (
      <li className='movie-scene-lost'>
        <div className='movie-scene-lost__container'>
          <h1 className='movie-scene-lost__container__title'>W...hoops!</h1>
          <p className='movie-scene-lost__container__subtitle'>
            There are no results for this search
          </p>
        </div>
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
    <section className='movie-scene-list'>
      <ul className='movie-scene-list__ul'>{movSceItem}</ul>
    </section>
  );
};

export default MovieSceneList;
