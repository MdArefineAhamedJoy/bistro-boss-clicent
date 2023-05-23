import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ServiceDetails from '../Service/ServiceDetails';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <ServiceDetails></ServiceDetails>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;