import ListVehicles from "./components/ListVehicles"
import { Link } from "react-router"
import Customer from "./components/customer"
import Jokes from "./components/jokes"
function App() {
  

  return (
    <>
    
<ListVehicles />
<div className="buttons">
<Link  to={"/transfer"} >
    <button>
      Sell
    </button>
    </Link>

    <Link  to={"/create"} >
    <button>
      Create
    </button>
    </Link>

    <Link  to={"/sold"} >
    <button>
      Display sold vehicles
    </button>
    </Link>



    </div>

    <Customer/>
    <Jokes/>
    </>
  )
}

export default App
