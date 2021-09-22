import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Navbar, Container, Form, FormControl,
} from 'react-bootstrap';

import '../styles/Header.css';
import Logo from '../assets/superfuds-logo.jpeg';

function Header() {
  const productsCart = useSelector((state) => state.products.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;

    productsCart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [productsCart, cartCount]);

  return (
    <>
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

            <Link to="/cart">
              <div className="cart-icon-container">
                <i className="fas fa-shopping-cart" />
                <p>{cartCount}</p>
              </div>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
