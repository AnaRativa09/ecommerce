import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settingsSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className="container mt-5 carousel">
      <h2 className="slider-title">
        Nuevo en Superfüds
        <span className="green-font"> Ver más</span>
      </h2>

      <Slider {...settingsSlider}>
        {
          products !== []
            ? products.map((product) => (
              <div className="card-wrapper" key={product.id}>
                <div className="card">
                  <ProductCard dataProduct={product} />
                </div>
              </div>
            ))
            : null
        }
      </Slider>
    </section>
  );
}

export default Home;
