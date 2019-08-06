import React from 'react';
import BasketMain from './Basket/BasketMain';
import BasketIcon from './Basket/BasketIcon';

class Basket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render() {
        let { basket, toggle, goToBasket, removeFromBasket, number } = this.props;
        
      
         return(
             <section className="basket">
                 <div className="container">
                 <BasketIcon 
                    basket={basket} 
                    toggle={toggle} 
                    goToBasket={goToBasket}
                 />
                <BasketMain 
                    basket={basket}
                    number={number}
                    toggle={toggle}
                    goToBasket={goToBasket}
                    removeFromBasket={removeFromBasket}
                 />
                 </div>
             </section>
            


         
        )}
   
}

export default Basket;