import React from "react";

const ItemPage = ({ src, title, price, description }) => {
    return (
        <div className="item">
            <div className="item__img">
                <img src={src} alt={title} />
            </div>
            <div className="item__info">
                <h2 className="title">{title}</h2>
                <p>{description}</p>
                <p className="price">${price}</p>
            </div>
        </div>
    );
};

export default ItemPage;