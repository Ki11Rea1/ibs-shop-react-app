import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../ReduxStore/ItemsSlice";
import { debounce } from "../../Utilities/debounce";

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchQuerry = useSelector((state) => state.products.search);
  const handleSearch = (value) => debounce(dispatch(setSearch(value)), 2000);

  return (
    <input
      value={searchQuerry}
      className="search-field__search-input"
      placeholder="Search products"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchInput;
