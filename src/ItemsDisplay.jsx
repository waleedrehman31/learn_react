import React from "react";
import NavBar from "./NavBar";

function ItemsDisplay({ items, deleteItem }) {
  const showItems = (item) => {
    return (
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
        <td>
          <button
            className="btn btn-danger  btn-sm"
            onClick={() => deleteItem(item)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <table className="table tabel-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
                <th scope="col">Brand</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>{items.map(showItems)}</tbody>
          </table>
        </div>
      </div>
    </>
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
