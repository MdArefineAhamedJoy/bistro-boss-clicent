import React from "react";

const FoodCard = ({item} ) => {
  const { name, price, image, recipe } = item;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="relative">
          <img
            src={image}
            alt="food"
          />
        </figure>
        <p className="bg-slate-800 absolute top-4 right-4 px-3 py-2 text-white">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="font-bold text-xl ">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions ">
          <button className="btn btn-outline text-orange-500 hover:text-orange-700 bg-slate-100  mt-5 border-b-4 border-orange-700 border-0">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
