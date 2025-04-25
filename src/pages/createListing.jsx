import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateListing() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [colour, setColour] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("")

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const listingData = {
      id:Math.random()*999,
      name,
      model,
      colour,
      brand,
      price,
      image,
    };

    const storedVehicles = localStorage.getItem("vehicles");
    let vehicles = [];

    if (storedVehicles) {
      vehicles = JSON.parse(storedVehicles);
      if (!Array.isArray(vehicles)) {
        vehicles = [];
      }
    }

    vehicles.push(listingData);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
    navigate("/");
  };

  return (
    <div className="form">
      <form onSubmit={onSubmitHandler}>
        <h1>Create a Listing</h1>

        <div className="item">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>

        <div className="item">
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          onChange={(e) => setImage(e.target.value)}
          required
        />
        </div>

        <div className="item">
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          onChange={(e) => setModel(e.target.value)}
          required
        />
        </div>

        <div className="item">
        <label htmlFor="colour">Colour:</label>
        <input
          type="text"
          id="colour"
          onChange={(e) => setColour(e.target.value)}
          required
        />
        </div>

        <div className="item">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        </div>
       
        <div className="item">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </div>

        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}