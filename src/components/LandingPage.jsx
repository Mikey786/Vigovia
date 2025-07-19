import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './LandingPage.css';
import logo from '../assets/vigovia.png';
import heroImage from '../assets/maldives.jpg';
import dest1 from '../assets/bali.jpg';
import dest2 from '../assets/sing.jpg';
import dest3 from '../assets/swiss.jpg';

const LandingPage = () => {
    return (
        <div className="page-wrapper">
            <nav className="landing-nav">
                <img src={logo} alt="Vigovia Logo" className="landing-logo" />
                <Link to="/create-itinerary" className="nav-button">Create Itinerary</Link>
            </nav>

            <header className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-content">
                    <h1>Your Journey, Perfectly Planned</h1>
                    <p>Design, customize, and generate beautiful, professional travel itineraries in minutes. Turn your travel plans into shareable PDF documents.</p>
                     <Link to="/create-itinerary" className="cta-button">Start Planning Your Trip</Link>
                </div>
            </header>

            <main>
                <section className="destinations-section">
                    <h2>Popular Destinations</h2>
                    <div className="destinations-grid">
                        <div className="dest-card">
                            <img src={dest1} alt="Bali" />
                            <div className="dest-info">
                                <h3>Bali, Indonesia</h3>
                                <p>Packages from <strong>₹35,000</strong></p>
                            </div>
                        </div>
                        <div className="dest-card">
                            <img src={dest2} alt="Singapore" />
                            <div className="dest-info">
                                <h3>Singapore</h3>
                                <p>Packages from <strong>₹50,000</strong></p>
                            </div>
                        </div>
                        <div className="dest-card">
                            <img src={dest3} alt="Europe" />
                            <div className="dest-info">
                                <h3>Europe Classics</h3>
                                <p>Packages from <strong>₹1,20,000</strong></p>
                            </div>
                        </div>
                    </div>
                </section>

                 <section className="tips-section">
                    <h2>Pro Travel Tips</h2>
                    <div className="tips-grid">
                        <div className="tip-card">
                            <h4>Pack Smart, Not Hard</h4>
                            <p>Roll your clothes to save space and prevent wrinkles. Use packing cubes to stay organized.</p>
                        </div>
                        <div className="tip-card">
                            <h4>Book in Advance</h4>
                            <p>Flights and accommodations are often cheaper when booked several months ahead, especially for popular destinations.</p>
                        </div>
                        <div className="tip-card">
                            <h4>Stay Connected</h4>
                            <p>Purchase a local SIM card or an eSIM upon arrival for affordable data and calls, avoiding high roaming charges.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;