import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
        <div className='container-fluid' >
        <div className='row justify-content-center mt-3'>
        <div className='col-md- text-center'>

            <p className="lead">
                <i>BON Villa ~ Affordability meets <b>luxury</b></i>
            </p>

        </div>
        <Outlet />
        </div>
        </div>
  )
}

export default Layout