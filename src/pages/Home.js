import React from 'react';
import Navbar from './../components/Navbar/Navbar';
import Intro from './../components/Intro/Intro';
import WhyUs from './../components/WhyUs/WhyUs';
import LatestArticles from './../components/LatestArticles/LatestArticles';
import Footer from './../components/Footer/Footer';

const Home = () => {
    return(
        <>
            <Navbar />
            <Intro />
            <WhyUs />
            <LatestArticles />
            <Footer />
        </>
    );
};

export default Home;