import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <section className="mb-28 bg-fixed text-white  featured-banner mx-auto ">
      <div className="pt-20">
        <SectionTitle
          heading={"our Featured items"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="md:flex  justify-center items-center pb-20  px-28">
        <dir>
          <img className="rounded" src={featured} alt="" />
        </dir>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline text-white mt-5 border-b-4 border-black">Oder Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
