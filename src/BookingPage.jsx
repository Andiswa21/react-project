import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, push, set } from 'firebase/database';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import app from './firebase';

const BookingPage = () => {
  const { state } = useLocation();
  const room = state?.room;
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  const handlePaymentSuccess = async (details) => {
    try {
      const db = getDatabase(app);
      const bookingRef = push(ref(db, 'hotel/bookings'));
      await set(bookingRef, {
        userName,
        email,
        roomId: room.roomId,
        roomTitle: room.roomtitle,
        roomPrice: room.roomPrice,
        bookingDate: new Date().toISOString(),
        paymentStatus: 'Paid',
        paymentDetails: details, // Save the PayPal transaction details
      });

      setBookingSuccess(true);
      alert('Booking confirmed! Payment successful.');
      navigate('/'); // Redirect after booking
    } catch (error) {
      console.error('Error processing booking:', error);
      alert('Payment processing failed, please try again.');
    }
  };

  if (!room) return <p>No room selected for booking.</p>;

  return (
    <div className="booking-page">
      <h1>Book Room: {room.roomtitle}</h1>
      <p>{room.roomDescription}</p>
      <p>Price: ${room.roomPrice}</p>

      <div className="booking-form">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />

        {/* PayPal Integration */}
        <PayPalScriptProvider options={{ "client-id": "Ab-BdpMR9gMBaBbHJ3q7baDpebiIfeMebQIjBNE4itrQoSoyEj3JuOgzduPDbbk4G1DKvyrBeI99mZ7m" }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: room.roomPrice.toString(), // Ensure it's a string
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                handlePaymentSuccess(details);
              });
            }}
            onError={(err) => {
              console.error('PayPal Checkout Error:', err);
              alert('Payment failed, please try again.');
            }}
          />
        </PayPalScriptProvider>
      </div>

      {bookingSuccess && <p>Booking confirmed! Check your email for details.</p>}
    </div>
  );
};

export default BookingPage;
