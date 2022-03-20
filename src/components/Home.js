import React from 'react';
import HandleState from './HandleState';
import Header from './Header';
import HomeData from './HomeData';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <HomeData/>
        </div>
    );
};

export default Home;