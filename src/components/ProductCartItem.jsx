import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';

import { removeFromCart, adjustProductQty } from '../redux/actions/productsActions';
import getFormatPrice from '../functions';

import '../styles/ProductCartItem.css';

function ProductCardItem({ dataProduct }) {
  const dispatch = useDispatch();
  const [qtyProduct, setqtyProduct] = useState(dataProduct.qty);

  useEffect(() => {
    const updateQty = () => {
      dispatch(adjustProductQty(dataProduct.id, qtyProduct));
    };
    updateQty();
  }, [qtyProduct, setqtyProduct]);

  const { title } = dataProduct;
  const shortTitle = title.length > 15 ? `${title.substring(0, 15)}...` : title;

  const totalPriceQty = (qty, priceProduct) => `${parseFloat(priceProduct) * qty}`;

  return (
    <>
      <tr>
        <td>
          <Card.Img variant="top" src={dataProduct.image} alt={dataProduct.title} className="image-product" />
        </td>
        <td>
          <Card.Title>{shortTitle}</Card.Title>
          <Card.Text>
            <span className="unids">{`x ${dataProduct.units_sf} unids`}</span>
            {dataProduct.net_content}
          </Card.Text>
          <Card.Text className="green-font">{dataProduct.supplier}</Card.Text>
        </td>
        <td className="qty-item">
          <button
            type="button"
            className="qty-button"
            onClick={() => setqtyProduct(qtyProduct === 1 ? qtyProduct : qtyProduct - 1)}
          >
            <i className="fas fa-minus" />
          </button>
          <p>{qtyProduct}</p>
          <button
            type="button"
            className="qty-button"
            onClick={() => setqtyProduct(qtyProduct + 1)}
          >
            <i className="fas fa-plus" />
          </button>
        </td>
        <td>
          <h4>
            <span className="green-font">$</span>
            {getFormatPrice(totalPriceQty(qtyProduct, dataProduct.price_real))}
          </h4>
        </td>
        <td>
          <button
            type="button"
            className="qty-button"
            onClick={() => dispatch(removeFromCart(dataProduct.id))}
          >
            <i className="far fa-trash-alt" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default ProductCardItem;
