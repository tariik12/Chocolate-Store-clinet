
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChocolateCard = ({chocolate}) => {

    const handleDelete = _id =>{
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/addChocolate/${_id}`,{
                    method:"DELETE"
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data)
                  if(data.acknowledged){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                  }
                })

            }
          })
    }

    const {_id,name,country,category,photo} =chocolate;
    const handleUpdate = _id =>{
        console.log(_id)
    }
    return (
        <tbody>
        {/* row 1 */}
        <tr>
          <th>
          <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={photo} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
          </th>
          <td>
            <div className="flex items-center space-x-3">        
                <div className="font-bold">{name}</div>
            </div>
          </td>
          <td>
         {country}
          </td>
          <td>{category}</td>
          <th>
             <div className="flex items-center space-x-3">   
             <Link onClick={handleUpdate} to={`updateChocolate/${_id}`}><FaPencilAlt /> </Link> 
             <FaTimes onClick={() =>handleDelete(_id)}/>        
            </div>
          </th>
        </tr>   
      </tbody>

    );
};

export default ChocolateCard;