import React, { useState } from 'react';
import pic from './assets/nann.jpg'; // Background image
import totPic from './assets/tot.jpg';
import stay from './assets/stay.jpg';
import play from './assets/play.jpg';

const LandingPage = () => {
  // State to manage menu visibility
  const [menuOpen, setMenuOpen] = useState(true);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div 
        className='container-fluid p-0 d-flex flex-column fw-lighter font-abel'
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Full viewport height
          color: 'white'
        }}
      >
        {/* Hamburger menu */}
        <div className="d-flex justify-content-start p-3">
          <div className="hamburger-menu" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
            <div style={{ width: '30px', height: '3px', backgroundColor: 'white', marginBottom: '5px' }}></div>
            <div style={{ width: '30px', height: '3px', backgroundColor: 'white', marginBottom: '5px' }}></div>
            <div style={{ width: '30px', height: '3px', backgroundColor: 'white' }}></div>
          </div>
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="dropdown-menu" style={{ position: 'absolute', top: '60px', left: '10px', backgroundColor: 'white', color: 'black', borderRadius: '5px', width: '200px', padding: '10px' }}>
            <a href="#home" className="dropdown-item">Home</a>
            <a href="#services" className="dropdown-item">Services</a>
            <a href="#about" className="dropdown-item">About Us</a>
            <hr />
            <a href="#signout" className="dropdown-item text-danger">Sign Out</a>
          </div>
        )}

        {/* Centered content */}
        <div className="d-flex flex-column justify-content-center align-items-center text-dark" style={{ flex: 1 }}>
          <h1 className="text-center fs-1" style={{ fontWeight: 'bold' }}>Bon Hotels</h1>
          <p className="text-center fs-3">Luxury Meets Affordability!</p>
        </div>
      </div>

      {/* Other content */}
      <div className='container p-2 d-flex flex-column'>
        <div className="d-flex flex-row mt-4">
          <img src={totPic} alt="Hotel 1st Entrance Doors" style={{ width: '650px' }} />
          <div className="card-body p-2">
            <h5 className="card-title align-centre fs-4">Queen's Hotel By Bon Hotel</h5>
            <p className="card-text text-start">
              The Queen’s Hotel by BON Hotels, located in the heart of Oudtshoorn, is South Africa’s oldest four-star hotel and the third oldest hotel in the country, offering timeless elegance since 1880...
            </p>
            <a href="https://bonhotels.com/wp-content/uploads/2022/11/BON-Hotel-Queens-Hotel-Fact-Sheet.pdf" className="btn btn-dark rounded-pill align-start">Fact Sheet</a>
          </div>
        </div>

        <div className="d-flex mt-4">
          <div className="col">
            <img src={play} alt="Playground" style={{ width: '100%' }} />
            <div className="col-img-overlay">
              <h5 className="title fs-4 text-dark">Queen's Hotel By Bon Hotel</h5>
            </div>
          </div>
          <div className="col">
            <img src={stay} alt="Stay" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
