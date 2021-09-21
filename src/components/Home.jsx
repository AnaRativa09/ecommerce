import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productsActions';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.dataProducts);

  const getAllProducts = () => dispatch(getProducts());

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products);

  return (
    <>
      <h1>
        Nuevo en Superfüds
        <span> Ver más</span>
      </h1>
      {
        products !== []
          ? products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
            </div>
          ))
          : null
      }
    </>
  );
}

export default Home;
