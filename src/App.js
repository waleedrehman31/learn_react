import { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./SearchBar";
import Additem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
// import Test from "./Class";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  // const [showTest, setShowTest] = useState(true);

  // useEffect(() => {
  //   console.log("Use Effect");
  //   return () => {
  //     console.log("Clean Up");
  //   };
  // }, [data, filters]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemData = (item) => {
    let items = data["items"];

    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOption)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
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
      {/* {showTest ? <Test destroy={setShowTest} /> : null} */}
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
