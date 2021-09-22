import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, Button, OverlayTrigger, Tooltip,
} from 'react-bootstrap';

import { addToCart } from '../redux/actions/productsActions';
import { getFormatPrice, getShortTitle } from '../functions';

import '../styles/ProductCard.css';

function ProductCard({ dataProduct }) {
  const [showButton, setShowButton] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (id) => (dispatch(addToCart(id)));

  const { sellos } = dataProduct;

  return (
    <>
      <Card
        className="card-container"
        onMouseEnter={() => { setShowButton(true); }}
        onMouseLeave={() => { setShowButton(false); }}
      >
        <Card.Header className="images-container">
          <Card.Img variant="top" src={dataProduct.image} alt={dataProduct.title} className="image-product " />

          <div className="sellos-container">
            {
              sellos.map((sello) => (
                <OverlayTrigger
                  transition={false}
                  key={sello.name}
                  placement="right"
                  overlay={(
                    <Tooltip id="tooltip-sello" className="tooltip">
                      <p className="tooltip-title p-without-margin">Producto</p>
                      <p className="tooltip-name p-without-margin">{sello.name}</p>
                    </Tooltip>
                  )}
                >
                  <img src={sello.image} alt={sello.name} />
                </OverlayTrigger>
              ))
            }
          </div>
        </Card.Header>

        <Card.Body>
          <div className="text-description-beetwen">
            <Card.Text className="green-font">{getShortTitle(dataProduct.supplier, 15)}</Card.Text>
            <div className="net_content-container">
              <Card.Text>{dataProduct.net_content}</Card.Text>
            </div>
          </div>

          <Card.Text className="bold-font">{getShortTitle(dataProduct.title, 15)}</Card.Text>

          <p className="p-without-margin">
            <strong className="black-font">
              <span className="green-font ">$</span>
              {`${getFormatPrice(dataProduct.price_real)} `}
            </strong>
            <span className="unids">{`x ${dataProduct.units_sf} unids`}</span>
          </p>
        </Card.Body>

        {
          showButton
            ? (
              <Button
                variant="primary"
                className="custom-btn"
                onClick={() => { addProduct(dataProduct.id); }}
              >
                Agregar al carrito
              </Button>
            )
            : null
        }
      </Card>
    </>
  );
}

export default ProductCard;
