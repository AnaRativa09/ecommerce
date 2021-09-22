import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Navbar, Container, Form, FormControl, Modal, Button,
} from 'react-bootstrap';

import Cart from './Cart';
import '../styles/Header.css';
import Logo from '../assets/superfuds-logo.jpeg';
import UserPhoto from '../assets/user-photo.jpeg';

function Header() {
  const [showModal, setshowModal] = useState(false);

  const productsCartState = useSelector((state) => state.products.cart);
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    if (productsCartState !== []) {
      setProductsInCart(productsCartState);
    }
  }, [productsCartState]);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    productsCartState.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [productsCartState, cartCount]);

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

            <Button
              className="custom-btn-without-bg white-font flex-row"
              onClick={() => setshowModal(true)}
            >
              <i className="fas fa-shopping-cart" />
              <p className="p-without-margin">{cartCount}</p>
            </Button>

            <div className="user-container">
              <div className="user-description">
                <p className="bold-font white-font p-without-margin">Saiby Alimentos</p>
                <p className="thin-font p-without-margin green-dark-font">
                  Mi perfil
                  <i className="fas fa-chevron-down" />
                </p>
              </div>
              <img className="user-profile-photo" src={UserPhoto} alt="user-profile" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} size="lg" onHide={() => setshowModal(false)}>
        <Modal.Header>
          <Modal.Title className="text-description">
            <Button
              className="custom-btn-without-bg green-font"
              type="button"
              onClick={() => setshowModal(false)}
            >
              <i className="fas fa-chevron-left green-font" />
            </Button>
            <p className="p-without-margin"> Volver a la tienda </p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {
            productsInCart.length === 0
              ? (
                <>
                  <p>No tienes productos en el carrito, aún...</p>
                  <Button
                    variant="primary"
                    className="custom-btn"
                    onClick={() => setshowModal(false)}
                  >
                    Comprar ahora
                  </Button>
                </>
              )
              : <Cart />
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
