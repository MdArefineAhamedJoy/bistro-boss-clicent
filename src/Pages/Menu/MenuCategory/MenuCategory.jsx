import React from "react";
import MenuItem from "../../Sheard/MenuItem/MenuItem";
import Cover from "../../Sheard/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MenuCategory = ({item,titles,  img,  title, w,  h, subTitle,  opacity,heading,  subHeading,}) => {
    
  return (
    <div className="pt-8">
      {heading && (
        <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
      )}
      {title && (
        <Cover
          w={w}
          h={h}
          subTitle={subTitle}
          title={title}
          opacity={opacity}
          imag={img}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1 w-[95%] mx-auto ">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="w-3/12 mx-auto mt-5">
        <Link to={`/order/${titles}`}>
          <button className="btn w-full text-black btn-outline duration-500 hover:text-white border-b-4 border-black">
            Oder Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
