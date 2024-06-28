import { useAppContext } from './Context';

function SearchForm() {
  const { setSearchValue } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    if (!search) return;
    setSearchValue(search);
  };
  return (
    <form action='submit' className='search-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='search'
        placeholder='cat'
        className='form-input search-input'
      />
      <button type='submit' className='btn'>
        Search
      </button>
    </form>
  );
}
export default SearchForm;
