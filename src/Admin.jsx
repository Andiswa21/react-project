import React, { useState, useRef } from 'react';
import app from './firebase';
import { getDatabase, ref, set, push, get } from 'firebase/database'; // Added get
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase Storage

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [roomArray, setRoomArray] = useState([]); // Room array state added
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const db = getDatabase(app);
      const storage = getStorage(app);
      
      let roomImageURL = "";

      if (selectedFile) {
        // Upload the image to Firebase Storage
        const storageReference = storageRef(storage, `rooms/${selectedFile.name}`);
        const snapshot = await uploadBytes(storageReference, selectedFile);
        roomImageURL = await getDownloadURL(snapshot.ref); // Get the URL of the uploaded image
      }

      const newDocRef = push(ref(db, "hotel/rooms"));
      await set(newDocRef, {
        roomtitle: title,
        roomDescription: description,
        roomPrice: price,
        isAvailable: availability,
        roomImage: roomImageURL
      });

      alert("Data Saved Successfully");
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, 'hotel/rooms');
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        setRoomArray(Object.values(snapshot.val()));
      } else {
        alert("No rooms available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <div className="p-12">
        <form className="container text-center border" onSubmit={saveData}>
          <h1>Room Enrolment</h1>
          <div className="mb-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              required
            />
          </div>
          <div className="mb-3">
            <label>
              Available:
              <input
                type="checkbox"
                checked={availability}
                onChange={(e) => setAvailability(e.target.checked)}
              />
            </label>
          </div>
          <div className="mb-3">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} />
          </div>
          <div className="d-flex justify-content-center">
            <button className="border-0" type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Data"}
            </button>
          </div>
        </form>

        <div className="getRooms mt-4">
          <button onClick={fetchData}>All Rooms</button>
          <ul>
            {roomArray.map((item, index) => (
              <li key={index}>
                <strong>{item.roomtitle}</strong>
                <br />
                {item.roomDescription}
                <br />
                Price: {item.roomPrice}
                <br />
                {item.isAvailable ? "Available" : "Not Available"}
                {item.roomImage && <img src={item.roomImage} alt="Room" style={{ width: '100px' }} />}
              </li>
            ))}
          </ul>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default Admin;
