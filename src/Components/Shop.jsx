import React, { useState } from 'react';
import { ProductContext } from './ProductContext';
import NavBar from "./NavBar";
import AllItems from "./AllItems";
import NavLeft from "./NavLeft";
import Footer from './Footer'

export default function Shop(){
    const [category, setCategory] = useState('All');

    return (
        <ProductContext.Provider value={{ category, setCategory }}>
        <div className="shop">
            <div className="game">
                <NavBar />
            </div>
            
            <div className="actualShop">
                <NavLeft />
                <div className="cards">
                    <AllItems />
                </div>

            </div>
            <Footer></Footer>
        </div>
            </ProductContext.Provider>
    );
}