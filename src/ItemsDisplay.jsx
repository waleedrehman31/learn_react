import React from "react";

function ItemsDisplay(props) {
  const showItems = (item) => {
    return (
      <div>
        <h1>Items</h1>
        <p>Id: {item.id}</p>
        <p>Name: {item.name}</p>
        <p>Price: {item.price}</p>
        <p>Type: {item.type}</p>
        <p>Brand: {item.brand}</p>
      </div>
    );
  };
  return (
    <div>{props.items.map(showItems)}</div>
    // Second way
    //  <div>
    //   {props.items.map((item) => {
    //     return (
    //       <div>
    //         <h1>Items</h1>
    //         <p>Id: {item.id}</p>
    //         <p>Name: {item.name}</p>
    //         <p>Price: {item.price}</p>
    //         <p>Type: {item.type}</p>
    //         <p>Brand: {item.brand}</p>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default ItemsDisplay;
