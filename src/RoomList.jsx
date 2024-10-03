import React, { useState, useEffect } from 'react';
import app from './firebase';
import { getDatabase, ref, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const RoomList = () => {
  const [roomArray, setRoomArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, 'hotel/rooms');
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setRoomArray(Object.values(snapshot.val()));
        setError(null);  // Clear error if data is fetched
      } else {
        setError("No rooms available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch rooms.");
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = (room) => {
    navigate('/booking', { state: { room } });
  };
  

  if (loading) {
    return <p>Loading rooms...</p>;
  }

  return (
    <div className="container">
      <h1>Available Rooms</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="room-card-grid d-flex justify-content-evenly">
        {roomArray.map((room, index) => (
          <div key={index} className="room-card border " style = {{width : "18rem"}}>
            <img
              src={room.roomImage || 'default-image-url.jpg'}
              alt="Room"
              className="card-img-top"
            />
            <div className="room-info">
              <h2>{room.roomtitle}</h2>
              <p>{room.roomDescription}</p>
              <p>Price: ${room.roomPrice}</p>
              <p>{room.isAvailable ? 'Available' : 'Not Available'}</p>
              <button className ="rounded bg-secondary border-0 mb-2 align-center" onClick={() => handleBooking(room)} disabled={!room.isAvailable}>
                {room.isAvailable ? 'Book Now' : 'Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
