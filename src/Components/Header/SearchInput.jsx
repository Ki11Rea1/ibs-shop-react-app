import { debouncedSearch } from "../../Utilities/Search";

const SearchInput = () => {
  return (
    <input
      className="search-field__search-input"
      placeholder="Search products"
      onChange={debouncedSearch}
    />
  );
};

export default SearchInput;
