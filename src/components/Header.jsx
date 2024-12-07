import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/call">Call</Link></li>
                    <li><Link to="/azbuka">Azbuka</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
