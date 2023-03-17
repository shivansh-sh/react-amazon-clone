import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

require('react-dom');


function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }

  console.log(basket);

  return (
    <nav className='header'>
        {/* logo */}
          
          <Link to="/">
            <img className='header__logo' src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578" alt="" />
         </Link>

        {/* search-bar */}
        <div className='header__search'>
        <input type="text" className='header__searchInput'/>
        <SearchIcon className='header__searchIcon'/>
        </div>



        {/* 3 links */}
        <div className='header__nav'>

        {/* 1st link */}
        <Link to={!user && '/login'} className='header__link'>

        <div onClick={handleAuthentication} className='header__option'>
          <span className='header__optionLineOne'>hello {!user ? 'Guest': user.email}</span>
          <span className='header__optionLinetwo'>{ user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        {/* 2nd link */}
        <Link to='/orders' className='header__link'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLinetwo'>& 0rders</span>
        </div>
        </Link>

        {/* 3rd link */}
        <Link to='/' className='header__link'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLinetwo'>Prime</span>
        </div>
        </Link>

        {/* basket icon with number */}
        <Link to='/Checkout' className='header__link'>
        <div className="header__optionBasket">
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className='header__optionLinetwo header__BasketCount header__rightmargin'>{basket?.length}</span>
        </div>
        </Link>

        </div>
    </nav>
  );
}

export default Header