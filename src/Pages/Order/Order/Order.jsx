import React, { useState } from "react";
import Cover from "../../Sheard/Cover/Cover";
import coverImag from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menuItem] = useMenu();
  const offerItem = menuItem.filter((itme) => itme.category === "offered");
  const dessert = menuItem.filter((itme) => itme.category === "dessert");
  const soups = menuItem.filter((itme) => itme.category === "soup");
  const salad = menuItem.filter((itme) => itme.category === "salad");
  const pizza = menuItem.filter((itme) => itme.category === "pizza");
  const drink = menuItem.filter((itme) => itme.category === "drinks");
  return (
    <div>
      <Cover
        imag={coverImag}
        h={"700px"}
        w={"full"}
        title={"OUR SHOP"}
        opacity={"10"}
        subTitle={"would You Like Too Dish"}
      ></Cover>
      <Tabs className='w-[95%] mx-auto' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>desserts</Tab>
          <Tab>Drinks</Tab>
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
