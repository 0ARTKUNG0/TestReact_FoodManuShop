import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';

const MenuPage = ({ title, products }) => {
  return (
    <>
      <header>
        <nav>
          <h1>TASTY BITES</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <div className="logo d-flex justify-content-center" style={{ marginBottom: '30px' }}>
              <h1>{title}</h1>
            </div>

            <div id="products" className="row">
              {products.map((product, index) => (
                <Product 
                  key={index}
                  id={`product-${index}`}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  hasSpiceLevel={product.hasSpiceLevel}
                />
              ))}
            </div>
          </div>

          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;