// components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const addProduct = () => {
    axios.post('http://localhost:5001/add', {
      product: {
        pname: productName,
        pdesc: productDescription,
        purl: productImage,
      },
    })
      .then(response => {
        console.log(response.data);
        // Add logic to update featuredProducts state or re-fetch the data
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  useEffect(() => {
    // Fetch featured products from the backend
    axios.get('http://localhost:5001/')
      .then(response => {
        setFeaturedProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  return (
    <div>
      <header>
        <h1>Welcome to Our Store</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>Add a Product</h2>
        <form id="addProductForm">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="productImage">Product Image URL:</label>
          <input
            type="url"
            id="productImage"
            name="productImage"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            required
          />

          <button type="button" className="button" onClick={addProduct}>
            Add Product
          </button>
        </form>

        <h2>Featured Products</h2>
        {featuredProducts.map(product => (
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

export default Home;
