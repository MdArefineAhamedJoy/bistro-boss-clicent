import React, { useState } from "react";
import Cover from "../../Sheard/Cover/Cover";
import coverImag from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const catagories = ["salad", "pizza", "soups", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = catagories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(tabIndex, category);
  const [menuItem] = useMenu();

  const offerItem = menuItem.filter((itme) => itme.category === "offered");
  const dessert = menuItem.filter((itme) => itme.category === "dessert");
  const soups = menuItem.filter((itme) => itme.category === "soup");
  const salad = menuItem.filter((itme) => itme.category === "salad");
  const pizza = menuItem.filter((itme) => itme.category === "pizza");
  const drink = menuItem.filter((itme) => itme.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        imag={coverImag}
        h={"700px"}
        w={"full"}
        title={"OUR SHOP"}
        opacity={"10"}
        subTitle={"would You Like Too Dish"}
      ></Cover>
      <Tabs
        className="w-[95%] mx-auto"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drink}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
