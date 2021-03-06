import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';

import { removeFromCart, adjustProductQty } from '../redux/actions/productsActions';
import { getFormatPrice, getShortTitle, getTotalPriceQty } from '../functions';

import '../styles/CartItem.css';

function ProductCardItem({ dataProduct }) {
  const dispatch = useDispatch();
  const [qtyProduct, setqtyProduct] = useState(dataProduct.qty);

  const updateQty = () => dispatch(adjustProductQty(dataProduct.id, qtyProduct));

  useEffect(() => {
    updateQty();
  }, [qtyProduct, setqtyProduct]);

  return (
    <>
      <Row className="row-cart-item">
        <Col md={2}>
          <Card.Img
            variant="top"
            src={dataProduct.image}
            alt={dataProduct.title}
            className="image-product-cart"
          />
        </Col>

        <Col md={4} className="flex-row">
          <div className="text-container">
            <Card.Text className="bold-font p-without-margin">{getShortTitle(dataProduct.title, 15)}</Card.Text>
            <Card.Text className="p-without-margin">
              {`x ${dataProduct.units_sf} unids - ${dataProduct.net_content}`}
            </Card.Text>
            <Card.Text className="green-font p-without-margin">{dataProduct.supplier}</Card.Text>
          </div>
        </Col>

        <Col className="qty-item" md={3}>
          <Button
            variant="outline-primary"
            type="button"
            className="qty-button custom-btn-outline"
            onClick={() => setqtyProduct(qtyProduct - 1)}
            disabled={qtyProduct === 1}
          >
            <i className="fas fa-minus" />
          </Button>
          <p className="p-without-margin">{qtyProduct}</p>
          <Button
            variant="outline-primary"
            type="button"
            className="qty-button custom-btn-outline"
            onClick={() => setqtyProduct(qtyProduct + 1)}
          >
            <i className="fas fa-plus" />
          </Button>
        </Col>

        <Col md={2} className="qty-item">
          <p className="p-without-margin black-font">
            <span className="green-font">$</span>
            {` ${getFormatPrice(getTotalPriceQty(qtyProduct, dataProduct.price_real))} `}
          </p>
        </Col>

        <Col md={1} className="qty-item">
          <Button
            type="button"
            variant="outline-primary"
            className="qty-button-trash"
            onClick={() => dispatch(removeFromCart(dataProduct.id))}
          >
            <i className="far fa-trash-alt" />
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default ProductCardItem;
