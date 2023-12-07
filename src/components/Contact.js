
// components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </section>

      <footer>
        <p>&copy; 2023 My eCommerce Store</p>
      </footer>
    </div>
  );
}

export default Contact;
