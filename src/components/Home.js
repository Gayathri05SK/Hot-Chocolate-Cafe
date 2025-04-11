import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>INDULGE IN BLISS</h1>
          <p>Try our premium hot chocolate today!</p>
          <button>Order Now</button>
        </div>
        <img src="/assets/hot.png" alt="Hot Chocolate" />
      </section>

      {/* Best Sellers */}
      <section className="best-sellers">
        <h2>Best-Selling Products</h2>
        <div className="products">
          <div className="product-card">
            <img src="/assets/pasta.jpg" alt="Pasta" />
            <p>Pasta</p>
          </div>
          <div className="product-card">
            <img src="/assets/pizza.jpg" alt="Pizza" />
            <p>Pizza</p>
          </div>
          <div className="product-card">
            <img src="/assets/sandwich.jpg" alt="Sandwich" />
            <p>Sandwich</p>
          </div>
          <div className="product-card">
            <img src="/assets/sandwich.jpg" alt="Sandwich" />
            <p>veg Burger</p>
          </div>
        </div>
      </section>

      {/* Sales of the Week */}
      <section className="sales-banner">
        <h3>Sales of the Week</h3>
        <img src="/assets/pizza.jpg" alt="Sale" />
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Our Categories</h2>
        <div className="category-icons">
          <span>🍕</span>
          <span>🍔</span>
          <span>🍟</span>
          <span>🥗</span>
          <span>🍰</span>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="delivery-info">
        <img src="/assets/truck.jpeg" alt="Delivery Truck" />
        <p>Fast and free delivery to your doorstep!</p>
      </section>

      {/* About Section */}
      <section className="about-us">
        <div className="about-card">
          <h4>MADE FRESH</h4>
          <p>Delicious meals made fresh every day</p>
        </div>
        <div className="about-card">
          <h4>CURATED FLAVORS</h4>
          <p>Only the best dishes make it to our menu</p>
        </div>
      </section>

      {/* Mood Selector */}
      <section className="mood-selector">
        <h2>How is your food mood?</h2>
        <div className="moods">
          <span>😋</span>
          <span>🤤</span>
          <span>🥰</span>
          <span>😎</span>
        </div>
      </section>

      {/* New Menu */}
      <section className="new-menu">
        <h2>Enjoy the New Menu</h2>
        <div className="new-dishes">
          <div className="dish">
            <img src="/assets/pizza.jpg" alt="Dish 1" />
            <p>Tandoori Pasta</p>
          </div>
          <div className="dish">
            <img src="/assets/pasta.jpg" alt="Dish 2" />
            <p>Chicken Wrap</p>
          </div>
          <div className="dish">
            <img src="/assets/sandwich.jpg" alt="Dish 3" />
            <p>Paneer Bowl</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review-cards">
          <div className="review">⭐⭐⭐⭐⭐</div>
          <div className="review">⭐⭐⭐⭐</div>
          <div className="review">⭐⭐⭐⭐⭐</div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram">
        <h2>Follow Us on Instagram</h2>
        <div className="insta-photos">
          <img src="/assets/hot.png" alt="Instagram 1" />
        
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>About Me</h2>
        <div className="portfolio-card">
          <img src="/assets/gayathri.jpg" alt="Myself" />
          <div className="portfolio-text">
            <h3>Gayathri SK</h3>
            <p>I am passionate about building engaging UI experiences and solving real-world problems using web technologies. Always learning, always coding!</p>
            <a href="https://www.linkedin.com/in/gayathrisk" target="_blank" rel="noopener noreferrer">
              View My LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
