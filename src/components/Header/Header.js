import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h3>Welcome to tshirt mania</h3>
            <nav>
                <Link to= '/home'>Home</Link>
                <Link to = '/orderreview'>OrderReview</Link>
                <Link to = "/grandpa">Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;