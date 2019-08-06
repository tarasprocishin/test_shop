import React from 'react';

function BasketMain (props) {
    let { goToBasket, toggle, basket, removeFromBasket, number } = props;
    console.log(number)
    return (
        <div className="basket-main">
           
            {toggle ? null 
            : <div className="return">
                    <button onClick={() => {goToBasket()}}> 
                        Return 
                    </button>  
                </div>
            }
          
     
            {toggle
                ? null
                :<ul className="products"> {basket.map(el => (
                    <li key ={el.id} className="product__item">
                        <h3 className="product__name"> Name: {el.name}</h3>
                        <p className="product__lable"> Description: {el.label}</p>
                        <div className="product__price">
                            <p className="product__price"> Price: {el.price}</p>
                            <p className="product__number"> Number: {el.number}</p>
                            <button onClick={()=> {removeFromBasket(el)}} className="product__btn">Remove</button>
                        </div>
                    </li>
                     ))}
                     </ul>}

            {toggle || basket.length ? null: <h2 className="basket-empty">Basket is Empty :(</h2>}      
            {!toggle && basket.length
            ?<div className="sum_price">
                <p className="sum_price__text">
                    Total: 
                    {' ' + basket.reduce((sum, el) => {
                        return sum + (el.price * el.number);
                    }, 0 )}
                </p>
                <button className="sum_price__btn">Buy</button>
            </div> 
            : null
            }
    </div>

    )
}

export default BasketMain;