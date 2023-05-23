import React from "react";

const MenuItem = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <img className="w-[118px] h-[104px] " style={{borderRadius:'0  200px  200px  200px'}} src={image} alt="" />
        <div className="ms-4 flex justify-between">
          <div className="">
            <h3 className="uppercase text-lg">{name} -----------</h3>
            <p>{recipe}</p>
          </div>
          <p className="text-yellow-600">${price}</p>
        </div>
      </div>
      
    </div>
  );
};

export default MenuItem;
