import Item from "./Item/Item";
import "./Catalog.css";
import { useEffect, useState } from "react";
import { getCatalogData } from "../../../API/getCatalogData";

const Catalog = (props) => {
  let [items, setItems] = useState([]);

  const fetchItems = async () => {
    const responce = await getCatalogData();
    setItems(responce);
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="catalog">
      {items.map((i) => (
        <Item item={i} key={i.id} />
      ))}
    </div>
  );
};

export default Catalog;
