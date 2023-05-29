import React from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import { useContext } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
const FoodCard = ({ item }) => {
  const { name, price, image, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handelAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      return fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // items data refetching
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your food add on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="relative">
          <img src={image} alt="food" />
        </figure>
        <p className="bg-slate-800 absolute top-4 right-4 px-3 py-2 text-white">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="font-bold text-xl ">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions ">
            <button
              onClick={() => handelAddToCart(item)}
              className="btn btn-outline text-orange-500 hover:text-orange-700 bg-slate-100  mt-5 bcart-b-4 bcart-orange-700 bcart-0"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
