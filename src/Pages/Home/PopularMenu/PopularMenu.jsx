import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Sheard/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menuItem, setMenuItem] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenuItem(popularItems);
      });
  }, []);
  return (
    <section className="md:w-[95%] mt-24 mb-28 mx-auto">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {menuItem.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="w-3/12 mx-auto">
        <button className="btn bg-white text-black  w-full border-b-4 border-black ">View Full  Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
