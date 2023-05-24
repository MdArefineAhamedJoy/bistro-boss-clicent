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
        <div className="card-body">
          <h2 className="font-bold text-xl text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary ">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
