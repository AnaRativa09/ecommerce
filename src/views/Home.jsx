import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../redux/actions/productsActions';

import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.dataProducts);

  const getAllProducts = () => dispatch(getProducts());

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1>
        Nuevo en Superfüds
        <span className="green-font"> Ver más</span>
      </h1>
      <section className="products-slider">
        {
          products !== []
            ? products.map((product) => (
              <ProductCard key={product.id} dataProduct={product} />
            ))
            : null
        }
      </section>
    </>
  );
}

export default Home;
