import React from "react";

function ItemsDisplay(props) {
  const showItems = (item) => {
    return (
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
      </tr>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table tabel-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Brand</th>
            </tr>
          </thead>
          <tbody>{props.items.map(showItems)}</tbody>
        </table>
      </div>
    </div>
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
