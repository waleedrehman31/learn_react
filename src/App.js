import { useState } from "react";
import "./App.css";

import SearchBar from "./SearchBar";
import Additem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {
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

  const filterData = (data) => {
    const filteredData = [];
    if (!filters.name) {
      return data;
    }
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
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
