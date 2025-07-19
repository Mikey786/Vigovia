import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/vigovia.png';
import razorpay from '../assets/razorpay.png';
import stripe from '../assets/stripe.jpg';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top-links">
                <a href="#">Bali Tour Packages</a>
                <a href="#">Japan Tour Packages</a>
                <a href="#">Vietnam Tour Packages</a>
                <a href="#">Malaysia Tour Packages</a>
                <a href="#">Thailand Tour Packages</a>
                <a href="#">Europe Tour Packages</a>
                <a href="#">Luxury Tour packages</a>
            </div>

            <div className="footer-main">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Our offerings</h4>
                        <a href="#">Holidays</a>
                        <a href="#">Visa</a>
                        <a href="#">Forex</a>
                        <a href="#">Hotels</a>
                        <a href="#">Flights</a>
                    </div>
                    <div className="footer-column">
                        <h4>Popular destinations</h4>
                        <a href="#">Dubai</a>
                        <a href="#">Bali</a>
                        <a href="#">Thailand</a>
                        <a href="#">Singapore</a>
                        <a href="#">Malaysia</a>
                    </div>
                    <div className="footer-column">
                        <h4>Vigovia Specials</h4>
                        <a href="#">Featured Experience</a>
                        <a href="#">Group Tours</a>
                        <a href="#">Backpacker's Club</a>
                        <a href="#">Offline Events</a>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Vigovia Blog</a>
                        <a href="#">Partner Portal</a>
                        <a href="#">Accreditations</a>
                    </div>
                    <div className="footer-column">
                        <h4>More</h4>
                        <a href="#">Investor Relations</a>
                        <a href="#">Forex</a>
                        <a href="#">FAQs</a>
                        <a href="#">Domestic Holidays</a>
                    </div>
                    <div className="footer-column contact-column">
                        <div className="contact-box">
                            <p>Need help? Call us</p>
                            <strong>+91-98xxxx64641</strong>
                        </div>
                        <div className="contact-box">
                            <p>Email</p>
                            <strong>contact@vigovia.com</strong>
                        </div>
                         <div className="contact-box">
                            <p>Address</p>
                            <strong>HD-109 Cinnabar Hills, Links Business Park, Bangalore North, Bangalore, Karnataka, India-560071</strong>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <img src={logo} alt="Vigovia" className="footer-logo" />
                    <div className="footer-payments">
                        <h4>Payments</h4>
                        <img src={razorpay} alt="Razorpay" />
                        <img src={stripe} alt="Stripe" />
                    </div>
                </div>
            </div>

            <div className="footer-legal">
                <p>© 2025 Vigovia Travel Technologies (P) Ltd. All rights reserved.</p>
                <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
                <div className="legal-links">
                    <a href="#">Privacy policy</a>
                    <a href="#">Legal notice</a>
                    <a href="#">Accessibility</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;