import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../ContactsFilterInitialSlice';
import { selectFilter } from '../ContactsSelectors';
import css from './Filter.module.css';

const Filter = ({ id }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterChange = evt =>{
    const newFilter = evt.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <div className={css.filter}>
      <h2 className={css.filterContact}>Contacts</h2>
      <p className={css.filterParagraf}>Find contacts by name</p>
      <input className={css.filterInput} type="text" name="filter" onChange={filterChange} value={filter} />
    </div>
  );
};
export default Filter;