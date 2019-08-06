import React from 'react';

function ProductList(props) {
    let { data, addToBasket } = props;
       
    return(
        <section className="product-list">
            <div className="container">
                <ul className="products">
                    {data.map(el => (
                    <li key ={el.id} className="product__item">
                    <h3 className="product__name">Name: {el.name}</h3>
                    <p className="product__lable"> Description: {el.label}</p>
                    <p className="product__price"> Price: {el.price} 
                     <button onClick={()=> {addToBasket(el)}} className="product__btn">Add</button></p>
                   
                    </li>
                    ))}
                </ul>
            </div>
        </section>


    )
}

export default ProductList;