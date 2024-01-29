import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal"; 
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

let url = 'https://api.escuelajs.co/api/v1/products/?&limit=10';
export default function AllItems(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product for modal
    const [isModalOpen, setIsModalOpen] = useState(false); // State to track whether the modal is open or closed
    const [cart, setCart] = useState([]);    
    const { category } = useContext(ProductContext);

    const fetchData = async () => {
        try {
            const response = await fetch(url, {mode:'cors'});
            const result = await response.json();
            console.log(result);
            setLoading(false);
            result.splice(-12);
            setProducts(result);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log(cart);
    }

    // Filter products based on category
    const filteredProducts = category !== 'All'
        ? products.filter(product => product.title.includes(category))
        : products;

    return (
        <>
            {loading ? (
                <div className="loader"></div>
            ) : (
                <>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Card 
                                key={product.id} 
                                src={product.images[0]} 
                                title={product.title} 
                                rating={product.description} 
                                price={product.price} 
                                onClick={() => openModal(product)} // Pass product to openModal function
                                addToCart={() => addToCart(product)}
                            />
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </>
            )}
            {/* Render modal if isModalOpen is true */}
            {isModalOpen && selectedProduct && (
                <Modal onClose={closeModal} product={selectedProduct}>
                </Modal>
            )}
        </>
    );
}
