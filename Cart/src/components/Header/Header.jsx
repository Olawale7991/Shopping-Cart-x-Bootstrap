import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from '../Buttons/CartBtn'
import Login from '../Buttons/Login'
import SignUp from '../Buttons/signUp'

const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid py-2'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-link' aria-current='page' >Home </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/products' className='nav-link' aria-current='page' >Product </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-link' aria-current='page' >About </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/contact' className='nav-link' aria-current='page' >Contact </NavLink>
                        </li>
                    </ul>
                    <NavLink to='/' className='nav-link'>Apple Mart</NavLink>
                    <Login />
                    <SignUp />
                    <CartBtn />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header