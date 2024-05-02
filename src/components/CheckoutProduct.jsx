// in this file only shows the particular one product that add in cart

import React from 'react'
import "./CheckoutProduct.css"

import {useStateValue} from "../providers/StateProvider"

function CheckoutProduct({id,image,title,price,rating,hideButton}) {

  const [{basket},dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove items from cart
    dispatch ({
      type : 'REMOVE_FROM_BASKET',
      id : id,
    })
  }

  return (
    <div ClassNames= "checkoutProduct">

        <img className='checkoutProduct__image' src={image}/>

        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className='checkoutProduct__rating'>
                    {
                        Array(rating).fill().map(() => <p>⭐</p>)
                    }
          </div>

          {!hideButton && ( <button onClick={removeFromBasket}>Remove Item</button> )}

        </div>
    </div>
  )
}

export default CheckoutProduct