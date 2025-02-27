import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {delItem} from '../../redux/actions/index'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className='container py-4'>
                    <button onClick={() => handleClose(cartItem)} className='btn-close float-end'
                        aria-label='close'>
                    </button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.img} alt={cartItem.title} height='200px' width='180px'/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>$ {cartItem.price}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return(
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
              {
                state.lenght 
              }
            </div>
        )
    }

    const button =() => {
        return(
            <div className='container'>
                <div className='row'>
                    <NavLink to='./checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed To Checkpoint</NavLink>
                </div>

            </div>
        )
    }
  return (
    <div>
        {state.lenght === 0 && emptyCart()}
        {state.lenght !== 0 && state.map(cartItems)}
        {state.lenght !== 0 && button()}
    </div>
  )
}

export default Cart