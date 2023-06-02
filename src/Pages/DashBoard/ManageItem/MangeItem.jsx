import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MangeItem = () => {
  const [menuItem , , refetch] = useMenu();
 
  const [axiosSecure] = useAxiosSecure()

  const handelDelete = (item) => {
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
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    
                    refetch()
                }
            })
        }
      })
  }
  return (
    <div className="w-full">
      <SectionTitle
        heading="manage All Item"
        subHeading="Hurry Up"
      ></SectionTitle>
      <div className=" w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th> Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          {menuItem.map((item , index) => (
            <tbody key={item._id}>
              {/* row 1 */}
              <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="mask mask-squircle w-32 h-24">
                      <img
                        src={item?.image}
                        alt=""
                      />
                    </div>
                </td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <td>
                  <button className="btn btn-circle btn-outline">
                    <FaEdit className="w-5 h-5"></FaEdit>
                  </button>
                </td>
                <td>
                  <button onClick={()=> handelDelete(item)} className="btn btn-circle btn-outline">
                    <FaTrashAlt className="w-5 h-5"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MangeItem;
