// In this file, show ***all*** items which add in cart basket by the help of checkout product component

import {useStateValue} from "../providers/StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import "./Checkout.css"
import React from 'react'
import Subtotal from "./Subtotal"

function Checkout() {

    const [{basket,user},dispatch] = useStateValue();

  return (
    
    <div className="checkout">

      <div className="checkout__left">

          {/* <img className='checkout_ad'
          src=' https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          /> */}

        <h2 className="checkout__title">Your Shopping Basket</h2>

        <div className="checkout__items">

            
        {
          basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))
        }

        </div>

      </div>

      <div className="checkout__right">
          <Subtotal/>
      </div>

    </div>
  )
}

export default Checkout
