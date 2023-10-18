import { Divider } from "@mui/material";
import React from "react";
import "./cart.css";

function Cart() {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"
            alt=""
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>Pigeon FACOURATE Electric Kettle(1.5 L, Silver, Black)</h4>
          <Divider />
          <p className="mrp">M.R.P. :₹2052</p>
          <p>
            Deal of the Day:<span style={{ color: "#B12704" }}>₹625.00</span>
          </p>
          <p>
            You save : :<span style={{ color: "#B12704" }}>₹580 (47%)</span>
          </p>
          <div className="discount_box">
            <h5>
              Discount:<span style={{ color: "#111" }}>Extra 10% Off</span>
            </h5>
            <h4>
              Free Delivery :
              <span style={{ color: "#111", fontWeight: "600" }}>
                Oct 8 - 12
              </span>
              Details
            </h4>
            <p>
              Fastest delivery:
              <span style={{ color: "#111", fontWeight: "600" }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            <span
              style={{
                color: "#565959",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.4px",
              }}
            >
              About the Item : This electric kettle from Pigeon will soon become
              a
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
