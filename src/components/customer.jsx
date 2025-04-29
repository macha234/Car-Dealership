import { useState, useEffect } from 'react'

// [{
//     "id": 1,
//     "firstName": "Emily",
//     "lastName": "Johnson",
//     "maidenName": "Smith",
//     "age": 28,
//     "gender": "female",
//     "email": "emily.johnson@x.dummyjson.com",
//     "phone": "+81 965-431-3024",
//     "username": "emilys",
//     "password": "emilyspass",
//     "birthDate": "1996-5-30",
//     "image": "https://dummyjson.com/icon/emilys/128",
//     "bloodGroup": "O-",
//     "height": 193.24,
//     "weight": 63.16,
//     "eyeColor": "Green",
//     "hair": {
//       "color": "Brown",
//       "type": "Curly"
//     },
// ]

function Customer() {
    const [users, setUsers] = useState([])



    async function fetchUser() {

        const data = await fetch("https://dummyjson.com/users")

        const response = await data.json()


        setUsers(response.users)
    }


    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <>
          <h1>Our Customers</h1>
          <div className='customers'>


    {users.map(user => (
        <>

            <ul>
                <li>Name: {user.firstName}</li>
                <li>Gender: {user.gender}</li>
                <li>Age: {user.age}</li>
                <li>
                    Image:    <img src={user.image} />
                </li>
            </ul>


        </>
    ))}



            </div>        </>
    )
}

export default Customer
