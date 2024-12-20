import React from 'react';
import { Link } from 'react-router-dom';
import imageBanner from '../asset/images/restauranfood.jpg';

const Header = () => {
    return(
        <header className='header'>
            <section>
                <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Medditerraneran restaurant, focused on traditional receipes sevred with a modern twist</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                <div className='banner-img'>
                    <img src={imageBanner} alt='' />
                </div>
                </div>
            </section>
        </header>
    );
}
export default Header;