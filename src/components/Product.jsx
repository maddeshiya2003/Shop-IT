import React from 'react';
import "./Product.css";
import {useStateValue} from '../providers/StateProvider'

function Project({id,title,image,price,rating}) {

    const [{basket},dispatch] = useStateValue();

    // function for add item in cart
    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>

                <p>{title}</p>

                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product__rating'>
                    {
                        Array(rating).fill().map(() => <p>⭐</p>)
                    }
                </div>

            </div>
            
            <img className='product__img' src={image} alt='' />

            <button onClick={addToBasket} className='add-to-cart'>Add to Cart</button>
        </div>
    )
}

export default Project
