import orderBy from './orderBy';

const getApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const dataScenesPrev = data.map((item, index) => {
        return {
          id: index,
          movie: item.movie,
          director: item.director,
          year: item.year,
          character: item.character,
          poster: item.poster,
          audio: item.audio,
          full_line: item.full_line,
          timestamp: item.timestamp,
        };
      });
      const dataScenes = orderBy(dataScenesPrev, 'movie');
      return dataScenes;
    });
};

export default getApiData;
