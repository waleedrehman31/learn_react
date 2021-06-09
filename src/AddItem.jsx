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
    <div>
      <h2>Add a item</h2>
      <form action="">
        <label htmlFor="name-field">Name:</label>
        <input
          type="text"
          id="name-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="price-field"> Price:</label>
        <input
          type="number"
          id="price-field"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="type-field">Type:</label>
        <input
          type="text"
          id="type-field"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <label htmlFor="brand-field">Brand:</label>
        <input
          type="text"
          id="brand-field"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <button type="button" onClick={AddItemButtonPressed}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;
