import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import CartItem from './CartItem';
import { getFormatPrice } from '../functions';
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
      <h2>Carrito de compras</h2>
      <table className="products-cart">
        <thead>
          <Row>
            <Col md={6}>Item</Col>
            <Col md={3} className="text-center">Cantidad</Col>
            <Col md={2} className="text-center">Precio</Col>
          </Row>
        </thead>
        <tbody>
          {
            productsCartState !== []
              ? productsCartState.map((product) => (
                <CartItem
                  key={product.id}
                  dataProduct={product}
                  dataAllProducts={productsCartState}
                />
              ))
              : null
          }
        </tbody>
      </table>
      <h3>{`Total: $${totalPrice}`}</h3>
    </section>
  );
}

export default Cart;
