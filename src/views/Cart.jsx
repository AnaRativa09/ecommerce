import React from 'react';
import { useSelector } from 'react-redux';

import ProductCartItem from '../components/ProductCartItem';
import '../styles/Cart.css';

function Cart() {
  const productsCartState = useSelector((state) => state.products.cart);

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
    </section>
  );
}

export default Cart;
