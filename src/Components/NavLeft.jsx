import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

export default function NavLeft(){
  const { setCategory } = useContext(ProductContext);

  return (
    <div className="navleft">
      <h2>Categories</h2>
      <ul>
        <li><button onClick={() => setCategory('All')}>All</button></li>
        <li><button onClick={() => setCategory('Joggers')}>Joggers</button></li>
        <li><button onClick={() => setCategory('T-Shirt')}>T-Shirt</button></li>
        <li><button onClick={() => setCategory('Sneakers')}>Sneakers</button></li>
        <li><button onClick={() => setCategory('Table')}>Table</button></li>
        <li><button onClick={() => setCategory('Sofa')}>Sofa</button></li>
        <li><button onClick={() => setCategory('Headphones')}>Headphones</button></li>
        <li><button onClick={() => setCategory('Chair')}>Chair</button></li>
        
      </ul>
    </div>
  );
}
