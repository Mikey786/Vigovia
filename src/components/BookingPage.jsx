import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Itinerary from './StaticItinerary';
import Footer from './Footer';
import './BookingPage.css';
import logo from '../assets/vigovia.png';

const BookingPage = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const pdfRef = useRef();

    const [travelerName, setTravelerName] = useState('');
    const [numDays, setNumDays] = useState(1);
    const [days, setDays] = useState([
        { id: uuidv4(), activities: [], transfers: [], flights: [] }
    ]);

    const handleNumDaysChange = (e) => {
        const count = Math.max(1, parseInt(e.target.value, 10) || 1);
        setNumDays(count);
        let currentDays = [...days];
        if (count > currentDays.length) {
            for (let i = currentDays.length; i < count; i++) {
                currentDays.push({ id: uuidv4(), activities: [], transfers: [], flights: [] });
            }
        } else {
            currentDays = currentDays.slice(0, count);
        }
        setDays(currentDays);
    };

    const addItem = (dayIndex, itemType) => {
        const newDays = [...days];
        newDays[dayIndex][itemType].push({ id: uuidv4() });
        setDays(newDays);
    };

    const removeItem = (dayIndex, itemType, itemId) => {
        const newDays = [...days];
        newDays[dayIndex][itemType] = newDays[dayIndex][itemType].filter(item => item.id !== itemId);
        setDays(newDays);
    };

    const generatePdf = async () => {
        setIsGenerating(true);
        const pdfComponent = pdfRef.current;
        const captureWidth = 895;
        pdfComponent.style.width = `${captureWidth}px`;
        const canvas = await html2canvas(pdfComponent, { scale: 2.5, useCORS: true, windowWidth: captureWidth });
        pdfComponent.style.width = null;
        const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: 'a4', hotfixes: ['px_scaling'] });
        const pdfInternalWidth = pdf.internal.pageSize.getWidth();
        const pdfInternalHeight = pdf.internal.pageSize.getHeight();
        const canvasAspectRatio = canvas.height / canvas.width;
        const pagePadding = 40;
        const imageWidth = pdfInternalWidth - (pagePadding * 2);
        const imageHeight = imageWidth * canvasAspectRatio;
        const totalPages = Math.ceil(imageHeight / pdfInternalHeight);
        for (let i = 0; i < totalPages; i++) {
            if (i > 0) pdf.addPage();
            const yPos = -(i * pdfInternalHeight);
            pdf.addImage(canvas, 'PNG', pagePadding, yPos, imageWidth, imageHeight, `page_${i}`, 'FAST');
            const footerMargin = 40;
            const logoImg = new Image();
            logoImg.src = logo;
            const logoWidth = 100;
            const logoHeight = 40;
            const logoX = pdfInternalWidth - logoWidth - footerMargin;
            const logoY = pdfInternalHeight - logoHeight - (footerMargin / 2) + 5;
            pdf.addImage(logoImg, 'PNG', logoX, logoY, logoWidth, logoHeight);
            const address = ["HD-109 Cinnabar Hills, Links Business Park,","Bangalore North, Bangalore, Karnataka, India-560071"];
            pdf.setFontSize(8);
            pdf.setTextColor('#555');
            pdf.text(address, footerMargin, pdfInternalHeight - footerMargin);
            pdf.text("Email : contact@vigovia.com", pdfInternalWidth / 2, pdfInternalHeight - footerMargin, { align: 'center' });
            pdf.text("Phone : +91 99123 45678", pdfInternalWidth / 2, pdfInternalHeight - footerMargin + 10, { align: 'center' });
        }
        pdf.save('Vigovia-Itinerary.pdf');
        setIsGenerating(false);
    };

    return (
        <div className="booking-page-wrapper">
            <nav className="landing-nav">
                <img src={logo} alt="Vigovia Logo" className="landing-logo" />
            </nav>
            <div className="booking-page-container">
                <h1>Itinerary Input Form</h1>
                <p className="subtitle">Fill in all trip details below. The generated PDF will use a beautiful, pre-set static design.</p>
                <div className="form-layout">
                    <fieldset className="details-fieldset">
                        <legend>Traveler Details</legend>
                        <label htmlFor="traveler-name-input">Traveler Name</label>
                        <input
                            id="traveler-name-input"
                            type="text"
                            value={travelerName}
                            onChange={(e) => setTravelerName(e.target.value)}
                            placeholder="e.g., Rahul Sharma"
                            className="input-field"
                        />
                    </fieldset>

                    <fieldset className="details-fieldset">
                        <legend>Trip Duration</legend>
                        <label htmlFor="num-days-input">Number of Days</label>
                        <input 
                            id="num-days-input" 
                            type="number" 
                            value={numDays} 
                            onChange={handleNumDaysChange} 
                            min="1" 
                            className="input-field"
                        />
                    </fieldset>

                    {days.map((day, dayIndex) => (
                        <fieldset key={day.id} className="day-fieldset">
                            <legend>Day {dayIndex + 1}</legend>

                            <div className="item-section">
                                <h4 className="item-title">Activities</h4>
                                {day.activities.map((activity) => (
                                    <div className="dynamic-item" key={activity.id}>
                                        <div className="item-inputs">
                                            <input type="text" placeholder="Activity Name" className="input-field" />
                                            <textarea placeholder="Activity Description" className="textarea-field"></textarea>
                                            <div className="item-row">
                                                <input type="text" placeholder="Activity ID" className="input-field" />
                                                <input type="number" placeholder="Price ($)" className="input-field" />
                                            </div>
                                        </div>
                                        <div className="item-actions">
                                            <button className="remove-button" onClick={() => removeItem(dayIndex, 'activities', activity.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                                <button className="add-button" onClick={() => addItem(dayIndex, 'activities')}>+ Add Activity</button>
                            </div>

                            <div className="item-section">
                                <h4 className="item-title">Transfers</h4>
                                {day.transfers.map((transfer) => (
                                    <div className="dynamic-item" key={transfer.id}>
                                        <div className="item-inputs">
                                            <input type="text" placeholder="Type of Transfer (e.g., Private Car)" className="input-field" />
                                            <div className="item-row">
                                                <input type="text" placeholder="Timings (e.g., 9:00 AM)" className="input-field" />
                                                <input type="number" placeholder="No. of People" className="input-field" />
                                                <input type="number" placeholder="Price ($)" className="input-field" />
                                            </div>
                                        </div>
                                        <div className="item-actions">
                                            <button className="remove-button" onClick={() => removeItem(dayIndex, 'transfers', transfer.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                                <button className="add-button" onClick={() => addItem(dayIndex, 'transfers')}>+ Add Transfer</button>
                            </div>

                            <div className="item-section">
                                <h4 className="item-title">Flights</h4>
                                {day.flights.map((flight) => (
                                    <div className="dynamic-item" key={flight.id}>
                                        <div className="item-inputs">
                                            <div className="item-row">
                                                <input type="text" placeholder="Flight Name" className="input-field" />
                                                <input type="text" placeholder="From" className="input-field" />
                                                <input type="text" placeholder="To" className="input-field" />
                                                <input type="text" placeholder="Time (e.g., 6:00 PM)" className="input-field" />
                                            </div>
                                        </div>
                                        <div className="item-actions">
                                            <button className="remove-button" onClick={() => removeItem(dayIndex, 'flights', flight.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                                <button className="add-button" onClick={() => addItem(dayIndex, 'flights')}>+ Add Flight</button>
                            </div>
                        </fieldset>
                    ))}

                    <button onClick={generatePdf} disabled={isGenerating} className="generate-button">
                        {isGenerating ? 'Generating PDF...(Do not exit the page patiently WAIT)' : 'Generate Itinerary PDF'}
                    </button>
                </div>
            </div>
            <Footer />

            <div style={{ position: 'absolute', left: '-2000px', top: 0, zIndex: -1 }}>
                <div ref={pdfRef}>
                    <Itinerary />
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
