import React , {useState , useEffect }from 'react'
import app from './firebase';
import { getDatabase, ref ,get} from 'firebase/database'

const AdminBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);
  
    const fetchBookings = async () => {
      try {
        const db = getDatabase(app);
        const bookingRef = ref(db, 'hotel/bookings');
        const snapshot = await get(bookingRef);
        if (snapshot.exists()) {
          setBookings(Object.values(snapshot.val()));
        } else {
          setError("No bookings available.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError("Failed to fetch bookings.");
      }
    };
  
    useEffect(() => {
      fetchBookings();
    }, []);
  
    return (
      <div className="admin-bookings">
        <h1>Admin Portal - Bookings</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <p>User: {booking.userName}</p>
              <p>Room: {booking.roomTitle}</p>
              <p>Price: {booking.roomPrice}</p>
              <p>Payment Status: {booking.paymentStatus}</p>
              <p>Booking Date: {booking.bookingDate}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AdminBooking;
  