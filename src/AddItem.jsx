import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const AddItemButtonPressed = () => {
    props.setItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add a item</h2>
      </div>

      <div className="row">
        <label className="mt-1" htmlFor="name-field">
          Name:
        </label>
        <input
          className="form-control"
          type="text"
          id="name-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="mt-1" htmlFor="price-field">
          {" "}
          Price:
        </label>
        <input
          className="form-control"
          type="number"
          id="price-field"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label className="mt-1" htmlFor="type-field">
          Type:
        </label>
        <input
          className="form-control"
          type="text"
          id="type-field"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label className="mt-1" htmlFor="brand-field">
          Brand:
        </label>
        <input
          className="form-control"
          type="text"
          id="brand-field"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>

      <div className="row mt-3">
        <button
          className="btn btn-primary"
          type="button"
          onClick={AddItemButtonPressed}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
