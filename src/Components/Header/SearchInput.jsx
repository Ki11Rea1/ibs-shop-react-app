import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSearchedItems } from "../../ReduxStore/ItemsSlice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchQuerry = useSelector((state) => state.products.search);
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(setSearchedItems());
  };
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
