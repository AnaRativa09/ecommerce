import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProductCartItem from '../components/ProductCartItem';
import getFormatPrice from '../functions';
import '../styles/Cart.css';

function Cart() {
  const productsCartState = useSelector((state) => state.products.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    productsCartState.forEach((item) => {
      price += item.qty * item.price_real;
    });

    setTotalPrice(getFormatPrice(price));
  }, [productsCartState, totalPrice, setTotalPrice]);

  return (
    <section className="cart-section">
      <h1>
        <i className="fas fa-chevron-left green-font" />
        Volver a la tienda
      </h1>
      <table className="products-cart">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        {
          productsCartState !== []
            ? productsCartState.map((product) => (
              <ProductCartItem
                key={product.id}
                dataProduct={product}
                dataAllProducts={productsCartState}
              />
            ))
            : null
        }
      </table>
      <h3>{`Total: $${totalPrice}`}</h3>
    </section>
  );
}

export default Cart;
