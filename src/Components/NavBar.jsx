import Icon from '@mdi/react';
import { mdiShoppingOutline } from '@mdi/js';
import Logo from '../assets/Logo.jsx'
import { Link } from "react-router-dom";


export default function NavBar(){
   

    

    return (
        <div className="navbar">
            <div className="logo">
                <Logo color="#000" />
            </div>

            <div className="input">
                <input type="text" placeholder='Search for your favourite product...' 
                onChange={e => setSearchTerm(e.target.value)} />            
            </div>

            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>

                <Icon path={mdiShoppingOutline} size={1} color='#000000' />
            </div>
        </div>
    );
}