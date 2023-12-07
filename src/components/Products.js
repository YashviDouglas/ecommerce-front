// components/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from the backend
    axios.get('http://localhost:5001/')
      .then(response => {
        setAllProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  return (
    <div>
      <header>
        <h1>Our Products</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>All Products</h2>
        {allProducts.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.purl} alt={product.pname} />
            <h3>{product.pname}</h3>
            <p>{product.pdesc}</p>
            <button className="button">Add to Cart</button>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; 2023 My eCommerce Store</p>
      </footer>
    </div>
  );
}

export default Products;
