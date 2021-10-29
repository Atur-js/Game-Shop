import React from 'react';
import Hero from "./Hero";
import Categories from "./Categories";
import TopGames from "./TopGames";
import Footer from "./Footer";



const FirstPage = () => {
    return ( 
        <React.Fragment>
            <Hero/>
            <Categories/>
            <TopGames/>
            <Footer/>
        </React.Fragment>
    );
}

export default FirstPage;