import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import Filters from './Filters';
import MovieSceneList from './MovieSceneList';
// import MovieSceneDetail from './MovieSceneDetail';
import MovieSceneDetailIf from './MovieSceneDetailIf';
import MovieScene404 from './MovieScene404';
import Order from './Order';
import getApiData from '../services/getApiData';
import localStorage from '../services/localStorage';
import deleteDuplicates from '../services/deleteDuplicates';
import orderBy from '../services/orderBy';

function App() {
  //
  //
  // CONSTANTES DE ESTADO:
  const [dataScenes, setDataScenes] = useState(
    localStorage.get('dataScenesLS', [])
  );
  const [dataScenesOrdered, setDataScenesOrdered] = useState([]);
  // const [dataScenesOrdered, setDataScenesOrdered] = useState(
  //   localStorage.get('dataScenesLS', [])
  // );

  const [filterYear, setFilterYear] = useState('');
  const [filterMovie, setFilterMovie] = useState('');
  const [orderProperty, setOrderProperty] = useState('movie');

  //
  //
  // HOOKS:

  // Se llama al servicio "getApiData", que recoge los datos de la Api la primera vez que cargamos la página.
  // Allí mismo limpiamos estos datos, cogiendo solo la información que necesitamos.
  // Después guardamos esta información en la constante de estado "dataScenes"
  useEffect(() => {
    if (dataScenes.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataScenes(dataFromApi);
      });
    }
  }, []);

  // Se llama al servicio "localStorage", y mediante su función "set", guardamos los datos en localStorage.
  // Se hace uso de "useEffect" para que esta información guardada en localStorage se actualice cada vez que lo haga la variable de estado "dataScenes".
  useEffect(() => {
    localStorage.set('dataScenesLS', dataScenes);
  }, [dataScenes]);

  useEffect(() => {
    handleOrderProperty();
  }, [orderProperty]);

  //
  //
  // FUNCIONES MANEJADORAS:

  // Filtros:
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const actualiceOrderProperty = (value) => {
    setOrderProperty(value);
  };

  // Orden:
  const handleOrderProperty = () => {
    setDataScenesOrdered(orderBy(dataScenes, orderProperty));
  };

  //
  //
  // FUNCIONES GENERALES:

  // Obtener un array con los años de las escenas devueltas.
  const yearsList = dataScenes.map((item) => item.year);

  // Llamo al servicio "deleteDuplicates" para que me devuelva un array con los datos sin repetir.
  const uniqueYear = deleteDuplicates(yearsList);

  // Ordeno el array "uniqueYear" por orden ascendente.
  uniqueYear.sort((a, b) => a - b);

  //
  //
  // FILTRADO:

  // Filtro por título.
  const sceneFilters = (
    dataScenesOrdered.length === 0 ? dataScenes : dataScenesOrdered
  )
    .filter((item) => {
      return item.movie.toLowerCase().includes(filterMovie.toLocaleLowerCase());
    })
    // Filtro por año.
    .filter((item) => {
      if (filterYear === '' || filterYear === '0') {
        return true;
      } else {
        return item.year.toString() === filterYear;
      }
    });

  // Rutas dinámicas.
  // En "pathname" metemos la información de la url.
  const { pathname } = useLocation();

  // Con "matchPath" obtenemos o un "null" o un objeto con bastante información, dependiendo de si la ruta actual coincide o no con la ruta dinámica.
  const dataPath = matchPath('/scene/:sceneId', pathname);

  // Metemos en "sceneId" o el "id" sacado de la ruta actual, o un "null".
  const sceneId = dataPath !== null ? dataPath.params.sceneId : null;

  // Buscamos la escena "item" cuyo id "item.id" coincida con el id de la url "sceneId", para recoger esa escena solamente y pasarla por props a la vista de detalle.
  const sceneFound = dataScenes.find((item) => item.id.toString() === sceneId);

  return (
    <>
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <h1 className='title--big'>Directorio de scenas Wow</h1>
                <Filters
                  filterMovie={filterMovie}
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  uniqueYear={uniqueYear}
                />
                <Order actualiceOrderProperty={actualiceOrderProperty} />
                <h2>Resultados: {sceneFilters.length}</h2>
                <MovieSceneList sceneFilters={sceneFilters} />
              </>
            }
          />
          <Route
            path='/scene/:sceneId'
            element={<MovieSceneDetailIf sceneFound={sceneFound} />}
          />

          <Route path='*' element={<MovieScene404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
