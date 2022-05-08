import '../styles/components/Order.scss';

const Order = (props) => {
  const handleChange = (ev) => {
    props.actualiceOrderProperty(ev.target.value);
  };

  return (
    <div className='order'>
      <select
        className='filter-movie filter-select'
        name='orderSelect'
        id='orderSelect'
        onChange={handleChange}
      >
        <option value='movie' disabled='disabled' selected>
          Filter for:
        </option>
        <option value='movie'>Movie</option>
        <option value='year'>Year</option>
        <option value='director'>Director</option>
        <option value='full_line'>Line</option>
        <option value='timestamp'>Timestamp</option>
      </select>
    </div>
  );
};

export default Order;
