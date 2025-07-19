import React from 'react';
import './StaticItinerary.css';
import { FaPlane, FaBuilding, FaHeartbeat, FaCar, FaIdBadge } from 'react-icons/fa';

const Itinerary = () => {
  return (
    <>
      <div className="logo-container">
        {/* Add your logo image source here */}
        <img src="src/assets/vigovia.png" alt="Vigovia Logo" className="main-logo" />
      </div>

      <div className="itinerary-container">
        <div className="header">
          <h1>Hi, Rahul!</h1>
          <h2>Singapore Itinerary</h2>
          <p>6 Days 5 Nights</p>
          <div className="header-icons">
            <span><FaPlane /></span>
            <span><FaBuilding /></span>
            <span><FaHeartbeat /></span>
            <span><FaCar /></span>
            <span><FaIdBadge /></span>
          </div>
        </div>

        <div className="trip-details">
          <div>
            <span className="detail-label">Departure From</span>
            <span className="detail-value">Kolkata</span>
          </div>
          <div>
            <span className="detail-label">Departure</span>
            <span className="detail-value">09/06/2025</span>
          </div>
          <div>
            <span className="detail-label">Arrival</span>
            <span className="detail-value">15/06/2025</span>
          </div>
          <div>
            <span className="detail-label">Destination</span>
            <span className="detail-value">Singapore</span>
          </div>
          <div>
            <span className="detail-label">No. Of Travellers</span>
            <span className="detail-value">4</span>
          </div>
        </div>

        {/* --- Daily Itinerary --- */}
        <div className="daily-itinerary-item pdf-section">
          <div className="day-sidebar">
            <span>Day 1</span>
          </div>
          <div className="day-content">
            <div className="day-visuals">
              <img src="src/assets/trees.png" alt="Singapore Waterfront" className="day-image" />
              <div className="day-title-section">
                <div className="day-date">27th November</div>
                <div className="day-title">Arrival In Singapore & City Exploration</div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-path"></div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Morning</span>
                  <p className="activity">Arrive In Singapore. Transfer From Airport To Hotel.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Afternoon</span>
                  <p className="activity">Check Into Your Hotel.</p>
                  <p className="activity">Visit Marina Bay Sands Sky Park (2-3 Hours).</p>
                  <p className="activity optional">Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Evening</span>
                  <p className="activity">Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="daily-itinerary-item pdf-section">
          <div className="day-sidebar">
            <span>Day 2</span>
          </div>
          <div className="day-content">
            <div className="day-visuals">
              <img src="src/assets/sea.png" alt="Singapore Waterfront" className="day-image" />
              <div className="day-title-section">
                <div className="day-date">27th November</div>
                <div className="day-title">Arrival In Singapore & City Exploration</div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-path"></div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Morning</span>
                  <p className="activity">Arrive In Singapore. Transfer From Airport To Hotel.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Afternoon</span>
                  <p className="activity">Check Into Your Hotel.</p>
                  <p className="activity">Visit Marina Bay Sands Sky Park (2-3 Hours).</p>
                  <p className="activity optional">Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Evening</span>
                  <p className="activity">Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-break"></div>
<br>
</br>
<br>
</br>
<br>
</br>

<br>
</br>
<br>
</br>
        <div className="daily-itinerary-item pdf-section">
          <div className="day-sidebar">
            <span>Day 3</span>
          </div>
          <div className="day-content">
            <div className="day-visuals">
              <img src="src/assets/tour.png" alt="Singapore Waterfront" className="day-image" />
              <div className="day-title-section">
                <div className="day-date">27th November</div>
                <div className="day-title">Arrival In Singapore & City Exploration</div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-path"></div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Morning</span>
                  <p className="activity">Arrive In Singapore. Transfer From Airport To Hotel.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Afternoon</span>
                  <p className="activity">Check Into Your Hotel.</p>
                  <p className="activity">Visit Marina Bay Sands Sky Park (2-3 Hours).</p>
                  <p className="activity optional">Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Evening</span>
                  <p className="activity">Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="daily-itinerary-item pdf-section">
          <div className="day-sidebar">
            <span>Day 4</span>
          </div>
          <div className="day-content">
            <div className="day-visuals">
              <img src="src/assets/city.png" alt="Singapore Waterfront" className="day-image" />
              <div className="day-title-section">
                <div className="day-date">27th November</div>
                <div className="day-title">Arrival In Singapore & City Exploration</div>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-path"></div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Morning</span>
                  <p className="activity">Arrive In Singapore. Transfer From Airport To Hotel.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Afternoon</span>
                  <p className="activity">Check Into Your Hotel.</p>
                  <p className="activity">Visit Marina Bay Sands Sky Park (2-3 Hours).</p>
                  <p className="activity optional">Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="time">Evening</span>
                  <p className="activity">Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Flight Summary --- */}
        <div className="section  pdf-section">
          <h3 className="section-title"><span>Flight</span> <span className="highlight">Summary</span></h3>
          <div className="summary-item-row  pdf-section">
            <div className="summary-item-label">Thu 10 Jan'24</div>
            <div className="summary-item-value">
              <span>Fly Air India From Delhi (DEL) To Singapore (SIN)</span>
            </div>
          </div>
          <div className="summary-item-row  pdf-section">
            <div className="summary-item-label">Thu 10 Jan'24</div>
            <div className="summary-item-value">
              <span>Fly Air India From Delhi (DEL) To Singapore (SIN)</span>
            </div>
          </div>
          <div className="summary-item-row  pdf-section">
            <div className="summary-item-label">Thu 10 Jan'24</div>
            <div className="summary-item-value">
              <span>Fly Air India From Delhi (DEL) To Singapore (SIN)</span>
            </div>
          </div>
          <div className="summary-item-row  pdf-section">
            <div className="summary-item-label">Thu 10 Jan'24</div>
            <div className="summary-item-value">
              <span>Fly Air India From Delhi (DEL) To Singapore (SIN)</span>
            </div>
          </div>
          
          <p className="note">Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25KG Checked Baggage.</p>
        </div>
<div class="page-break"></div>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>


        {/* --- Hotel Bookings --- */}
        <div className="section  pdf-section">
          <h3 className="section-title"><span>Hotel</span> <span className="highlight">Bookings</span></h3>
          <div className="custom-table hotel-table">
            <div className="custom-table-header">
              <div className="header-cell">City</div>
              <div className="header-cell">Check In</div>
              <div className="header-cell">Check Out</div>
              <div className="header-cell">Nights</div>
              <div className="header-cell">Hotel Name</div>
            </div>
            <div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Singapore</div>
                <div className="table-cell">24/02/2024</div>
                <div className="table-cell">24/02/2024</div>
                <div className="table-cell">2</div>
                <div className="table-cell">Super Townhouse Oak Vashi Formerly Blue Diamond</div>
              </div>
              
            </div>
             <div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Singapore</div>
                <div className="table-cell">24/02/2024</div>
                <div className="table-cell">24/02/2024</div>
                <div className="table-cell">2</div>
                <div className="table-cell">Super Townhouse Oak Vashi Formerly Blue Diamond</div>
              </div>
              
            </div>
             <div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Singapore</div>
                <div className="table-cell">24/02/2024</div>
                <div className="table-cell">24/02/2024</div>
                <div className="table-cell">2</div>
                <div className="table-cell">Super Townhouse Oak Vashi Formerly Blue Diamond</div>
              </div>
              
            </div>
             
             
          </div>
          <ul className="notes-list">
              <li>All Hotels Are Tentative And Can Be Replaced With Similar.</li>
              <li>Breakfast Included For All Hotel Stays.</li>
              <li>All Hotels Will Be 4* And Above Category</li>
              <li>A maximum occupancy of 2 people/room is allowed in most hotels.</li>
          </ul>
        </div>

        {/* --- Important Notes --- */}
        <div className="section  pdf-section">
            <h3 className="section-title"><span>Important</span> <span className="highlight">Notes</span></h3>
            <div className="custom-table notes-table">
              <div className="custom-table-header">
                <div className="header-cell">Point</div>
                <div className="header-cell">Details</div>
              </div>
              <div className="custom-table-body">
                <div className="table-data-row">
                  <div className="table-cell">Airlines Standard Policy</div>
                  <div className="table-cell">In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.</div>
                </div>
                <div className="table-data-row">
                  <div className="table-cell">Flight/Hotel Cancellation</div>
                  <div className="table-cell">In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.</div>
                </div>
                <div className="table-data-row">
                  <div className="table-cell">Trip Insurance</div>
                  <div className="table-cell">In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.</div>
                </div>
              </div>
            </div>
        </div>

        {/* --- Scope of Service --- */}
        <div className="section  pdf-section">
            <h3 className="section-title"><span>Scope Of</span> <span className="highlight">Service</span></h3>
            <div className="custom-table service-table  pdf-section">
               <div className="custom-table-header">
                <div className="header-cell">Service</div>
                <div className="header-cell">Details</div>
              </div>
              <div className="custom-table-body">
                <div className="table-data-row">
                  <div className="table-cell">Flight Tickets And Hotel Vouchers</div>
                  <div className="table-cell">Delivered 3 Days Post Full Payment</div>
                </div>
                <div className="table-data-row">
                  <div className="table-cell">Web Check-In</div>
                  <div className="table-cell">Boarding Pass Delivery Via Email/WhatsApp</div>
                </div>
                <div className="table-data-row">
                  <div className="table-cell">Web Check-In</div>
                  <div className="table-cell">Boarding Pass Delivery Via Email/WhatsApp</div>
                </div>
                <div className="table-data-row">
                  <div className="table-cell">Web Check-In</div>
                  <div className="table-cell">Boarding Pass Delivery Via Email/WhatsApp</div>
                </div>
               
              </div>
            </div>
        </div>

<div class="page-break"></div>
<br>
</br>
<br>
</br><br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>


        {/* --- Inclusion Summary --- */}
        <div className="section">
          <h3 className="section-title"><span>Inclusion</span> <span className="highlight">Summary</span></h3>
          <div className="custom-table inclusion-table">
            <div className="custom-table-header">
              <div className="header-cell">Category</div>
              <div className="header-cell">Count</div>
              <div className="header-cell">Details</div>
              <div className="header-cell">Status / Comments</div>
            </div>
            <div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Flight</div>
                <div className="table-cell">2</div>
                <div className="table-cell">All Flights Mentioned</div>
                <div className="table-cell">Awaiting Confirmation</div>
              </div>
              <div className="table-data-row">
                <div className="table-cell">Tourist Tax</div>
                <div className="table-cell">2</div>
                <div className="table-cell">Yotel (Singapore), Oakwood (Sydney), etc.</div>
                <div className="table-cell">Awaiting Confirmation</div>
              </div>
              <div className="table-data-row">
                <div className="table-cell">Hotel</div>
                <div className="table-cell">2</div>
                <div className="table-cell">Airport To Hotel - Hotel To Attractions - Day Trips If Any</div>
                <div className="table-cell">Included</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Activity Table --- */}
        <div className="section">
          <h3 className="section-title"><span>Activity</span> <span className="highlight">Table</span></h3>
          <div className="custom-table activity-table">
            <div className="custom-table-header">
              <div className="header-cell">City</div>
              <div className="header-cell">Activity</div>
              <div className="header-cell">Type</div>
              <div className="header-cell">Time Required</div>
            </div>
            <div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Rio De Janeiro</div>
                <div className="table-cell">Sydney Harbour Cruise & Taronga Zoo</div>
                <div className="table-cell">Nature/Sightseeing</div>
                <div className="table-cell">2-3 Hours</div>
              </div>
            </div>
            <div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Rio De Janeiro</div>
                <div className="table-cell">Sydney Harbour Cruise & Taronga Zoo</div>
                <div className="table-cell">Nature/Sightseeing</div>
                <div className="table-cell">2-3 Hours</div>
              </div>
            </div>
            <div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Rio De Janeiro</div>
                <div className="table-cell">Sydney Harbour Cruise & Taronga Zoo</div>
                <div className="table-cell">Nature/Sightseeing</div>
                <div className="table-cell">2-3 Hours</div>
              </div>
            </div><div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Rio De Janeiro</div>
                <div className="table-cell">Sydney Harbour Cruise & Taronga Zoo</div>
                <div className="table-cell">Nature/Sightseeing</div>
                <div className="table-cell">2-3 Hours</div>
              </div>
            
            </div>
          </div>
        </div>
        
        {/* --- Terms and Conditions --- */}
        <div className="section">
            <h3 className="section-title"><span>Terms and</span> <span className="highlight">Conditions</span></h3>
            <a href="#" className="terms-link">View all terms and conditions</a>
        </div>


        {/* --- Payment Plan --- */}
        <div className="section">
          <h3 className="section-title"><span>Payment</span> <span className="highlight">Plan</span></h3>
          <div className="summary-item-row">
            <div className="summary-item-label">Total Amount</div>
            <div className="summary-item-value"><span>₹ 9,00,000 For 3 Pax (Inclusive Of GST)</span></div>
          </div>
          <div className="summary-item-row">
            <div className="summary-item-label">TCS</div>
            <div className="summary-item-value"><span>Not Collected</span></div>
          </div>
          <div class="page-break"></div>

          <div className="custom-table payment-table">
            <div className="custom-table-header">
              <div className="header-cell">Installment</div>
              <div className="header-cell">Amount</div>
              <div className="header-cell">Due Date</div>
            </div>
            <div className="custom-table-body">
              <div className="table-data-row">
                <div className="table-cell">Installment 1</div>
                <div className="table-cell">₹3,50,000</div>
                <div className="table-cell">Initial Payment</div>
              </div>
              
            </div>
          </div>
        </div>
<br>
</br>
<br>
</br><br>
</br>
<br>
</br>
<br>
</br>

<br>
</br>
<br>
</br>
<br>
</br>

        {/* --- Visa Details --- */}
        <div className="section">
            <h3 className="section-title"><span>Visa</span> <span className="highlight">Details</span></h3>
            <div className="visa-details-box">
                <div>
                    <span className="detail-label">Visa Type :</span>
                    <span className="detail-value">Tourist</span>
                </div>
                <div>
                    <span className="detail-label">Validity :</span>
                    <span className="detail-value">30 Days</span>
                </div>
                <div>
                    <span className="detail-label">Processing Date :</span>
                    <span className="detail-value">14/06/2025</span>
                </div>
            </div>
        </div>


        <div className="footer">
          <p>PLAN.PACK.GO!</p>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </>
  );
}

export default Itinerary;