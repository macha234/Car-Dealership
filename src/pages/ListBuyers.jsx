export default function ListBuyers() {
    return(
        <div className="list-vehicles">
            <h1>List of buyers</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Nationality</th>
                        <th>Gender</th>
                        <th>Bought</th>
                        <th>vehicle</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Jone Doe</td>
                        <td>22</td>
                        <td>Kenyan</td>
                        <td>Male</td>
                        <td>4/9/2025</td>
                        <td>
                            <ul>
                            <li>tesla</li>
                            <li>Model S </li>
                            <li>Red</li>
                            <li>Tesla</li>
                            <li>$96,630</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}