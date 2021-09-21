import React, { useState } from 'react';
import {
  Card, Button, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import '../styles/ProductCard.css';

function ProductCard({ dataProduct }) {
  const { sellos, title } = dataProduct;
  const [showButton, setShowButton] = useState(false);

  const price = dataProduct.price_real;
  const priceWithFormat = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  const shortTitle = title.length > 15 ? `${title.substring(0, 15)}...` : title;

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
                      <p className="tooltip-title">Producto</p>
                      <p className="tooltip-name">{sello.name}</p>
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
            <Card.Text className="green-font">{dataProduct.supplier}</Card.Text>
            <div className="net_content-container">
              <Card.Text>{dataProduct.net_content}</Card.Text>
            </div>
          </div>

          <Card.Title>{shortTitle}</Card.Title>

          <div className="text-description">
            <h4>
              <span className="green-font">$</span>
              {`${priceWithFormat} `}
            </h4>
            <span className="unids">{`x ${dataProduct.units_sf} unids`}</span>
          </div>
        </Card.Body>

        {
          showButton
            ? <Button variant="primary" className="custom-btn">Agregar al carrito</Button>
            : null
        }
      </Card>
    </>
  );
}

export default ProductCard;
