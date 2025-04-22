import { useState } from "react"
import { Link } from "react-router"



export default function SoldVehicles() {

    const [vehicles, setVehicles] = useState(
            JSON.parse(localStorage.getItem("sold")) || []
        )
        console.log(vehicles)
    return(
        <div className="list-vehicles">
            <div>
        <h1>List of Sold Vehicles</h1>

        <table>
            <thead>
                <tr>
                    <th>Owner Name</th>
                    <th>Age</th>
                    <th>Contact</th>
                    <th>Vehicle</th>
                    <th>Image</th>
                </tr>
            </thead>

            <tbody>
            {vehicles.map((vehicle, index) => (
        <tr key={index}>
          <td>{vehicle.ownerName}</td>
          <td>{vehicle.age} </td>
          <td>{vehicle.contact}</td>
          <td>{vehicle.vehicle}</td>
          <td><img src={vehicle.image} /></td>
        </tr>
      ))}
            </tbody>
        </table>
        <Link className="link" to={"/"}>
        Back to homepage
        </Link>
        </div>
        
    </div>
    )
}