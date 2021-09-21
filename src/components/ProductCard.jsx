import React, { useState } from 'react';
import {
  Card, Button, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import '../styles/ProductCard.css';

function ProductCard({ dataProduct }) {
  const { sellos } = dataProduct;
  const [showButton, setShowButton] = useState(false);

  const price = dataProduct.price_real;
  const priceWithDots = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  const { title } = dataProduct;
  const shortTitle = title.length > 15 ? `${title.substring(0, 15)}...` : title;

  return (
    <>
      <Card
        style={{ width: '15rem' }}
        onMouseEnter={() => { setShowButton(true); }}
        onMouseLeave={() => { setShowButton(false); }}
      >
        <Card.Header className="images-container">
          <Card.Img variant="top" src={dataProduct.image} alt={dataProduct.title} style={{ height: '150px', width: 'auto' }} />

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
          <div className="text-description">
            <Card.Text>{dataProduct.supplier}</Card.Text>
            <Card.Text>{dataProduct.net_content}</Card.Text>
          </div>
          <Card.Title>{shortTitle}</Card.Title>
          <div className="text-description">
            <Card.Text>{`$ ${priceWithDots}`}</Card.Text>
            <Card.Text>{`x ${dataProduct.units_sf} unids`}</Card.Text>
          </div>
        </Card.Body>

        {
          showButton
            ? <Button variant="primary">Agregar al carrito</Button>
            : null
        }
      </Card>
    </>
  );
}

export default ProductCard;
