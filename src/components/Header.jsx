import React from 'react'
import "./Header.css"

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../providers/StateProvider';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'

function Header() {

  const [{basket,user},dispatch]= useStateValue();  

  const handleAuthentication =() =>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
        
      <img className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />

      <div className='header__search'>
          <input className='header__searchInput' type='text' />
          <SearchIcon className='header__searchIcon' />
      </div>  

      <div className='header__nav'>
          

          {/* here !user mean if user null hooga tabhi /login pe route karana hai else nahi karana hai*/}
        <Link to={!user && '/login'} onClick={handleAuthentication}>
          <div  className='header__option'>
           <span className='header__optionLineOne'>Hello {!user ? "Guest" : user.email}</span>
           <span className='header__optionLineTwo'>{user?"Sign Up":"Sign In"}</span>
          </div>
        </Link>

          <div className='header__option'>
           <span className='header__optionLineOne'>Return</span>
           <span className='header__optionLineTwo'>& Orders</span>
          </div>

          <div className='header__option'>
           <span className='header__optionLineOne'>Your</span>
           <span className='header__optionLineTwo'>Prime</span>
          </div>

          <Link className='header__optionBasket' to = "/checkout">
            <div className='header__optionBasket'>
              <ShoppingBasketIcon />
              <span className='header_optionLineTwo header__basketCount'> {basket.length} </span>
            </div>
          </Link>
          
        </div>
    
    </div>
  );
}

export default Header;