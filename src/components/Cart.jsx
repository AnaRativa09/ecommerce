import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import CartItem from './CartItem';
import { getFormatPrice } from '../functions';
import '../styles/Cart.css';

function Cart() {
  const productsCartState = useSelector((state) => state.products.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    let price = 0;
    let products = 0;
    productsCartState.forEach((item) => {
      price += item.qty * item.price_real;
      products += item.qty;
    });
    setTotalPrice(getFormatPrice(price));
    setTotalProducts(products);
  }, [productsCartState, totalPrice, setTotalPrice, totalProducts, setTotalProducts]);

  return (
    <section className="cart-section">
      <table className="products-cart">
        <thead>
          <Row>
            <Col md={10}>
              <h2>Carrito de compras</h2>
            </Col>
            <Col md={2} className="text-center">
              <p className="p-without-margin">
                <span className="green-font">{`${totalProducts} `}</span>
                items
              </p>
            </Col>
          </Row>
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
        <Col md={{ offset: 9 }}>
          <p className="black-font">{`Total: $${totalPrice}`}</p>
        </Col>
      </table>
    </section>
  );
}

export default Cart;
