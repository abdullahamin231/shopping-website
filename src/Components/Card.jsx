export default function Card({ onClick ,src, title, price, addToCart}){
    const t = title.substring(0, 32);
    return (
        <div onClick={onClick} className="card">
            <img src={src} alt="" />
            <p className="title">{title}</p>
            <p className="price">${price}</p>
            <button onClick={addToCart}><span>Add to Cart</span></button>
        </div>
    );
}