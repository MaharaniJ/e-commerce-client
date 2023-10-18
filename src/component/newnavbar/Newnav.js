import React from "react";
import './newnav.css'
import nav from '../../assets/nav.jpg'

function Newnav() {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Mobiles</p>
          <p>BestSellers</p>
          <p>Customer Service</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's Deals</p>
          <p>Amazon Pay</p>
        </div>

        <div className="right_data">
            <img src={nav} alt="logo"/>
        </div>
      </div>
    </div>
  );
}

export default Newnav;
