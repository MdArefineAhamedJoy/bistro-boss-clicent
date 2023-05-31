import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: "PATCH" 
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${user.name} is an admin now`,
                showConfirmButton: false,
                timer: 1500
              })
            refetch()
        }
    })
  }

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | ALL Users</title>
      </Helmet>
      <div className="my-4">
        <h3 className="font-semibold text-3xl">Total Users : {users.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email </th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={()=>handleMakeAdmin(user)} className="btn hover:bg-yellow-500 duration-300 btn-circle btn-outline">
                      <FaUserShield className="w-4 h-4" />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={handleDelete}
                    className="btn hover:bg-red-700 duration-300 btn-circle btn-outline"
                  >
                    <FaTrashAlt className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
