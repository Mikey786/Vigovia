import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingPage from './components/BookingPage';
import Itinerary from './components/StaticItinerary';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/create-itinerary" element={<BookingPage />} />
                <Route path="/itinerary" element={<Itinerary />} />
            </Routes>
        </Router>
    );
}

export default App;