import React, { useState } from 'react'
import app from './firebase'
import { getDatabase, ref, get} from 'firebase/database'
import img from './assets/logo-bon.jpg'

const Read = () => {
    const [roomArray, setRoomArray] = useState([]);

    const fetchData = async () =>{
        const db = getDatabase(app);
        const dbRef = ref(db,'hotel/rooms');
        const snapshot = await get(dbRef);

        if(snapshot.exists()){
            setRoomArray(Object.values(snapshot.val()));
        }else{
            alert("error");
        }
    }
  return (
    <div>
        <button onClick={fetchData}>Read Data</button>
        <ul>
            {roomArray.map((item ,index)=> (
                <li key={index}>
                    {/* {item.roomtitle}
                    <br />{item.roomDescription} <br /> {item.roomPrice} <br /> {item.isAvailable} */}

                    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.roomtitle} </h5>
        <p className="card-text">{item.roomDescription} </p>
        <p className="card-text"> <strong>R <small className="text-body-secondary">{item.roomPrice}</small></strong></p>
      </div>
    </div>
  </div>
</div>
                </li>
            ))}
        </ul>
        </div>
  )
}

export default Read