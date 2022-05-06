import FilterYear from './FilterYear';
import FilterMovie from './FilterMovie';

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterMovie
          filterMovie={props.filterMovie}
          handleFilterMovie={props.handleFilterMovie}
        />

        <FilterYear
          uniqueYear={props.uniqueYear}
          handleFilterYear={props.handleFilterYear}
        />
      </form>
    </section>
  );
};
export default Filters;

// function Filters(props) {
//   return (
//     <section className='col2'>
//       <form>
//         <FilterCountry handleFilterCountry={props.handleFilterCountry} />
//         <FilterCity
//           cities={props.cities}
//           handleFilterCity={props.handleFilterCity}
//         />
//         {/*<FilterName />*/}
//       </form>
//     </section>
//   );
// }
