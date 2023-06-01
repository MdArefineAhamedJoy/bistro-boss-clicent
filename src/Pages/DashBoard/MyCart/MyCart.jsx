import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart , refetch] = useCart();
  const totalPrice = cart.reduce(
    (totalPrice, currentPrice) => currentPrice.price + totalPrice,
    0
  );

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Delete Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
              refetch()
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | MyCart</title>
      </Helmet>
      <div>
        <div className="uppercase grid grid-cols-3 gap-10 w-full mb-10">
          <h3 className="text-3xl">Total Oder {cart.length}</h3>
          <h3 className="text-3xl">Total Price {totalPrice}</h3>
          <button className="btn btn-accent">Pay</button>
        </div>
        {/* 00000000000000000000000000000000000000000000000000000000 */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr>
                  <th key={item._id}>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handelDelete(item._id)}
                      className="btn btn-ghost btn-circle bg-red-900 text-white"
                    >
                      <FaTrashAlt className="h-5 w-5"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
