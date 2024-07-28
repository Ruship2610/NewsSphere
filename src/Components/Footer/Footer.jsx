import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<>
    <div className="backtotop "><a className="text-light" href="#">Back To Top</a></div>
    <footer className="bg-dark text-white py-4 ">

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>About Us</h5>
          <p>We are dedicated to providing the latest news from around the world.</p>
        </div>
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Email: newsphere@gmail.com</li>
            <li>Phone: +91 4247946190</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <ul className="list-unstyled d-flex">
            <li className="me-3"><a href="#"  className="text-white">Facebook</a></li>
            <li className="me-3"><a href="#" className="text-white">Twitter</a></li>
            <li><a href="#" className="text-white">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} News Website. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </>
      );
    };
    


export default Footer
