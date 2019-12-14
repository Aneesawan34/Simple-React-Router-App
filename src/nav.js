import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './nav.css';


class Nav extends Component{
    render(){
        return(
            <nav>
                <Link to="/"><h3>Logo</h3></Link>
                <ul className="nav-link">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/shop"><li>Shop</li></Link>
                </ul>
            </nav>
        )
    }
}

export default Nav;