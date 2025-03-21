import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#FAE6D9', minHeight: '100vh' }}>
      <header>
        <nav>
          <h1 style={{ color: '#6D2240', fontWeight: 'bold' }}>
            TASTY BITES
          </h1>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="card__container">
          <article className="card__article">
            <img src="./product_img/main-1.jpg" alt="Japanese Katsu Curry" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Japanese Cuisine</h2>
              <Link to="/main-courses" className="card__button">View Menu</Link>
            </div>
          </article>

          <article className="card__article">
            <img src="./product_img/main-2.jpg" alt="Japanese Tempura Platter" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Special Sets</h2>
              <Link to="/sides-appetizers" className="card__button">View Menu</Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default HomePage;