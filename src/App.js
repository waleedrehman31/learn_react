import { useState } from "react";
import "./App.css";

import SearchBar from "./SearchBar";
import Additem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  // eslint-disable-next-line
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <Additem setItem={addItemData} />
      </div>

      {/* <p>Name: {"name" in filters ? filters["name"] : "No Data To Display"}</p>
      <p>
        Max Price:{" "}
        {"price" in filters ? filters["price"] : "No Data To Display"}
      </p>
      <p>Type: {"type" in filters ? filters["type"] : "No Data To Display"}</p>
      <p>
        Brand: {"brand" in filters ? filters["brand"] : "No Data To Display"}
      </p> */}
    </div>
  );
}

export default App;
