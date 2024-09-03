import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-primary fw-bold mb-4'>About us</h1>
                    <p className='lead'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum explicabo velit, fuga tempore doloremque a minus nesciunt ea dicta odit sequi neque fugit et repellendus laborum nulla amet! Natus.</p>
                    <NavLink to= '/contact' className='btn btn outline-primary px-3'>Contact Us</NavLink>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src='assets/images/about.png' alt="About Us" height='400px' width='400px'/>
                </div>
            </div>
        
        </div>   
    </div>
  )
}

export default About