import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../ReduxStore/ItemsSlice";
import useDebounce from "../../Utilities/debounce";

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchQuerry = useSelector((state) => state.products.search);
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  useDebounce(searchQuerry, 1000);
  return (
    <input
      value={searchQuerry}
      className="search-field__search-input"
      placeholder="Search products"
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
