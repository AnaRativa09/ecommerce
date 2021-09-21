import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import sliderSettings from './SliderSettings';

import { getProducts } from '../redux/actions/productsActions';

import ProductCard from './ProductCard';
import '../styles/Home.css';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.dataProducts);

  const getAllProducts = () => dispatch(getProducts());

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <h1>
        Nuevo en Superfüds
        <span> Ver más</span>
      </h1>
      <section className="products-slider">
        <Slider {...settings}>
          {
            products !== []
              ? products.map((product) => (
                <ProductCard key={product.id} dataProduct={product} />
              ))
              : null
          }
        </Slider>
      </section>
    </>
  );
}

export default Home;
