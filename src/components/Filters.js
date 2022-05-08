import FilterYear from './FilterYear';
import FilterMovie from './FilterMovie';
import Order from './Order';

import '../styles/components/Filters.scss';

const Filters = (props) => {
  return (
    <section className='filters'>
      <form className='filters__form'>
        <FilterMovie
          filterMovie={props.filterMovie}
          handleFilterMovie={props.handleFilterMovie}
        />
        <div className='filters__form__bottom'>
          <FilterYear
            uniqueYear={props.uniqueYear}
            handleFilterYear={props.handleFilterYear}
          />

          <Order actualiceOrderProperty={props.actualiceOrderProperty} />
        </div>
      </form>
    </section>
  );
};
export default Filters;
