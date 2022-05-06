const Order = (props) => {
  const handleChange = (ev) => {
    props.actualiceOrderProperty(ev.target.value);
  };

  return (
    <form>
      <select name='orderSelect' id='orderSelect' onChange={handleChange}>
        <option value='movie'>Título</option>
        <option value='year'>Año</option>
        <option value='director'>Directore</option>
        <option value='full_line'>Frase</option>
        <option value='timestamp'>Momento en que dice "Wow"</option>
      </select>
    </form>
  );
};

export default Order;
