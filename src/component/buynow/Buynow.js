import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./buynow.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
import Empty from "./Empty";
import axios from "axios";

function Buynow() {
  const [cartData, setCartdata] = useState([]);
  console.log(cartData);
  const token = window.localStorage.getItem("app-token");

  const getbuydata = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/cartdetails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 201) {
        console.log("Error fetching data");
      } else {
        setCartdata(response.data.carts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getbuydata();
  }, []);

  return (
    <>
      {cartData.length > 0 ? ( // Check if cartData is an array with items
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className="leftbuyprice">Price</span>
              <Divider />
              {cartData.map((item, index) => (
                <div className="item_containert" key={index}>
                  <img src={item.detailUrl} alt="imgitem" />
                  <div className="item_details">
                    <h3>{item.title.longTitle}</h3>
                    <h3>{item.title.shortTitle}</h3>
                    <h3 className="diffrentprice">₹{item.price.cost}.00</h3>
                    <p className="unusuall">Usually dispatched in 8 days.</p>
                    <p>Eligible for FREE Shipping</p>
                    <img
                      src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                      alt="logo"
                    />
                    <Option deleteData={item.id} getData={getbuydata} />
                  </div>
                  <h3 className="item_price">₹{item.price.cost}.00</h3>
                </div>
              ))}
              <Divider />

              <Subtotal item={cartData} />
            </div>
            <Right item={cartData} />
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default Buynow;
