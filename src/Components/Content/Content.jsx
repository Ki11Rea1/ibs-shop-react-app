import { useEffect, useState } from "react";
import { getCatalogData } from "../../API/getCatalogData.js";
import Catalog from "./Catalog/Catalog";

const Content = (props) => {
  const [items, setItems] = useState();

  const fetchItems = async () => {
    const responce = await getCatalogData();
    setItems(responce);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Catalog items={items} />
    </div>
  );
};

export default Content;
