import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';
import { BsFillBagFill } from "react-icons/bs";

function Nav() {
    return (
        <div className='nav_bar'>
            <div className='container'>
                <div className='nav_container'>
                    <div className='nav_left'>
                        <Link to='/'><h2>Online Shop</h2></Link>
                    </div>
                    <div className='nav_right'>
                        <Link to='/cart'>
                            <div className='cart_info'>
                                <BsFillBagFill className='cart_icon' /> Cart
                                <span>0</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
