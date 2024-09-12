import Signup from './Signup'
import Layout from './Layout'
import Profile from './Profile'
import Login from '../Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'

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
    </Routes>
    </BrowserRouter>
  )
}

export default App
