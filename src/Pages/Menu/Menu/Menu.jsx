import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Sheard/Cover/Cover";
import menu from "../../../assets/menu/banner3.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Menu = () => {
  const [menuItem] = useMenu();
  const offerItem = menuItem.filter((itme) => itme.category === "offered");
  const dessert = menuItem.filter((itme) => itme.category === "dessert");
  const soups = menuItem.filter((itme) => itme.category === "soup");
  const salad = menuItem.filter((itme) => itme.category === "salad");
  const pizza = menuItem.filter((itme) => itme.category === "pizza");

  console.log(soups);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        w={"w-full"}
        h={"600px"}
        subTitle="Would You Like To Your Dish"
        title={"OUR MENU"}
        opacity={"10"}
        imag={menu}
      ></Cover>

      {/* offerItem */}
      
      <div >
      <div className="mt-10">
      <SectionTitle heading={'TODAYS OFFER'} subHeading={"Don't miss"}></SectionTitle>
      </div>
      <MenuCategory item={offerItem}></MenuCategory>
      </div>
      {/* Dessert itme */}
  
      <div className="my-10">
        <Cover
          w={"w-full"}
          h={"600px"}
          subTitle="Would You Like To Your Dish"
          title={"OUR MENU"}
          opacity={"10"}
          imag={dessertImg}
        ></Cover>
        <MenuCategory item={dessert}></MenuCategory>
      </div>
      <div className="my-10">
        <Cover
          w={"w-full"}
          h={"600px"}
          subTitle="Would You Like To Your Dish"
          title={"OUR MENU"}
          opacity={"10"}
          imag={saladImg}
        ></Cover>
        <MenuCategory item={salad}></MenuCategory>
      </div>
      <div className="my-10">
        <Cover
          w={"w-full"}
          h={"600px"}
          subTitle="Would You Like To Your Dish"
          title={"OUR MENU"}
          opacity={"10"}
          imag={pizzaImg}
        ></Cover>
        <MenuCategory item={pizza}></MenuCategory>
      </div>
      <div className="my-10">
        <Cover
          w={"w-full"}
          h={"600px"}
          subTitle="Would You Like To Your Dish"
          title={"OUR MENU"}
          opacity={"10"}
          imag={soupsImg}
        ></Cover>
        <MenuCategory item={soups}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
