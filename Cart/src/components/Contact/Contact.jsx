import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Have Some Question?</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className='col-md-5 d-flex justify-content-center'>
                    <img src="assets/images/contact.png" alt="Contact Us" height='300px' width='300px' />
                </div>
                <div className='col-md-6'>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'> Full Name</label>
                            <input type="text" className='form-control' placeholder='Olawale Ridwan' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'> Email Adress</label>
                            <input type="text" className='form-control' placeholder='Olawale@gmail.com' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label'> Message</label>
                            <textarea type="text" className='form-control' placeholder='Olawale Ridwan' rows='5'></textarea>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'> Send Message</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact