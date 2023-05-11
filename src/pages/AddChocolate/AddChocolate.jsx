import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Swal from "sweetalert2";


const AddChocolate = () => {

    const handleAddChocolate =event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = {name,country,category,photo}
        console.log(newChocolate)



        // fetch('',{
        //     method:'POST',
        //     headers:{
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newChocolate)

        // })
        // .then(res =>res.json())
        // .then(data =>{
        //     console.log(data)
        // })

        fetch('http://localhost:5000/addChocolate',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newChocolate)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.acknowledged)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        })





        // fetch('',{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify(newChocolate)

        // })
        // .then(res =>res.json())
        // .then(data =>{
        //     console.log(data)
        // })
    }
    return (
        <div className="mt-24 ms-10">
           <div className="">
           <Link to='/' className="flex items-center  space-x-3  w-40 "><FaLongArrowAltLeft className="me-2"/> All Chocolates</Link>
           <hr className="w-9/12 mt-6" />
           </div>
           <div className="text-center mt-5">
           <h1 className="text-4xl font-extrabold">New Chocolates</h1>
           <p>Use the below form to create a new product</p>

         <form onSubmit={handleAddChocolate} >
         <div  className="mx-auto  w-9/12">
           <div className="form-control w-7/12 mx-auto">
                <label className="label  ">
                <span className="label-text">Name :</span>
                </label>
                <label className="input-group">
                <input type="text" placeholder="Hot Pink Chocolate" name='name' className="input input-bordered w-full " />
                
                </label>
            </div>
           <div className="form-control  w-7/12 mx-auto">
                <label className="label  ">
                <span className="label-text">Country :</span>
                </label>
                <label className="input-group">
                <input type="text" placeholder="Enter Country Name" name='country' className="input input-bordered w-full " />
                
                </label>
            </div>
           <div className="form-control  w-7/12 mx-auto">
                <label className="label  ">
                <span className="label-text">Category :</span>
                </label>
                <label className="input-group">
                <input type="text" placeholder="Enter Category" name="category" className="input input-bordered w-full " />
                
                </label>
            </div>
           <div className="form-control  w-7/12 mx-auto">
                <label className="label">
                <span className="label-text">Photo:</span>
                </label>
                <label className="input-group">
                <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered w-full " />
                
                </label>
            </div>
          
            <div>
                <input type="submit" value='Submit' className="ms-auto mt-5 bg-purple-900 w-1/2 text-white" />
            </div>
           </div>
         </form>
           </div>

        </div>
    );
};

export default AddChocolate;