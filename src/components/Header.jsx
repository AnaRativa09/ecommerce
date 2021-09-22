import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Navbar, Container, Form, FormControl, Modal, Button,
} from 'react-bootstrap';

import Cart from './Cart';
import '../styles/Header.css';
import Logo from '../assets/superfuds-logo.jpeg';

function Header() {
  const [show, setShow] = useState(false);

  const productsCart = useSelector((state) => state.products.cart);
  const [productsInCart, setProductsInCart] = useState([]);
  useEffect(() => {
    if (productsCart !== []) {
      setProductsInCart(productsCart);
    }
  }, [productsCart]);

  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    productsCart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [productsCart, cartCount]);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-bg">
      <Container>
        <Link to="/">
          <img src={Logo} alt="superfuds-logo" className="logo" />
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar marcas y productos..."
              className="mr-2"
              aria-label="Buscar marcas y productos..."
            />
          </Form>

          <Button className="custom-btn-without-bg white-font flex-row" onClick={() => setShow(true)}>
            <i className="fas fa-shopping-cart" />
            <p>{cartCount}</p>
          </Button>

          <Modal show={show} size="lg" onHide={() => setShow(false)}>
            <Modal.Header>
              <Modal.Title>
                <Button
                  className="custom-btn-without-bg green-font"
                  type="button"
                  onClick={() => setShow(false)}
                >
                  <i className="fas fa-chevron-left green-font" />
                </Button>
                Volver a la tienda
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {
                productsInCart.length === 0
                  ? <p>No has agregado ningun producto al carrito</p>
                  : <Cart />
              }

            </Modal.Body>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
