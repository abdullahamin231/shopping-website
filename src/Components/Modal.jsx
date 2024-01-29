import React from "react";
import ItemPage from "./ItemPage";
const Modal = ({ onClose, product }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <ItemPage 
                    src={product.images[0]} 
                    title={product.title} 
                    price={product.price}  
                    description={product.description}
                                />
            </div>
        </div>
    );
};

export default Modal;
