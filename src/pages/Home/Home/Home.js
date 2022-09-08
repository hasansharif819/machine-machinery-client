import React from 'react';
import Banner from '../Banner/Banner';
import BannerProducts from '../BannerProducts/BannerProducts';
import Card from '../Card/Card';
import Contact from '../Contact/Contact';
import Reviews from '../Review/Reviews';
import Slider from '../Slider/Slider';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Slider />
            <BannerProducts />
            <Summary />
            <Reviews />
            <Banner />
            <Contact />
            {/* <Card /> */}
        </div>
    );
};

export default Home;