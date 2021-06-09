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
    <div className="App">
      <h1>Hello</h1>
      <SearchBar updateSearchParams={updateFilters} />
      <ItemsDisplay items={data["items"]} />
      <Additem setItem={addItemData} />

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
