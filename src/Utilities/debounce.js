import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchedItems } from "../ReduxStore/ItemsSlice";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      dispatch(setSearchedItems());
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
