import React from 'react'

const Login = () => {
  return (
    <div>
        <button type='button' className='btn btn-outline-primary ms-auto' data-bs-toggle= 'modal' data-bs-target='#loginModal'>
            <span className='fa fa-sign-in me-1'></span> Login
        </button>

        <div className='modal fade' id='loginModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>Login</h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                        <button className='btn btn-primary w-100 mb-4'>
                            <span className='fa fa-google me-2'></span> Sign in with google
                        </button>
                        <button className='btn btn-primary w-100 mb-4'>
                            <span className='fa fa-facebook me-2'></span> Sign in with Facebook
                        </button>
                        <form>
                            <div className='mb-3'>
                                <label htmlFor='email'>Email address</label>
                                <input type='email' className='form-control' id='exampleInputEmail' aria-describedby='emailHelp' required/>
                                <div id='emailHelp' className='form-text'>We will never share your email anyone else.</div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' className='form-control' id='exampleInputpassword1' required/>
                            </div>
                            <div className='mb-3 form-check'>
                                <input type='checkbox' className='form-check-input' id='rememberMe'/>
                                <label className='form-check-label' htmlFor='rememberMe'>Remember me</label>
                            </div>
                            <button type='submit' className='btn btn-primary w-100 mt-5'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login
