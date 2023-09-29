import React from 'react'
import "./newnav.css"
import navimage from '../../assets/nav.jpg'

function Newnav() {
  return (
    <div className='new_nav'>
        <div className='nav_data'>
            <div className='left_data'>
                <p>All</p>
                <p>Mobile</p>
                <p>Bestseller</p>
                <p>Fashion</p>
                <p>Cuatomers Services</p>
                <p>Electronics</p>
                <p>Prime</p>
                <p>Today's deal</p>
                <p>Amazon Pay</p>
            </div>
            <div className='right_data'>
                <img src={navimage} alt='navatar'  />
            </div>
        </div>
    </div>
  )
}

export default Newnav