
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from "react";
import { FaPlus } from 'react-icons/fa';
import ChocolateCard from './pages/ChocolateCard/ChocolateCard';


function App() {
 
const [bgDark ,setDark] = useState(false)
const [bgWhite, setWhite] = useState(false)

const handleBgDark = () =>{
  setDark(true)
  setWhite(false)
}
const handleBgWhite= () =>{
  setDark(false)
  setWhite(true)
}

const loaderChocolate = useLoaderData()
console.log(loaderChocolate)


  return (
    <div className={bgDark? 'bg-black':'bg-white'} >
      {bgWhite ?
        <button onClick={handleBgDark}>Dark</button> :
        <button onClick={handleBgWhite} className="text-yellow-100">white</button>
      }
       <h1 className='text-6xl text-purple-900 text-center mt-9'>Chocolate Management System</h1>

<Link to='/addChocolate' className='border ms-20 flex items-center w-40 ' ><FaPlus className="mx-2 "/> New Chocolate </Link>

<div className="overflow-x-auto mt-20 mx-auto w-9/12">
  <table className="table mx-auto  ps-20 w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Country/Factory</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    {
  loaderChocolate.map(chocolate =><ChocolateCard
    
    key={chocolate._id}
    chocolate={chocolate}
  ></ChocolateCard>)
}
  </table>
</div>


    </div>
  )
}

export default App
