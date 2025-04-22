import { useState } from "react"

export default function ListVehicles() {
    const [vehicles, setVehicles] = useState(
        JSON.parse(localStorage.getItem("vehicles")) || []
    )
    console.log(vehicles)
    return(
        <div className="list-vehicles">
            <div>
            <h1>List of vehicles</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Colour</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>

                <tbody>
                {vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.name}</td>
              <td>{vehicle.model} </td>
              <td>{vehicle.colour}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.price}</td>
              <td><img className="image" src={vehicle.image} /></td>
            </tr>
          ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}