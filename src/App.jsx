import Signup from './Signup'
import Layout from './Layout'
import Profile from './Profile'
import Login from '../Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Admin from './Admin'
import Read from './Read'
import BookingPage from './BookingPage'
import RoomList from './RoomList'
import AdminBooking from './AdminBooking'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element= {<Layout />}>
    <Route index element ={<Login />} />
    <Route path='/signup' element= {<Signup />}/>
    <Route path='/profile' element= {<Profile />}/>
    </Route>
    <Route path='/home' element= {<LandingPage />}/>
    <Route path='/admin' element= {<Admin />}/>
    <Route path='/read' element= {<Read />}/>
    <Route path='/booking' element= {<BookingPage />}/>
    <Route path='/hotelrooms' element= {<RoomList />}/>
    <Route path='/roomsmanage' element= {<AdminBooking />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
