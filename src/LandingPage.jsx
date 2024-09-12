import React from 'react'
import pic from './assets/nann.jpg'
import totPic from './assets/tot.jpg'
import stay from './assets/stay.jpg'
import play from './assets/play.jpg'

const LandingPage = () => {
  return (
    <>
    <div className='container p-2 d-flex flex-column fw-lighter font-abel' >
    <img src={pic} alt="Queen's hotel"/>
    <div className='d-flex flex-row  bg-dark text-light p-1 justify-content-between mb-4 ' style={{height:"50px"}}>
    <div className="col">
      <p className='fs-5' ><b><strong>Book</strong> </b>online</p>
    </div>
    <div className="col">
      <p className=''>Lowest price 
        <br />
        guaranteed
      </p>
    </div>
    <div className="col p-2">
    <label> check-in</label>
    </div>
    <div className="col p-2">
    <input type="date" placeholder='start'/>
    </div>
 
    <div className="col p-2">
        <label > Check-out  
             
        </label>
    </div>
    <div className="col p-2">
        <input type="date" placeholder='start'/>
    </div>
    
    <div className="col ">
      <p>I have a promocode
      </p>
    </div>
    <div className="col ">
      <p>Check Availability
      </p>
    </div>
    </div>
    
    <div className= "d-flex flex-row ">
        <img src={totPic} alt="Doors" style={{width : "650px"}}/>
        <div className="card-body p-2">
    <h5 className="card-title align-centre fs-4">Queen's Hotel By Bon Hotel</h5>
    <br />
    <p className="card-text text-start">The Queen’s Hotel by BON Hotels, located in the heart of Oudtshoorn, is South Africa’s oldest four-star hotel and the third oldest hotel in the country, offering timeless elegance since 1880. Nestled in the global Ostrich Capital, this historical gem blends old-world charm with modern luxury, making it the perfect destination for travelers exploring the picturesque Klein Karoo. Recently renovated to its former glory, the Queen’s Hotel offers 42 non-smoking rooms, from double and twin to family and deluxe options, ensuring a comfortable and sophisticated stay for all.<br /><br />

Step back in time at this iconic establishment, where fine dining, first-class service, and the legacy of Oudtshoorn’s rich ostrich farming history come together. Whether you're here for business or leisure, the Queen’s Hotel offers an unforgettable experience that echoes the grandeur of a bygone era while delivering all the contemporary amenities you could desire.</p>
    <a href="#" className="btn btn-dark rounded-pill align-start">Fact Sheet</a>
  </div>
    </div>

    <div className="d-flex mt-4">
  <div className="col">
    <img src={play} alt="Snow" style={{width:"100%"}}/>
  <div className="col-img-overlay">
    <h5 className="title fs-4 text-dark">Queen's Hotel By Bon Hotel</h5>
  </div>

  </div>
  <div className="col">
    <img src={stay} alt="Forest" style={{width:"100%"}} />
  </div>
    </div>
    </div>
    </>
  
  )
}

export default LandingPage