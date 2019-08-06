import React from 'react';

function BasketIcon (props) {
    let { basket, toggle, goToBasket} = props;
    return (
       <>
            {toggle ?
                <>
                <div className="basket-icon">
                    <h2 className="col-lg-4">Basket</h2>
                    <button onClick={() => {goToBasket()}}
                            className="basket__icon col-lg-2 ml-auto">
                        <div className="icon-basket">
                            <span className="counter"> 
                                {basket.reduce((sum, el) => {
                                    return sum + el.number;
                                    }, 0 )}
                            </span>
                        </div> 
                    </button>
                    </div>
                </>
                : null}

        </>
    )
}

export default BasketIcon;