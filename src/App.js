import React from 'react';
import data from './server/data';
import Basket from './Components/Basket';
import ProductList from './Components/ProductList';
import './css/App.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      basket: [],
      number: 0,
      toggle: true
    }
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('basket'));
    this.setState({ basket: storage })
  }



  addToBasket = (el) => {
    this.setState(prevState => {

      let { basket } = prevState; 
      
      let found  = basket.find(item => item.id === el.id)

      if( !found ){
        el.number = 1;
        let newBasket =  basket.concat(el);
        localStorage.setItem("basket", JSON.stringify(newBasket))
        return {
          basket: newBasket,
          number: el.number
        }    
      }else{
        found.number++;
        localStorage.setItem("basket", JSON.stringify(basket))
        return { 
            number: el.number, 
                              };
      }
    })
  }

  removeFromBasket  = (el) => {
    this.setState(prevState => {
      let { basket } = prevState; 
      if( basket.indexOf(el) === -1 ){
        return;
      }

      if(el.number > 1 ){
        el.number--;
        localStorage.setItem("basket", JSON.stringify(basket))
        return { number: el.number };

      }

       basket.splice(basket.indexOf(el), 1);
       el.number = 0;
       localStorage.setItem("basket", JSON.stringify(basket))
      return {
        number: el.number,
        basket: basket
      } 
    })
  }

  goToBasket = () => {
    this.setState(prevState => (
       {toggle: !prevState.toggle} 
    ))
}

  render(){
      let { basket, toggle, number } = this.state;
     
  
    return (
      <main className="App">
        <Basket 
          number={number}
          data={data}
          basket={basket}
          toggle={toggle}
          goToBasket={this.goToBasket}
          removeFromBasket={this.removeFromBasket}
        />
        {toggle 
        ? <ProductList 
            data={data} 
            addToBasket={this.addToBasket}
         />
         : null }
      </main>
    );
  }

}

export default App;
