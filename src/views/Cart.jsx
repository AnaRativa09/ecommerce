import React from 'react';
import { useSelector } from 'react-redux';

// import { getProducts } from '../redux/actions/productsActions';

import ProductCartItem from '../components/ProductCartItem';
import '../styles/Cart.css';

function Cart() {
  const productsCartState = useSelector((state) => state.products.cart);
  // const [productsCart, setProductsCart] = useState([]);

  // const productsCartState = useSelector((state) => state.products.cart);

  // console.log(productsCartState);
  // console.log(productsCart);

  // useEffect(() => {
  //   if (productsCartState !== []) {
  //     setProductsCart(productsCartState);
  //   }
  // }, [productsCartState]);

  return (
    <section className="cart-section">
      <h1>
        <i className="fas fa-chevron-left green-font" />
        Volver a la tienda
      </h1>
      <table className="products-cart">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        {
          productsCartState !== []
            ? productsCartState.map((product) => (
              <ProductCartItem key={product.id} dataProduct={product} />
            ))
            : null
        }
      </table>
    </section>
  );
}

export default Cart;
